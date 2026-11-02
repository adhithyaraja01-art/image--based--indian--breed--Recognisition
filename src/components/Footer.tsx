import React from 'react';
import { ActiveTab } from './Navbar';
import { useAuth } from '../firebase/authContext';
import { ShieldCheck, Dna, Cloud, Award, ExternalLink, Heart, GraduationCap, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenJournal?: () => void;
  onOpenReportModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenJournal,
  onOpenReportModal
}) => {
  const { currentUser } = useAuth();

  return (
    <footer className="bg-white border-t border-stone-200/90 text-stone-600 text-xs mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Project Mission */}
          <div className="space-y-4 md:col-span-1">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 cursor-pointer select-none group inline-flex"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white font-bold text-xl ring-1 ring-emerald-700/30 group-hover:bg-emerald-900 transition-colors shrink-0">
                <span className="text-xl" role="img" aria-label="Bovine">🐂</span>
              </div>
              <div>
                <h4 className="font-serif tracking-tight text-base font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                  Indian Breed Classifier
                </h4>
                <p className="text-[11px] text-emerald-700 font-medium">
                  Agricultural Intelligence Suite
                </p>
              </div>
            </div>

            <p className="text-stone-500 leading-relaxed text-[11px]">
              Farmer-friendly agricultural technology and research dashboard dedicated to India&apos;s indigenous livestock genetic heritage, ICAR-NBAGR accession standards, and A2 milk preservation.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] text-emerald-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{currentUser ? `Signed In: ${currentUser.displayName || currentUser.email}` : 'Guest Session (Local Storage)'}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-emerald-950 text-sm tracking-wide">
              Navigation
            </h5>
            <ul className="space-y-2 text-stone-600 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Home Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('classify')}
                  className="hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  AI Image Classifier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('breeds')}
                  className="hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  73 Indigenous Breeds Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('map')}
                  className="hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Habitat Distribution Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('genomics')}
                  className="hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Genomics &amp; 3D Molecular Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guide')}
                  className="hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Bioscience &amp; Morphological Key
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Field Scan History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('settings')}
                  className="hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Settings &amp; Language
                </button>
              </li>
            </ul>
          </div>

          {/* Scientific Framework & Registry Standards */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-emerald-950 text-sm tracking-wide">
              Scientific Standards
            </h5>
            <ul className="space-y-2 text-stone-600 text-xs">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>ICAR-NBAGR Registered Accessions</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Dna className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>CSN2 A2 Allele (UniProt P02666)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Dna className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>HSP70 Chaperone (UniProt P08107)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Wood&apos;s Incomplete Gamma Lactation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Bovine Karyotypes (2n=60 / 2n=50)</span>
              </li>
            </ul>
          </div>

          {/* Academic & Field Tools */}
          <div className="space-y-3">
            <h5 className="font-serif font-bold text-emerald-950 text-sm tracking-wide">
              Field &amp; Lab Tools
            </h5>
            <div className="space-y-2.5">
              {onOpenJournal && (
                <button
                  onClick={onOpenJournal}
                  className="w-full text-left px-3.5 py-2 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-200 text-stone-800 hover:text-emerald-950 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Cloud className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Research Field Journal</span>
                  </span>
                  <span className="text-[10px] text-emerald-800 font-semibold group-hover:translate-x-0.5 transition-transform">Firestore &rarr;</span>
                </button>
              )}

              {onOpenReportModal && (
                <button
                  onClick={onOpenReportModal}
                  className="w-full text-left px-3.5 py-2 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-200 text-stone-800 hover:text-emerald-950 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Project Evaluation Sheet</span>
                  </span>
                  <span className="text-[10px] text-emerald-800 font-semibold group-hover:translate-x-0.5 transition-transform">Print &rarr;</span>
                </button>
              )}

              <p className="text-[10px] text-stone-500 pt-1 leading-relaxed">
                Animal Biotechnology and Agricultural Engineering Suite. Tailored for farmers, dairy cooperatives, and researchers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} Indian Breed Classifier. ICAR-NBAGR Recognized Cattle &amp; Buffalo Breeds.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-stone-600">Strictly Indian Zebu (<em>Bos indicus</em>) &amp; Riverine Buffalo (<em>Bubalus bubalis</em>)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
