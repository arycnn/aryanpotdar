const projectsData = [
    {
        id: 1,
        name: 'Quantum Dashboard',
        description: 'Real-time analytics dashboard with AI-powered insights and predictive modeling for enterprise solutions.',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/quantum-dashboard'
    },
    {
        id: 2,
        name: 'Neural Network Visualizer',
        description: 'Interactive 3D visualization tool for understanding deep learning architectures and model training.',
        thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/neural-visualizer'
    },
    {
        id: 3,
        name: 'Crypto Trading Bot',
        description: 'Automated cryptocurrency trading system with machine learning algorithms for market prediction.',
        thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/crypto-bot'
    },
    {
        id: 4,
        name: 'Cloud Infrastructure Manager',
        description: 'Scalable cloud infrastructure management platform with automated deployment and monitoring.',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/cloud-manager'
    },
    {
        id: 5,
        name: 'Real-time Chat Platform',
        description: 'WebSocket-based chat application with end-to-end encryption and file sharing capabilities.',
        thumbnail: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/chat-platform'
    },
    {
        id: 6,
        name: 'E-Commerce Analytics',
        description: 'Comprehensive analytics suite for e-commerce businesses with conversion optimization tools.',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/ecommerce-analytics'
    },
    {
        id: 7,
        name: 'Smart Home Controller',
        description: 'IoT platform for managing smart home devices with voice control and automation.',
        thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/smart-home'
    },
    {
        id: 8,
        name: 'API Gateway Service',
        description: 'High-performance API gateway with rate limiting, caching, and authentication.',
        thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/api-gateway'
    },
    {
        id: 9,
        name: 'Video Streaming Platform',
        description: 'Netflix-style streaming service with adaptive bitrate and content recommendation engine.',
        thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/video-platform'
    },
    {
        id: 10,
        name: 'Blockchain Explorer',
        description: 'Cryptocurrency blockchain explorer with transaction tracking and wallet analysis.',
        thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/blockchain-explorer'
    },
    {
        id: 11,
        name: 'Task Management System',
        description: 'Kanban-style project management tool with team collaboration and time tracking.',
        thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/task-manager'
    },
    {
        id: 12,
        name: 'Weather Forecasting App',
        description: 'Advanced weather forecasting application with AI-powered predictions and alerts.',
        thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/weather-app'
    },
    {
        id: 13,
        name: 'Social Media Scheduler',
        description: 'Multi-platform social media management tool with analytics and content calendar.',
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/social-scheduler'
    },
    {
        id: 14,
        name: 'Code Editor IDE',
        description: 'Web-based integrated development environment with real-time collaboration.',
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/code-editor'
    },
    {
        id: 15,
        name: 'Health Tracking App',
        description: 'Personal health and fitness tracker with workout plans and nutrition monitoring.',
        thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
        link: 'https://github.com/alexquantum/health-tracker'
    }
];

const collaborationsData = [
    {
        id: 1,
        company_name: 'TechCorp Industries',
        logo: 'https://via.placeholder.com/300x150/00ff88/0a0a0a?text=TechCorp+Industries',
        link: 'https://techcorp.example.com'
    },
    {
        id: 2,
        company_name: 'Digital Innovations Ltd',
        logo: 'https://via.placeholder.com/300x150/00d9ff/0a0a0a?text=Digital+Innovations',
        link: 'https://digitalinnovations.example.com'
    },
    {
        id: 3,
        company_name: 'FutureTech Solutions',
        logo: 'https://via.placeholder.com/300x150/ff006e/0a0a0a?text=FutureTech+Solutions',
        link: 'https://futuretech.example.com'
    },
    {
        id: 4,
        company_name: 'CloudScale Systems',
        logo: 'https://via.placeholder.com/300x150/00ff88/0a0a0a?text=CloudScale+Systems',
        link: 'https://cloudscale.example.com'
    },
    {
        id: 5,
        company_name: 'AI Dynamics Corp',
        logo: 'https://via.placeholder.com/300x150/00d9ff/0a0a0a?text=AI+Dynamics',
        link: 'https://aidynamics.example.com'
    },
    {
        id: 6,
        company_name: 'Quantum Labs',
        logo: 'https://via.placeholder.com/300x150/ff006e/0a0a0a?text=Quantum+Labs',
        link: 'https://quantumlabs.example.com'
    },
    {
        id: 7,
        company_name: 'NexGen Technologies',
        logo: 'https://via.placeholder.com/300x150/00ff88/0a0a0a?text=NexGen+Tech',
        link: 'https://nexgentech.example.com'
    },
    {
        id: 8,
        company_name: 'CyberCore Security',
        logo: 'https://via.placeholder.com/300x150/00d9ff/0a0a0a?text=CyberCore',
        link: 'https://cybercore.example.com'
    }
];