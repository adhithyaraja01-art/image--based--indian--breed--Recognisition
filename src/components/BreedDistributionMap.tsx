import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import {
  MapPin,
  Sparkles,
  Info,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Compass,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import indiaGeoData from '../data/indiaStatesGeo.json';
import { INDIAN_BREEDS_CATALOG } from '../data/indigenousBreeds';
import { buildStateBreedIndex, getTopStateHotspots, StateBreedSummary } from '../utils/breedMapData';
import { BreedInfo, BreedCategory } from '../types/breed';

interface BreedDistributionMapProps {
  onSelectBreedForClassification?: (imageUrl: string, title: string) => void;
  onOpenBreedModal?: (breed: BreedInfo) => void;
  onNavigateToCatalog?: () => void;
}

export const BreedDistributionMap: React.FC<BreedDistributionMapProps> = ({
  onSelectBreedForClassification,
  onOpenBreedModal,
  onNavigateToCatalog
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomGRef = useRef<SVGGElement>(null);

  // Filters
  const [speciesFilter, setSpeciesFilter] = useState<'All' | 'Cattle' | 'Buffalo' | 'Goat' | 'Dog'>('All');
  const [utilityFilter, setUtilityFilter] = useState<'All' | 'Milch' | 'Draught' | 'Dual Purpose'>('All');
  const [selectedStateName, setSelectedStateName] = useState<string>('Gujarat');
  const [hoveredState, setHoveredState] = useState<{
    name: string;
    count: number;
    cattle: number;
    buffalo: number;
    goat: number;
    dog: number;
    x: number;
    y: number;
  } | null>(null);

  // Filtered Breeds based on user controls
  const filteredBreeds = useMemo(() => {
    return INDIAN_BREEDS_CATALOG.filter((b) => {
      const matchSpecies = speciesFilter === 'All' || b.category === speciesFilter;
      const matchUtility =
        utilityFilter === 'All' ||
        b.productivity.primaryUtility.toLowerCase().includes(utilityFilter.toLowerCase());
      return matchSpecies && matchUtility;
    });
  }, [speciesFilter, utilityFilter]);

  // Index breeds by state
  const stateIndex = useMemo(() => {
    return buildStateBreedIndex(filteredBreeds);
  }, [filteredBreeds]);

  // Top Hotspot states for quick-click chips
  const topHotspots = useMemo(() => {
    return getTopStateHotspots(stateIndex, 5);
  }, [stateIndex]);

  // Selected State summary
  const selectedStateSummary = useMemo(() => {
    return stateIndex.get(selectedStateName) || null;
  }, [stateIndex, selectedStateName]);

  // Agricultural Color Scale: Light cream to lush Forest Green
  const colorScale = useMemo(() => {
    return (count: number) => {
      if (count === 0) return '#f5f2eb'; // warm cream neutral
      if (count <= 2) return '#dcfce7'; // soft green (emerald-100)
      if (count <= 4) return '#86efac'; // light green (emerald-300)
      if (count <= 7) return '#22c55e'; // vibrant green (emerald-500)
      return '#15803d'; // deep forest green (emerald-700)
    };
  }, []);

  // Set up D3 Map projection, paths, zoom, and interactions
  useEffect(() => {
    if (!svgRef.current || !zoomGRef.current) return;

    const width = 640;
    const height = 720;

    const svg = d3.select(svgRef.current);
    const g = d3.select(zoomGRef.current);

    // Mercator Projection centered on India
    const projection = d3.geoMercator()
      .center([82.8, 22.2])
      .scale(1080)
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Zoom setup
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.85, 5])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Bind GeoJSON features
    const paths = g.selectAll<SVGPathElement, any>('path.state-boundary')
      .data(indiaGeoData.features, (d: any) => d.properties.name);

    paths.enter()
      .append('path')
      .attr('class', 'state-boundary transition-all duration-300')
      .attr('d', (d: any) => pathGenerator(d as any))
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 0.8)
      .attr('cursor', 'pointer')
      .merge(paths)
      .attr('fill', (d: any) => {
        const stateSummary = stateIndex.get(d.properties.name);
        const count = stateSummary ? stateSummary.totalBreeds : 0;
        return colorScale(count);
      })
      .attr('stroke', (d: any) => {
        return d.properties.name === selectedStateName ? '#d97706' : '#ffffff';
      })
      .attr('stroke-width', (d: any) => {
        return d.properties.name === selectedStateName ? 2.5 : 0.8;
      })
      .attr('stroke-linejoin', 'round')
      .on('mouseenter', function (event, d: any) {
        d3.select(this)
          .attr('opacity', 0.85)
          .attr('stroke', '#d97706')
          .attr('stroke-width', 2);

        const summary = stateIndex.get(d.properties.name);
        const [x, y] = d3.pointer(event, svgRef.current);
        setHoveredState({
          name: d.properties.name,
          count: summary ? summary.totalBreeds : 0,
          cattle: summary ? summary.cattleCount : 0,
          buffalo: summary ? summary.buffaloCount : 0,
          goat: summary ? summary.goatCount : 0,
          dog: summary ? summary.dogCount : 0,
          x,
          y
        });
      })
      .on('mouseleave', function (event, d: any) {
        const isSelected = d.properties.name === selectedStateName;
        d3.select(this)
          .attr('opacity', 1)
          .attr('stroke', isSelected ? '#d97706' : '#ffffff')
          .attr('stroke-width', isSelected ? 2.5 : 0.8);

        setHoveredState(null);
      })
      .on('click', function (_event, d: any) {
        setSelectedStateName(d.properties.name);
      });

    paths.exit().remove();
  }, [stateIndex, selectedStateName, colorScale]);

  // Zoom handlers
  const handleZoom = (factor: number) => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.transition().duration(300).call(
      d3.zoom<SVGSVGElement, unknown>().scaleBy as any,
      factor
    );
  };

  const handleResetZoom = () => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.transition().duration(400).call(
      d3.zoom<SVGSVGElement, unknown>().transform as any,
      d3.zoomIdentity
    );
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden animate-fadeIn">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 bg-white border-b border-stone-200">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-emerald-200/80">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>D3.js Spatial Bioscience Visualization</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Indigenous Livestock &amp; Canine Breed Distribution Map of India
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
              Explore the geographic origins and breeding tracts of all 99 recognized cattle, buffalo, goat, and dog breeds across India&apos;s agro-ecological zones. Click any state to reveal localized native germplasm.
            </p>
          </div>

          {/* Quick Hotspot Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500 font-mono text-[11px] block w-full lg:w-auto">Major Hotspots:</span>
            {topHotspots.map((spot) => (
              <button
                key={spot.stateName}
                onClick={() => setSelectedStateName(spot.stateName)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  selectedStateName === spot.stateName
                    ? 'bg-emerald-800 text-white border-emerald-800 font-bold shadow-xs'
                    : 'bg-stone-50 hover:bg-emerald-50 text-stone-700 hover:text-emerald-950 border-stone-200'
                }`}
              >
                {spot.stateName} ({spot.totalBreeds})
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
          {/* Species Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-50 border border-stone-200 text-xs flex-wrap">
            <span className="text-[11px] text-stone-500 px-2 font-mono">Species:</span>
            {(['All', 'Cattle', 'Buffalo', 'Goat', 'Dog'] as const).map((sp) => (
              <button
                key={sp}
                onClick={() => setSpeciesFilter(sp)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                  speciesFilter === sp
                    ? 'bg-emerald-800 text-white font-bold shadow-xs'
                    : 'text-stone-700 hover:text-emerald-950 hover:bg-white'
                }`}
              >
                {sp === 'All' ? 'All (99)' : sp === 'Cattle' ? '🐂 Cattle (53)' : sp === 'Buffalo' ? '🐃 Buffalo (20)' : sp === 'Goat' ? '🐐 Goat (14)' : '🐕 Dog (12)'}
              </button>
            ))}
          </div>

          {/* Utility Filter */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-50 border border-stone-200 text-xs">
            <span className="text-[11px] text-stone-500 px-2 font-mono">Utility:</span>
            {(['All', 'Milch', 'Draught', 'Dual Purpose'] as const).map((ut) => (
              <button
                key={ut}
                onClick={() => setUtilityFilter(ut)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                  utilityFilter === ut
                    ? 'bg-emerald-800 text-white font-bold shadow-xs'
                    : 'text-stone-700 hover:text-emerald-950 hover:bg-white'
                }`}
              >
                {ut}
              </button>
            ))}
          </div>

          {/* State Quick Jump Selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="state-jump-select" className="text-xs text-stone-600 font-mono flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Jump to State:</span>
            </label>
            <select
              id="state-jump-select"
              value={selectedStateName}
              onChange={(e) => setSelectedStateName(e.target.value)}
              className="bg-white border border-stone-200 text-stone-900 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-700 cursor-pointer shadow-xs"
            >
              {Array.from(stateIndex.keys()).sort().map((stName) => (
                <option key={stName} value={stName}>
                  {stName} ({stateIndex.get(stName)?.totalBreeds || 0} breeds)
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Map & Detail Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[660px]">
        {/* Left Column: Interactive D3 Map Viewport (7 Cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-[#fbf9f4] flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-stone-200">
          {/* Map Toolbar (Zoom + Legend) */}
          <div className="flex items-center justify-between z-10 mb-2">
            {/* Zoom Controls */}
            <div className="inline-flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200 shadow-xs text-xs">
              <button
                onClick={() => handleZoom(1.3)}
                className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-700 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleZoom(0.7)}
                className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-700 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-700 cursor-pointer"
                title="Reset View"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Choropleth Legend */}
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-xs text-[11px] text-stone-600 font-mono">
              <span className="font-semibold text-stone-800">Density:</span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#f5f2eb] inline-block border border-stone-300" />
                <span>0</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#dcfce7] inline-block" />
                <span>1-2</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#86efac] inline-block" />
                <span>3-4</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#22c55e] inline-block" />
                <span>5-7</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#15803d] inline-block" />
                <span>8+</span>
              </span>
            </div>
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full aspect-[4/4.5] flex items-center justify-center overflow-hidden">
            <svg
              ref={svgRef}
              viewBox="0 0 640 720"
              className="w-full h-full max-h-[640px] select-none touch-none"
            >
              <g ref={zoomGRef} />
            </svg>

            {/* Hover Tooltip Popup */}
            {hoveredState && (
              <div
                className="absolute pointer-events-none z-30 bg-white text-stone-900 border border-emerald-600/40 p-2.5 rounded-xl shadow-xl text-xs -translate-x-1/2 -translate-y-full mb-3 min-w-[160px] animate-fadeIn"
                style={{
                  left: `${hoveredState.x}px`,
                  top: `${hoveredState.y}px`
                }}
              >
                <div className="font-bold text-emerald-950 text-sm">{hoveredState.name}</div>
                <div className="text-[11px] text-stone-600 mt-1 flex items-center justify-between">
                  <span>Registered Breeds:</span>
                  <strong className="font-mono text-emerald-800 text-xs">{hoveredState.count}</strong>
                </div>
                {hoveredState.count > 0 && (
                  <div className="text-[10px] text-stone-500 mt-1 flex flex-wrap gap-x-2 gap-y-0.5">
                    {hoveredState.cattle > 0 && <span>🐂 {hoveredState.cattle} Cattle</span>}
                    {hoveredState.buffalo > 0 && <span>🐃 {hoveredState.buffalo} Buffalo</span>}
                    {hoveredState.goat > 0 && <span>🐐 {hoveredState.goat} Goat</span>}
                    {hoveredState.dog > 0 && <span>🐕 {hoveredState.dog} Dog</span>}
                  </div>
                )}
                <div className="text-[9px] text-emerald-700 mt-1.5 font-mono font-semibold">
                  Click to inspect local breeds ▾
                </div>
              </div>
            )}
          </div>

          {/* Map Footer Note */}
          <div className="mt-3 text-[11px] text-stone-500 flex items-center justify-between border-t border-stone-200 pt-2 font-mono">
            <span>Projection: D3 Mercator • Source: ICAR-NBAGR</span>
            <span className="text-emerald-800 font-semibold">Click state to select</span>
          </div>
        </div>

        {/* Right Column: Selected State Breed Details & Tract Dossier (5 Cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-white flex flex-col justify-between space-y-6">
          <div>
            {/* State Profile Header */}
            <div className="pb-4 border-b border-stone-200">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>State Livestock &amp; Canine Breeding Tract</span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-stone-900">
                    {selectedStateName}
                  </h4>
                </div>

                <div className="text-right">
                  <span className="font-mono text-2xl font-black text-emerald-800">
                    {selectedStateSummary?.totalBreeds || 0}
                  </span>
                  <span className="text-[10px] text-stone-400 block font-mono">Registered Breeds</span>
                </div>
              </div>

              {selectedStateSummary && (
                <div className="mt-3 space-y-2">
                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-xs">
                    <div className="font-bold text-emerald-950 mb-0.5">
                      {selectedStateSummary.climateZone}
                    </div>
                    <p className="text-stone-600 text-[11px] leading-relaxed">
                      {selectedStateSummary.dominantTract}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-stone-600 pt-1">
                    <div className="flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-lg border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span>Cattle: <strong>{selectedStateSummary.cattleCount}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-lg border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-sky-600" />
                      <span>Buffalo: <strong>{selectedStateSummary.buffaloCount}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-lg border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-amber-600" />
                      <span>Goat: <strong>{selectedStateSummary.goatCount}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-lg border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      <span>Dog: <strong>{selectedStateSummary.dogCount}</strong></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* State Registered Breeds List */}
            <div className="mt-5 space-y-3 max-h-[460px] overflow-y-auto pr-1">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                Registered Indigenous Breeds ({selectedStateSummary?.breeds.length || 0})
              </h5>

              {(!selectedStateSummary || selectedStateSummary.breeds.length === 0) ? (
                <div className="text-center py-10 px-4 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                  <Compass className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <p className="font-semibold text-stone-800 text-sm">
                    No breeds matching the current filters in {selectedStateName}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Try switching species to &quot;All&quot; or utility to &quot;All Utilities&quot; above.
                  </p>
                </div>
              ) : (
                selectedStateSummary.breeds.map((breed) => (
                  <div
                    key={breed.id}
                    className="p-3.5 rounded-2xl border border-stone-200 hover:border-emerald-500 transition-all bg-stone-50/50 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-stone-900 group-hover:text-emerald-800 transition-colors">
                              {breed.name}
                            </span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold font-mono ${
                              breed.category === 'Cattle' ? 'bg-emerald-100 text-emerald-800' :
                              breed.category === 'Buffalo' ? 'bg-sky-100 text-sky-800' :
                              breed.category === 'Goat' ? 'bg-amber-100 text-amber-800' :
                              'bg-indigo-100 text-indigo-800'
                            }`}>
                              {breed.category === 'Cattle' ? '🐂 Cattle' : breed.category === 'Buffalo' ? '🐃 Buffalo' : breed.category === 'Goat' ? '🐐 Goat' : '🐕 Dog'}
                            </span>
                          </div>
                          {breed.vernacularName && (
                            <div className="text-xs text-stone-500 font-serif">
                              {breed.vernacularName}
                            </div>
                          )}
                        </div>

                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                          {breed.productivity.primaryUtility.split('(')[0]}
                        </span>
                      </div>

                      <div className="text-[11px] text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                        {breed.homeTract}
                      </div>

                      {/* Productivity & Genomic Tag */}
                      <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono border-t border-stone-200/60 pt-2">
                        <span className="text-stone-600">
                          Yield: <strong className="text-stone-900">{breed.productivity.averageYield.split('(')[0]}</strong>
                        </span>
                        <span className="text-emerald-700 font-bold">
                          {breed.genomics.csn2Allele}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex items-center gap-2">
                      {onOpenBreedModal && (
                        <button
                          type="button"
                          onClick={() => onOpenBreedModal(breed)}
                          className="flex-1 py-1.5 px-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Info className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Full Profile</span>
                        </button>
                      )}

                      {onSelectBreedForClassification && (
                        <button
                          type="button"
                          onClick={() => onSelectBreedForClassification(breed.imageUrl, `${breed.name} (${breed.category} - ${breed.stateOfOrigin})`)}
                          className="py-1.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-[11px] font-semibold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                          title="Run AI classification on this reference specimen"
                        >
                          <Sparkles className="w-3 h-3 text-emerald-200" />
                          <span>Classify</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Bottom Link to Full Catalog */}
          {onNavigateToCatalog && (
            <div className="pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={onNavigateToCatalog}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>View Complete 73 Breeds Encyclopedia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
