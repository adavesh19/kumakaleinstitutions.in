export interface NewsItem {
    id: string;
    text: string;
    date: string;
}

// Simulated API response for English
const MOCK_NEWS_EN: NewsItem[] = [
    { id: '1', text: "Admission Open for Academic Year 2026-27 for Nursery to Grade 9.", date: "2026-02-10" },
    { id: '2', text: "Annual Sports Meet scheduled for March 15th.", date: "2026-02-12" },
    { id: '3', text: "Congratulations to our Grade 10 students for 100% distinction results!", date: "2026-02-14" },
    { id: '4', text: "New Robotics Lab inauguration by District Commissioner.", date: "2026-02-15" },
    { id: '5', text: "Parent-Teacher Meeting on Saturday, 20th Feb.", date: "2026-02-16" },
];

// Simulated API response for Kannada
const MOCK_NEWS_KN: NewsItem[] = [
    { id: '1', text: "2026-27 ನೇ ಸಾಲಿನ ಪ್ರವೇಶಾತಿ ನರ್ಸರಿಯಿಂದ 9 ನೇ ತರಗತಿಯವರೆಗೆ ತೆರೆದಿದೆ.", date: "2026-02-10" },
    { id: '2', text: "ವಾರ್ಷಿಕ ಕ್ರೀಡಾಕೂಟ ಮಾರ್ಚ್ 15 ರಂದು ನಿಗದಿಯಾಗಿದೆ.", date: "2026-02-12" },
    { id: '3', text: "100% ಡಿಸ್ಟಿಂಕ್ಷನ್ ಪಡೆದ 10ನೇ ತರಗತಿಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅಭಿನಂದನೆಗಳು!", date: "2026-02-14" },
    { id: '4', text: "ಜಿಲ್ಲಾಧಿಕಾರಿಗಳಿಂದ ಹೊಸ ರೋಬೋಟಿಕ್ಸ್ ಲ್ಯಾಬ್ ಉದ್ಘಾಟನೆ.", date: "2026-02-15" },
    { id: '5', text: "ಫೆಬ್ರವರಿ 20, ಶನಿವಾರ ಪೋಷಕರ ಸಭೆ.", date: "2026-02-16" },
];

export async function fetchLatestNews(locale: string = 'en'): Promise<NewsItem[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, pass locale to API:
    // const res = await fetch(`https://api.example.com/kumkale/news?lang=${locale}`);
    // return res.json();

    return locale === 'kn' ? MOCK_NEWS_KN : MOCK_NEWS_EN;
}
