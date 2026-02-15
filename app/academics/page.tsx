'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FacultySpotlights } from "@/components/academics/faculty-spotlights";
import { BookOpen, GraduationCap, Building2 } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function AcademicsPage() {
    const t = useTranslations('AcademicsPage');

    return (
        <div className="relative overflow-hidden pt-24 pb-20">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-900/20 to-transparent" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center relative z-10">
                <div className="inline-block glass-card rounded-full px-6 py-2 text-sm font-bold text-indigo-300 mb-6 border-indigo-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    {t('tag')}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight drop-shadow-2xl">
                    {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{t('titleHighlight') || 'Programs'}</span>
                </h1>
                <p className="text-indigo-100/80 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                    {t('description')}
                </p>
            </section>

            {/* Tabbed Program Overview */}
            <section className="py-16 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <Tabs defaultValue="school" className="max-w-6xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3 glass-card p-2 mb-12 bg-white/5 border-white/10 h-auto rounded-2xl">
                            <TabsTrigger
                                value="school"
                                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(79,70,229,0.4)] text-gray-400 py-4 rounded-xl transition-all duration-300 font-bold text-lg"
                            >
                                <BookOpen className="w-5 h-5 mr-3" />
                                {t('schoolTab')}
                            </TabsTrigger>
                            <TabsTrigger
                                value="puc"
                                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(79,70,229,0.4)] text-gray-400 py-4 rounded-xl transition-all duration-300 font-bold text-lg"
                            >
                                <GraduationCap className="w-5 h-5 mr-3" />
                                {t('pucTab')}
                            </TabsTrigger>
                            <TabsTrigger
                                value="degree"
                                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(79,70,229,0.4)] text-gray-400 py-4 rounded-xl transition-all duration-300 font-bold text-lg"
                            >
                                <Building2 className="w-5 h-5 mr-3" />
                                {t('degreeTab')}
                            </TabsTrigger>
                        </TabsList>

                        {/* School Tab */}
                        <TabsContent value="school" className="mt-0">
                            <div className="glass-card rounded-[2.5rem] p-10 border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(79,70,229,0.1)]">
                                <h2 className="text-4xl font-bold mb-8 text-white">{t('schoolTitle')}</h2>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <div className="inline-block px-4 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 text-sm font-bold uppercase tracking-wider mb-6">
                                            {t('keyFeatures')}
                                        </div>
                                        <ul className="space-y-4">
                                            {[t('schoolFeature1'), t('schoolFeature2'), t('schoolFeature3'), t('schoolFeature4')].map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 group">
                                                    <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mt-1 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                    </div>
                                                    <span className="text-gray-300 group-hover:text-white transition-colors text-lg leading-relaxed font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="inline-block px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-sm font-bold uppercase tracking-wider mb-6">
                                            {t('curriculumHighlights')}
                                        </div>
                                        <ul className="space-y-4">
                                            {[t('curriculum1'), t('curriculum2'), t('curriculum3'), t('curriculum4')].map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 group">
                                                    <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-1 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                    </div>
                                                    <span className="text-gray-300 group-hover:text-white transition-colors text-lg leading-relaxed font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* PUC Tab */}
                        <TabsContent value="puc" className="mt-0">
                            <div className="glass-card rounded-[2.5rem] p-10 border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(79,70,229,0.1)]">
                                <h2 className="text-4xl font-bold mb-8 text-white">{t('pucTitle')}</h2>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <div className="inline-block px-4 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 text-sm font-bold uppercase tracking-wider mb-6">
                                            {t('streamsAvailable')}
                                        </div>
                                        <div className="space-y-6">
                                            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors border border-white/5">
                                                <h4 className="text-xl font-bold text-white mb-2">Science</h4>
                                                <p className="text-gray-400 font-light">PCMB, PCMC</p>
                                            </div>
                                            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors border border-white/5">
                                                <h4 className="text-xl font-bold text-white mb-2">Commerce</h4>
                                                <p className="text-gray-400 font-light">EBAcs, EBAs</p>
                                            </div>
                                            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors border border-white/5">
                                                <h4 className="text-xl font-bold text-white mb-2">Arts</h4>
                                                <p className="text-gray-400 font-light">History, Economics, Political Science, Sociology</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="inline-block px-4 py-1.5 rounded-lg bg-pink-500/20 text-pink-300 text-sm font-bold uppercase tracking-wider mb-6">
                                            {t('facilities')}
                                        </div>
                                        <ul className="space-y-4">
                                            {['State-of-the-art Science Labs', 'Digital Library Access', 'NEET/CET Coaching Integration', 'Regular Industrial Visits'].map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 group">
                                                    <div className="p-1 rounded-full bg-pink-500/20 text-pink-400 mt-1 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                    </div>
                                                    <span className="text-gray-300 group-hover:text-white transition-colors text-lg leading-relaxed font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Degree Tab */}
                        <TabsContent value="degree" className="mt-0">
                            <div className="glass-card rounded-[2.5rem] p-10 border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(79,70,229,0.1)]">
                                <h2 className="text-4xl font-bold mb-8 text-white">{t('degreeTitle')}</h2>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-6">
                                        <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 rounded-3xl p-8 border border-indigo-500/20 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Arts (B.A.)</h3>
                                            <p className="text-indigo-200 mb-6 font-light">Focus on Humanities, Social Sciences, and Languages.</p>
                                            <ul className="space-y-2">
                                                <li className="text-gray-400 text-sm">✓ History</li>
                                                <li className="text-gray-400 text-sm">✓ Economics</li>
                                                <li className="text-gray-400 text-sm">✓ Political Science</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-3xl p-8 border border-cyan-500/20 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Commerce (B.Com)</h3>
                                            <p className="text-cyan-200 mb-6 font-light">Focus on Accounting, Finance, and Business Management.</p>
                                            <ul className="space-y-2">
                                                <li className="text-gray-400 text-sm">✓ Financial Accounting</li>
                                                <li className="text-gray-400 text-sm">✓ Business Law</li>
                                                <li className="text-gray-400 text-sm">✓ Taxation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Faculty Spotlights */}
            <FacultySpotlights />
        </div>
    );
}

