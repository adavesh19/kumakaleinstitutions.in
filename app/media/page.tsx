'use client';

import { motion } from 'framer-motion';
import { Youtube, Instagram, Facebook, Twitter, Sparkles, Play } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

export default function MediaPage() {
    // YouTube videos - Latest from the channel
    const youtubeVideos = [
        {
            id: '1',
            title: 'Campus Tour 2026',
            videoId: 'YOUR_VIDEO_ID_1', // Replace with actual video IDs
            thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop'
        },
        {
            id: '2',
            title: 'Annual Day Celebration',
            videoId: 'YOUR_VIDEO_ID_2',
            thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop'
        },
        {
            id: '3',
            title: 'Student Success Stories',
            videoId: 'YOUR_VIDEO_ID_3',
            thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop'
        },
        {
            id: '4',
            title: 'Degree College Inauguration',
            videoId: 'YOUR_VIDEO_ID_4',
            thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop'
        },
        {
            id: '5',
            title: 'Sports Day Highlights',
            videoId: 'YOUR_VIDEO_ID_5',
            thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop'
        },
        {
            id: '6',
            title: 'Karnataka Rajyotsava',
            videoId: 'YOUR_VIDEO_ID_6',
            thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop'
        },
    ];

    const socialLinks = [
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://youtube.com/@kumakaleschoolandcollege',
            color: 'from-red-500 to-pink-600',
            followers: '1.2K Subscribers'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com/kumakale', // Update with actual link
            color: 'from-purple-500 to-pink-500',
            followers: '2.5K Followers'
        },
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://facebook.com/kumakale', // Update with actual link
            color: 'from-blue-500 to-cyan-500',
            followers: '3.2K Followers'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: 'https://twitter.com/kumakale', // Update with actual link
            color: 'from-cyan-400 to-blue-500',
            followers: '800 Followers'
        },
    ];

    return (
        <div className="relative overflow-hidden pt-24 pb-20 min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 relative"
                >
                    {/* Glowing background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-red-500/20 rounded-full blur-[100px] -z-10" />

                    <motion.div
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(239, 68, 68, 0.3)',
                                '0 0 40px rgba(239, 68, 68, 0.5)',
                                '0 0 20px rgba(239, 68, 68, 0.3)',
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-purple-500/20 border-2 border-red-500/40 mb-8 backdrop-blur-xl"
                    >
                        <Youtube className="w-5 h-5 text-red-400 animate-pulse" />
                        <span className="text-white font-bold text-base tracking-wide">🎬 SOCIAL MEDIA & VIDEOS 🎬</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                            Our{' '}
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]">
                            Media Gallery
                        </span>
                    </h1>

                    <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                        📸 Watch our journey, events, and achievements on YouTube & social media
                    </p>
                </motion.div>

                {/* Social Media Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <GlassCard className="p-6 text-center hover:border-white/20 transition-all">
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                                    <social.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-white font-bold mb-1">{social.name}</h3>
                                <p className="text-gray-400 text-sm">{social.followers}</p>
                            </GlassCard>
                        </motion.a>
                    ))}
                </motion.div>

                {/* YouTube Videos Section */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                            <Play className="w-4 h-4 text-red-400" />
                            <span className="text-red-400 font-semibold text-sm">Latest Videos</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            YouTube <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">Channel</span>
                        </h2>
                    </motion.div>

                    {/* Full Channel Embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <GlassCard className="p-4 max-w-5xl mx-auto">
                            <div className="aspect-video w-full rounded-xl overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/videoseries?list=UUG9dp8T4-JAPxyavYyV-knw"
                                    title="Kumakale School YouTube Channel"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-xl"
                                ></iframe>
                            </div>
                            <div className="mt-4 text-center">
                                <a
                                    href="https://youtube.com/@kumakaleschoolandcollege?si=H2Dt5RLbfnxPe2Ub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold transition-colors"
                                >
                                    <Youtube className="w-5 h-5" />
                                    Subscribe to Our Channel
                                </a>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Video Grid (if you want individual videos) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {youtubeVideos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="overflow-hidden group hover:scale-[1.02] transition-all">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-white ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-white font-bold text-lg mb-2">{video.title}</h3>
                                        <p className="text-gray-400 text-sm">Watch on YouTube</p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <GlassCard className="p-8 max-w-2xl mx-auto">
                        <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">Stay Connected!</h3>
                        <p className="text-gray-300 mb-6">
                            Follow us on social media for daily updates, event highlights, and student achievements.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-6 py-3 rounded-full bg-gradient-to-r ${social.color} text-white font-bold hover:shadow-lg transition-shadow`}
                                >
                                    Follow on {social.name}
                                </a>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
