'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
    options?: string[];
}

const initialMessages: Message[] = [
    {
        id: 1,
        text: "Hello! I'm the Kumakale AI Assistant. How can I help you regarding admissions under NEP rules?",
        sender: 'bot',
        options: ['High School (8-10)', 'PU College (Arts/Comm)', 'Degree (BA/BCom)']
    }
];

const responses: Record<string, { text: string; options?: string[] }> = {
    'High School (8-10)': {
        text: "Our High School follows the Karnataka State Board. We focus on holistic development with smart classes. Features: 100% Pass Result, Scout & Guide, and Sports. Would you like to know about fees or application?",
        options: ['Fee Structure', 'Apply Now']
    },
    'PU College (Arts/Comm)': {
        text: "We offer Arts (HEPS) and Commerce (ABEP/ABECs/ABES) streams. Our Commerce dept has a track record of state ranks!",
        options: ['Arts Details', 'Commerce Details', 'Apply Now']
    },
    'Degree (BA/BCom)': {
        text: "Our Degree College follows the NEP 2020 curriculum. We offer B.A. and B.Com with integrated coaching for competitive exams (IAS/KAS) and CA/CS.",
        options: ['B.A. Combinations', 'B.Com Features', 'Apply Now']
    },
    'Arts Details': {
        text: "Arts combination: History, Economics, Political Science, Sociology. Great for Civil Services aspirants.",
        options: ['Back to Menu', 'Apply Now']
    },
    'Commerce Details': {
        text: "Commerce combinations: 1. Accountancy, Business, Economics, Pol. Sci (ABEP) 2. Comp. Sci (ABECs) 3. Statistics (ABES).",
        options: ['Back to Menu', 'Apply Now']
    },
    'B.A. Combinations': {
        text: "As per NEP, we offer History, Political Science, and Sociology as majors, plus open electives.",
        options: ['Back to Menu', 'Apply Now']
    },
    'B.Com Features': {
        text: "Includes heavy focus on Skill Development, Digital Fluency, and Artificial Intelligence (Open Elective).",
        options: ['Back to Menu', 'Apply Now']
    },
    'Fee Structure': {
        text: "We pride ourselves on providing 'Quality Education with Minimum Fees'. Please visit the campus for the exact breakdown as it varies by category.",
        options: ['Back to Menu', 'Apply Now']
    },
    'Apply Now': {
        text: "Great! You can apply directly through our portal. Click the 'Admissions' tab in the menu or visit the campus at Shivaji Circle.",
        options: ['Back to Menu']
    },
    'Back to Menu': {
        text: "What else can I help you with?",
        options: ['High School (8-10)', 'PU College (Arts/Comm)', 'Degree (BA/BCom)']
    }
};

export function AdmissionChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    const handleOptionClick = (option: string) => {
        // Add user message
        const userMsg: Message = { id: Date.now(), text: option, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Simulate bot delay
        setTimeout(() => {
            const response = responses[option] || { text: "I'm sorry, I didn't catch that. Please contact our office at +91 90086 52976.", options: ['Back to Menu'] };
            const botMsg: Message = {
                id: Date.now() + 1,
                text: response.text,
                sender: 'bot',
                options: response.options
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
            >
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/40 border-2 border-white/20 flex items-center justify-center overflow-hidden relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {isOpen ? <X className="w-6 h-6 text-white relative z-10" /> : <MessageSquare className="w-6 h-6 text-white relative z-10" />}
                </Button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary/10 border-b border-primary/10 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-inner">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground">Kumakale Assistant</h3>
                                <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Online
                                </p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-primary text-white rounded-br-none'
                                                : 'bg-secondary text-foreground rounded-bl-none border border-border'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-secondary p-3 rounded-2xl rounded-bl-none border border-border flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" />
                                        <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce delay-100" />
                                        <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce delay-200" />
                                    </div>
                                </div>
                            )}
                            <div ref={scrollRef} />
                        </div>

                        {/* Options / Input Area */}
                        <div className="p-4 border-t border-border bg-background/50">
                            <div className="flex flex-wrap gap-2">
                                {messages[messages.length - 1]?.sender === 'bot' && !isTyping && messages[messages.length - 1]?.options?.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionClick(option)}
                                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
