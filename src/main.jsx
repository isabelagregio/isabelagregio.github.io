import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, ExternalLink, ArrowUpRight, Terminal, Code2, Cpu, Database, Cloud, BookOpen, BriefcaseBusiness, FlaskConical, FolderGit2, Layers3, Menu, X, ChevronRight, ChevronDown, Mail, Sun, Moon } from 'lucide-react';
import './styles.css';
const GH = 'https://github.com/isabelagregio';
const nav = [['about', 'About'], ['education', 'Education'], ['experience', 'Experience'], ['research', 'Research'], ['projects', 'Projects'], ['toolkit', 'Toolkit']];
const course = [['INF8245AE', 'Machine Learning'], ['INF8250AE', 'Reinforcement Learning'], ['LOG6309E', 'Intelligent DevOps of Large-Scale Software'], ['PCS3838', 'Artificial Intelligence']];
function Out({ href, children, className = '' }) {
    return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={14} />
    </a>;
}
function Window({ id, index, title, subtitle, children, extra = '', className = '' }) {
    return <section id={id} className={'window ' + className}>
        <div className="window-bar">
            <div className="lights">
                <i />
                <i />
                <i />
            </div>
            <span className="window-label">
                <span className="file-icon">▤</span> {String(index).padStart(2, '0')} / {title}</span>
            <span className="window-side">{extra || 'portfolio / isabela'}</span>
        </div>
        <div className="window-body">
            <div className="section-head">
                <div>
                    <span className="eyebrow">{String(index).padStart(2, '0')} — {subtitle}</span>
                    <h2>{title}</h2>
                </div>
                <span className="section-bracket">[ {id.toUpperCase()} ]</span>
            </div>{children}</div>
    </section>;
}
function Chip({ children }) { return <span className="chip">{children}</span>; }


function EducationSection() {
    return (
        <Window
            id="education"
            index={2}
            title="Education"
            subtitle="Academic background"
            extra="academic-history/"
        >
            <div className="academic-layout">

                {/* TIMELINE HEADER */}
                <div className="academic-header">
                    <div>
                        <span className="academic-command">
                            git log --academic-history
                        </span>
                    </div>

                    <span className="academic-branch">
                        <FolderGit2 size={15} />
                        main / education
                    </span>
                </div>

                {/* ACADEMIC TIMELINE */}
                <div className="academic-timeline">

                    {/* USP */}
                    <div className="academic-entry">
                        <div className="academic-graph">
                            <span className="academic-node main-node" />
                            <span className="academic-line" />
                        </div>

                        <article className="academic-card">
                            <div className="academic-card-top">
                                <span className="academic-type">
                                    HOME UNIVERSITY
                                </span>
                                <span className="academic-date">
                                    2023 — 2027
                                </span>
                            </div>

                            <h3>University of São Paulo</h3>

                            <p>
                                B.Sc. in Computer Engineering ·
                                Escola Politécnica USP
                            </p>

                            <span className="academic-location">
                                São Paulo, Brazil
                            </span>
                        </article>
                    </div>

                    {/* POLYTECHNIQUE MONTREAL */}
                    <div className="academic-entry">
                        <div className="academic-graph">
                            <span className="academic-node exchange-node" />
                        </div>

                        <article className="academic-card">
                            <div className="academic-card-top">
                                <span className="academic-type">
                                    ACADEMIC EXCHANGE
                                </span>
                                <span className="academic-date">
                                    2026
                                </span>
                            </div>

                            <h3>Polytechnique Montréal</h3>

                            <p>
                                Computer & Software Exchange Program ·
                                AI and Software Systems
                            </p>

                            <span className="academic-location">
                                Montréal, Canada
                            </span>
                        </article>
                    </div>

                </div>

                {/* SELECTED COURSEWORK */}
                <div className="academic-coursework">
                    <div className="academic-coursework-header">
                        <div>
                            <BookOpen size={18} />
                            <h3>Selected Coursework</h3>
                        </div>
                    </div>

                    <div className="academic-course-grid">
                        {course.map(([code, name]) => (
                            <div
                                className="academic-course"
                                key={code}
                            >
                                <div className="academic-course-icon">
                                    <Code2 size={17} />
                                </div>

                                <div>
                                    <span>{code}</span>
                                    <strong>{name}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Window>
    );
}


function AboutSection() {
    const [activeTab, setActiveTab] = useState('readme');

    return (
        <Window
            id="about"
            index={1}
            title="About Me"
            subtitle="A brief introduction"
            extra="about-me/"
        >
            <div className="about-editor">

                {/* EDITOR TABS */}
                <div className="about-editor-tabs">
                    <button
                        type="button"
                        className={`about-editor-tab ${activeTab === 'readme' ? 'active' : ''
                            }`}
                        onClick={() => setActiveTab('readme')}
                    >
                        <BookOpen size={15} />
                        README.md
                    </button>

                    <button
                        type="button"
                        className={`about-editor-tab ${activeTab === 'profile' ? 'active' : ''
                            }`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <Code2 size={15} />
                        profile.json
                    </button>

                    <span className="about-editor-path">
                        ~/isabela/about-me
                    </span>
                </div>

                {/* README TAB */}
                {activeTab === 'readme' && (
                    <div className="about-editor-content">
                        <div className="about-readme">

                            <span className="about-file-label">
                                # README.md
                            </span>

                            <h3>
                                Driven by curiosity, focused on
                                building things that matter.
                            </h3>

                            <div className="about-readme-divider" />

                            <p>
                                My background combines hands-on experience
                                in software engineering, data, and AI with
                                academic research. I've worked on large-scale
                                projects, deployed production systems, and
                                built AI-powered tools that support real
                                business needs. These experiences have shaped
                                my approach to engineering: combining
                                creativity and innovation with reliable
                                solutions and measurable impact.
                            </p>

                            <p>
                                Alongside my industry experience, I explore
                                emerging developments in AI research,
                                particularly LLMs and multi-agent systems.
                                Throughout my studies, I've pursued diverse
                                technical projects, always driven by
                                curiosity and a desire to keep learning.
                                I enjoy taking on new challenges,
                                experimenting with ideas, and seeing the
                                real-world impact of what I build.
                            </p>

                        </div>
                    </div>
                )}

                {/* PROFILE TAB */}
                {activeTab === 'profile' && (
                    <div className="about-editor-content">
                        <div className="about-profile">

                            <div className="about-profile-heading">
                                <Code2 size={17} />
                                <span>profile.json</span>
                                <small>Personal & professional overview</small>
                            </div>

                            <div className="about-profile-grid">

                                <div className="about-profile-item">
                                    <span className="about-profile-key">
                                        currently
                                    </span>
                                    <strong>
                                        Software Engineer Intern · Aprix
                                        <br />
                                        AI Researcher · GERAD
                                    </strong>
                                </div>

                                <div className="about-profile-item">
                                    <span className="about-profile-key">
                                        previously
                                    </span>
                                    <strong>
                                        AI Products Intern · BTG Pactual
                                    </strong>
                                </div>

                                <div className="about-profile-item">
                                    <span className="about-profile-key">
                                        education
                                    </span>
                                    <strong>
                                        Computer Engineering · USP
                                        <br />
                                        Exchange · Polytechnique Montréal
                                    </strong>
                                </div>

                                <div className="about-profile-item">
                                    <span className="about-profile-key">
                                        interests
                                    </span>
                                    <strong>
                                        AI & Machine Learning · Software Engineering
                                        <br />
                                        Data Engineering · Applied Research
                                    </strong>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* STATUS BAR */}
                <div className="about-editor-status">
                    <span>
                        {activeTab === 'readme'
                            ? 'Markdown · Preview'
                            : 'JSON · Profile overview'}
                    </span>
                    <span>UTF-8 · Isabela Gregio</span>
                </div>

            </div>
        </Window>
    );
}


function ExperienceSection() {
    const [expandedJobs, setExpandedJobs] = useState({
        aprix: false,
        btgAI: false,
        btgBackend: false,
    });

    const toggleJob = (id) => {
        setExpandedJobs((previous) => ({
            ...previous,
            [id]: !previous[id],
        }));
    };

    return (
        <Window
            id="experience"
            index={3}
            title="Professional Experience"
            subtitle="Building real systems"
            extra="experience.log"
        >
            <div className="timeline experience-accordion">

                {/* APRIX */}
                <article className={`job experience-job ${expandedJobs.aprix ? 'is-expanded' : ''}`}>
                    <div className="job-aside">
                        <span className="job-marker" />
                        <strong>Aprix</strong>
                        <span>May 2026 — Present</span>
                        <small>Software Engineer Intern</small>
                    </div>

                    <div className="job-content">
                        <button
                            type="button"
                            className="experience-toggle"
                            aria-expanded={expandedJobs.aprix}
                            aria-controls="experience-aprix-details"
                            onClick={() => toggleJob('aprix')}
                        >
                            <span className="experience-toggle-text">
                                <span className="experience-overline">CURRENT ROLE</span>
                                <span className="experience-title">
                                    SaaS Backend Development & AI-Assisted Workflows
                                </span>
                                <span className="experience-preview">
                                    Python backend · GCP · Database optimization · AI coding agents
                                </span>
                            </span>
                            <ChevronDown
                                className="experience-chevron"
                                size={20}
                                aria-hidden="true"
                            />
                        </button>

                        <div
                            id="experience-aprix-details"
                            className="experience-details"
                            hidden={!expandedJobs.aprix}
                        >
                            <p>
                                Developing <strong>Python backend features</strong> for
                                a price-list management platform, working with Google
                                Cloud Platform configuration and database performance
                                improvements.
                            </p>

                            <div className="experience-info-grid">
                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        01 / AI WORKFLOWS
                                    </span>
                                    <h4>AI-assisted development</h4>
                                    <p>
                                        Use Claude, Codex / T3, and Cursor for
                                        multi-agent orchestration, implementation
                                        planning, and engineering tasks.
                                    </p>
                                </div>

                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        02 / SOFTWARE EVOLUTION
                                    </span>
                                    <h4>Migration specifications</h4>
                                    <p>
                                        Coordinate changes between project versions
                                        through structured migration specifications.
                                    </p>
                                </div>

                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        03 / ENVIRONMENTS
                                    </span>
                                    <h4>Reusable agent workflows</h4>
                                    <p>
                                        Work with reusable agents for complex tasks,
                                        including transferring resources between
                                        development and staging environments.
                                    </p>
                                </div>
                            </div>

                            <div className="chips experience-chips">
                                {[
                                    'Google Cloud Platform',
                                    'GitHub Versioning',
                                    'Software Architecture',
                                    'Data Management',
                                    'Codex & AI Agents'
                                ].map((skill) => (
                                    <span
                                        className="experience-skill"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

                {/* BTG PACTUAL — AI PRODUCTS */}
                <article className={`job featured-job experience-job ${expandedJobs.btgAI ? 'is-expanded' : ''}`}>
                    <div className="job-aside">
                        <span className="job-marker" />
                        <strong>BTG Pactual</strong>
                        <span>Jan — Apr 2026</span>
                        <small>AI Products Intern</small>
                    </div>

                    <div className="job-content">
                        <button
                            type="button"
                            className="experience-toggle"
                            aria-expanded={expandedJobs.btgAI}
                            aria-controls="experience-btg-ai-details"
                            onClick={() => toggleJob('btgAI')}
                        >
                            <span className="experience-toggle-text">
                                <span className="experience-overline">
                                    PRODUCTION PLATFORM
                                </span>
                                <span className="experience-title">
                                    Launched AI Product Management Platform
                                </span>
                                <span className="experience-preview">
                                    Full-stack platform · Production APIs · LLM evaluation
                                </span>
                            </span>
                            <ChevronDown
                                className="experience-chevron"
                                size={20}
                                aria-hidden="true"
                            />
                        </button>

                        <div
                            id="experience-btg-ai-details"
                            className="experience-details"
                            hidden={!expandedJobs.btgAI}
                        >
                            <p>
                                Built and launched a
                                <strong> full-stack internal platform</strong> with
                                <strong> production APIs, LLM integration, and an
                                    interactive dashboard </strong>
                                to manage, monitor, and evaluate the bank's AI products.
                                The solution <strong>replaced Excel and Power BI
                                    workflows</strong> with a centralized, purpose-built
                                internal application.
                            </p>

                            {/* IMPACT METRICS */}
                            <div className="impact">
                                <div>
                                    <strong>10+</strong>
                                    <span>internal projects supported</span>
                                </div>
                                <div>
                                    <strong>70+</strong>
                                    <span>people impacted</span>
                                </div>
                                <div>
                                    <strong>Production</strong>
                                    <span>deployed internal platform</span>
                                </div>
                            </div>

                            {/* SYSTEM ARCHITECTURE */}
                            <div className="system-flow">
                                <div>
                                    <span>01 · WEB APP</span>
                                    <b>
                                        React Dashboard & Management Platform
                                    </b>
                                </div>

                                <ChevronRight size={16} aria-hidden="true" />

                                <div>
                                    <span>02 · SERVICES</span>
                                    <b>
                                        FastAPI + PostgreSQL
                                        <br />
                                        AWS & Airflow
                                    </b>
                                </div>

                                <ChevronRight size={16} aria-hidden="true" />

                                <div>
                                    <span>03 · AI EVALUATION</span>
                                    <b>
                                        Bedrock Agents
                                        <br />
                                        LLM as a Judge Pipeline
                                    </b>
                                </div>
                            </div>

                            {/* CONTRIBUTION CARDS */}
                            <div className="experience-info-grid">
                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        01 / APPLICATION
                                    </span>
                                    <h4>Full-stack product</h4>
                                    <p>
                                        Developed frontend and backend APIs for
                                        product management, operational visibility,
                                        and performance tracking.
                                    </p>
                                </div>

                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        02 / AI EVALUATION
                                    </span>
                                    <h4>LLM-as-a-judge</h4>
                                    <p>
                                        Integrated Amazon Bedrock agent calls
                                        for qualitative evaluation of
                                        conversational AI systems.
                                    </p>
                                </div>

                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        03 / DATA PIPELINES
                                    </span>
                                    <h4>Automated metrics</h4>
                                    <p>
                                        Built metric-processing and evaluation
                                        pipelines with Airflow, Python,
                                        Amazon ECS, S3, and Athena.
                                    </p>
                                </div>
                            </div>

                            <div className="chips experience-chips">
                                {[
                                    'Amazon Bedrock',
                                    'Airflow Automations',
                                    'Agentic & LLM Pipeline',
                                    'AWS ECS & S3',
                                    'Azure Production Deployment'
                                ].map((skill) => (
                                    <span
                                        className="experience-skill"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

                {/* BTG PACTUAL — CORPORATE BANKING */}
                <article className={`job experience-job ${expandedJobs.btgBackend ? 'is-expanded' : ''}`}>
                    <div className="job-aside">
                        <span className="job-marker" />
                        <strong>BTG Pactual</strong>
                        <span>Apr — Aug 2025</span>
                        <small>IT Products Intern</small>
                    </div>

                    <div className="job-content">
                        <button
                            type="button"
                            className="experience-toggle"
                            aria-expanded={expandedJobs.btgBackend}
                            aria-controls="experience-btg-backend-details"
                            onClick={() => toggleJob('btgBackend')}
                        >
                            <span className="experience-toggle-text">
                                <span className="experience-overline">
                                    BACKEND ENGINEERING
                                </span>
                                <span className="experience-title">
                                    Backend Development · Corporate Banking & Payments
                                </span>
                                <span className="experience-preview">
                                    TypeScript APIs · Event-driven architecture · AWS
                                </span>
                            </span>
                            <ChevronDown
                                className="experience-chevron"
                                size={20}
                                aria-hidden="true"
                            />
                        </button>

                        <div
                            id="experience-btg-backend-details"
                            className="experience-details"
                            hidden={!expandedJobs.btgBackend}
                        >
                            <p>
                                Developed <strong>TypeScript REST APIs</strong> for
                                BTG Pactual's corporate digital payments platform,
                                supporting <strong>Pix and boleto transactions</strong>
                                and cloud-based backend services.
                            </p>

                            <div className="experience-info-grid">
                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        01 / EVENT-DRIVEN
                                    </span>
                                    <h4>Asynchronous services</h4>
                                    <p>
                                        Implemented event-driven workflows using
                                        AWS Lambda, SQS, and SNS.
                                    </p>
                                </div>

                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        02 / INFRASTRUCTURE
                                    </span>
                                    <h4>Serverless IaC</h4>
                                    <p>
                                        Managed serverless infrastructure with
                                        Terraform and Serverless Framework.
                                    </p>
                                </div>

                                <div className="experience-info-card">
                                    <span className="experience-card-index">
                                        03 / ENGINEERING
                                    </span>
                                    <h4>Quality & delivery</h4>
                                    <p>
                                        Applied CI/CD, unit testing, code reviews,
                                        and application monitoring.
                                    </p>
                                </div>
                            </div>

                            <div className="chips experience-chips">
                                {[
                                    'TypeScript',
                                    'REST APIs',
                                    'PostgreSQL',
                                    'AWS Lambda',
                                    'Event-Driven Architecture',
                                    'Terraform',
                                    'CI/CD'
                                ].map((skill) => (
                                    <span
                                        className="experience-skill"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </Window>
    );
}


function ProjectsSection() {
    const [activeProject, setActiveProject] = useState('recipe');

    const tabs = [
        { id: 'recipe', label: 'Recipe AI', file: 'recipe-ai.jsx' },
        { id: 'multimodal', label: 'Multimodal Circuits', file: 'multimodal.ipynb' },
        { id: 'botnet', label: 'Botnet Detection', file: 'botnet-research.py' }
    ];

    return (
        <Window
            id="projects"
            index={5}
            title="Relevant Projects"
            subtitle="From Ideas to Working Solutions"
            extra="projects/"
        >
            <div className="project-browser">

                {/* BROWSER TABS */}
                <div className="project-browser-tabs" role="tablist" aria-label="Projects">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            id={`tab-${tab.id}`}
                            aria-selected={activeProject === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            className={`project-browser-tab ${activeProject === tab.id ? 'active' : ''
                                }`}
                            onClick={() => setActiveProject(tab.id)}
                        >
                            <span className="project-tab-indicator" />
                            <span className="project-tab-label">{tab.label}</span>
                            <span className="project-tab-extension">
                                {tab.file.split('.').pop()}
                            </span>
                        </button>
                    ))}
                </div>

                {/* BROWSER ADDRESS BAR */}
                <div className="project-address-bar">
                    <span className="project-address-icon">⌘</span>
                    <span>
                        portfolio / projects /{' '}
                        <strong>
                            {tabs.find(tab => tab.id === activeProject).file}
                        </strong>
                    </span>
                </div>

                {/* RECIPE AI */}
                <div
                    id="panel-recipe"
                    role="tabpanel"
                    aria-labelledby="tab-recipe"
                    hidden={activeProject !== 'recipe'}
                    className="project-browser-panel"
                >
                    <article className="project-card project-browser-card">
                        <div className="project-preview recipe-preview">
                            <div className="preview-app">
                                <div className="preview-app-top">
                                    <span>recipe.ai</span>
                                    <span>● ● ●</span>
                                </div>

                                <div className="preview-plate">◉</div>

                                <div className="preview-lines">
                                    <i />
                                    <i />
                                    <i />
                                </div>
                            </div>

                            <span className="preview-tag">DEPLOYED DEMO</span>
                        </div>

                        <div className="project-body">
                            <div className="project-num">
                                PERSONAL PROJECT
                            </div>

                            <h3>Recipe AI</h3>

                            <p>
                                Image-based ingredient recognition and recipe
                                recommendation. Classifies food images with
                                MobileNetV2 and retrieves relevant recipes
                                using TF-IDF and nearest neighbors.
                            </p>

                            <div className="project-fact">
                                <strong>90.57%</strong>
                                <span>
                                    reported ingredient classification
                                    accuracy · 15 classes
                                </span>
                            </div>

                            <div className="chips">
                                <Chip>TensorFlow</Chip>
                                <Chip>HuggingFace</Chip>
                                <Chip>MobileNetV2</Chip>
                                <Chip>scikit-learn</Chip>
                                <Chip>Streamlit</Chip>
                            </div>

                            <div className="project-links">
                                <Out href={GH + '/recipe-ai'}>
                                    Source code
                                </Out>
                                <Out href="https://huggingface.co/isabelagregio/recipe-ai-ingredient-classifier">
                                    Deployed Model
                                </Out>
                                <Out href="https://recipe-ai-generator.streamlit.app/">
                                    Live demo
                                </Out>
                            </div>
                        </div>
                    </article>
                </div>

                {/* MULTIMODAL CIRCUITS */}
                <div
                    id="panel-multimodal"
                    role="tabpanel"
                    aria-labelledby="tab-multimodal"
                    hidden={activeProject !== 'multimodal'}
                    className="project-browser-panel"
                >
                    <article className="project-card project-browser-card">
                        <div className="project-preview multimodal-preview">
                            <div className="vision-block">
                                <div className="vision-grid">▦</div>
                                <span>circuit image</span>
                            </div>

                            <div className="vision-arrow">→</div>

                            <div className="vision-block">
                                <div className="vision-grid">0–7</div>
                                <span>constrained output</span>
                            </div>

                            <span className="preview-tag">COURSE PROJECT</span>
                        </div>

                        <div className="project-body">
                            <div className="project-num">
                                USP · PCS3838 - Artificial Intelligence
                            </div>

                            <h3>Multimodal circuit understanding</h3>

                            <p>
                                Visual question answering with Qwen3-VL-8B,
                                QLoRA fine-tuning, and selective test-time
                                compute. Multiple views are evaluated only
                                when the model is uncertain, using constrained
                                label probabilities rather than free-form generation.
                            </p>

                            <div className="project-fact">
                                <strong>66.60%</strong>
                                <span>
                                    Kaggle Competition accuracy using QLoRA fine-tuning
                                    and uncertainty-guided multi-view inference
                                </span>
                            </div>

                            <div className="chips">
                                <Chip>Qwen3-VL-8B</Chip>
                                <Chip>QLoRA</Chip>
                                <Chip>VLM</Chip>
                                <Chip>Test-time compute</Chip>
                            </div>

                            <div className="project-links">
                                <Out href="https://github.com/isabelagregio/PCS3838-DeepLearning/tree/main">
                                    Notebook Code
                                </Out>
                            </div>

                        </div>
                    </article>
                </div>

                {/* BOTNET DETECTION */}
                <div
                    id="panel-botnet"
                    role="tabpanel"
                    aria-labelledby="tab-botnet"
                    hidden={activeProject !== 'botnet'}
                    className="project-browser-panel"
                >
                    <article className="project-card project-browser-card">
                        <div className="project-preview botnet-preview">
                            <div className="flow-visual">
                                <div>Network flows</div>
                                <span>↓</span>
                                <div>Binary detector</div>
                                <span>↓ uncertain cases</span>
                                <div>LLM review</div>
                            </div>

                            <span className="preview-tag">IN PROGRESS</span>
                        </div>

                        <div className="project-body">
                            <div className="project-num">
                                PolyMTL · LOG6309E - Intelligent DevOps
                            </div>

                            <h3>Selective LLM review for botnet detection</h3>

                            <p>
                                Testing whether uncertainty can identify which
                                network flows deserve a second opinion from
                                an LLM when traffic shifts to a previously
                                unseen scenario. Compares selective review
                                with detector-only and random-review baselines.
                            </p>

                            <div className="project-fact">
                                <strong>Unseen Botnet Detection</strong>
                                <span>
                                    Uncertainty-guided LLM review to recover
                                    missed threats under scenario shift while
                                    minimizing inference costs
                                </span>
                            </div>

                            <div className="chips">
                                <Chip>CTU-13</Chip>
                                <Chip>Out-of-distribution</Chip>
                                <Chip>LLM evaluation</Chip>
                                <Chip>DevOps Cybersecurity</Chip>
                            </div>

                            <div className="project-links">
                                <span className="unavailable">
                                    Ongoing team project
                                </span>
                            </div>
                        </div>
                    </article>
                </div>

                {/* BROWSER STATUS BAR */}
                <div className="project-browser-status">
                    <span>
                        {tabs.findIndex(tab => tab.id === activeProject) + 1}
                        {' '}of {tabs.length} projects
                    </span>

                    <span>
                        Selected work · AI & Software Engineering
                    </span>
                </div>
            </div>
        </Window>
    );
}


function ResearchSection() {
    const [expandedResearch, setExpandedResearch] = useState({
        gerad: false,
        itau: false,
    });

    const toggleResearch = (id) => {
        setExpandedResearch((previous) => ({
            ...previous,
            [id]: !previous[id],
        }));
    };

    return (
        <Window
            id="research"
            index={4}
            title="Research"
            subtitle="Exploring the frontiers of AI"
            extra="research.ipynb"
        >
            <div className="research-stack research-accordion">

                {/* GERAD RESEARCH */}
                <article
                    className={`research-card research-accordion-card ${expandedResearch.gerad ? 'is-expanded' : ''
                        }`}
                >
                    <button
                        type="button"
                        className="research-toggle"
                        aria-expanded={expandedResearch.gerad}
                        aria-controls="research-gerad-details"
                        onClick={() => toggleResearch('gerad')}
                    >
                        <span className="research-toggle-content">
                            <span className="research-kicker">
                                <FlaskConical size={17} />
                                GERAD - Groupe d'études et de recherche
                                en analyse des décisions
                                <span>ONGOING</span>
                            </span>

                            <span className="research-toggle-title">
                                Adaptive Interaction in Multi-Agent LLM Systems
                            </span>

                            <span className="research-toggle-question">
                                How can AI agents collaborate more reliably
                                while minimizing errors and computational costs?
                            </span>
                        </span>

                        <ChevronDown
                            size={21}
                            className="research-chevron"
                            aria-hidden="true"
                        />
                    </button>

                    <div
                        id="research-gerad-details"
                        className="research-details"
                        hidden={!expandedResearch.gerad}
                    >
                        <p>
                            My research focuses on{' '}
                            <strong>
                                performance, reliability, and risk in
                                role-specialized multi-agent LLM systems
                            </strong>.
                            I investigate how interactions between agents
                            influence reasoning accuracy, computational
                            efficiency, and error propagation. By evaluating
                            different collaboration strategies, I explore
                            <strong>
                                {' '}adaptive stopping and risk-aware routing
                            </strong>
                            {' '}to determine when additional interactions
                            improve results and when they introduce
                            unnecessary costs or errors.
                        </p>

                        <div className="research-results">
                            <div>
                                <span>Adaptive accuracy</span>
                                <strong>78.73%</strong>
                                <small>MATH benchmark · Qwen2.5-7B</small>
                            </div>

                            <div>
                                <span>Token reduction</span>
                                <strong>~47%</strong>
                                <small>vs. 3-round Self-Refine baseline</small>
                            </div>

                            <div>
                                <span>Practical takeaway</span>
                                <strong>Stop earlier</strong>
                                <small>
                                    when another round is unlikely to help
                                </small>
                            </div>
                        </div>

                        <div className="research-foot">
                            <span>
                                LLM: Qwen2.5-7B · Mathematical Reasoning ·
                                Multi-Agent Collaboration · NVIDIA A100 GPUs
                            </span>

                            <Out href={GH + '/multi-agent-llm-research'}>
                                Explore Research & Code
                            </Out>
                        </div>
                    </div>
                </article>

                {/* ITAU RESEARCH */}
                <article
                    className={`research-card research-accordion-card ${expandedResearch.itau ? 'is-expanded' : ''
                        }`}
                >
                    <button
                        type="button"
                        className="research-toggle"
                        aria-expanded={expandedResearch.itau}
                        aria-controls="research-itau-details"
                        onClick={() => toggleResearch('itau')}
                    >
                        <span className="research-toggle-content">
                            <span className="research-kicker">
                                <FlaskConical size={17} />
                                C2D - Itaú Data Science Center
                                <span>PUBLISHED PREPRINT</span>
                            </span>

                            <span className="research-toggle-title">
                                Improving fairness in Large Language Models
                            </span>

                            <span className="research-toggle-question">
                                Can we reduce biased model decisions
                                without retraining the LLM?
                            </span>
                        </span>

                        <ChevronDown
                            size={21}
                            className="research-chevron"
                            aria-hidden="true"
                        />
                    </button>

                    <div
                        id="research-itau-details"
                        className="research-details"
                        hidden={!expandedResearch.itau}
                    >
                        <p>
                            Investigated how{' '}
                            <strong>
                                inconsistencies in LLM predictions can
                                reveal and help mitigate bias
                            </strong>
                            {' '}in sensitive decision-making tasks.
                            Our approach uses
                            <strong> testing-time adversaries</strong>
                            {' '}to generate alternative versions of an
                            input and evaluate how the model's predictions
                            change. By relying exclusively on
                            <strong> forward passes</strong>,
                            {' '}the method improves fairness without
                            fine-tuning or modifying the original model.
                        </p>

                        <div className="research-results two">
                            <div>
                                <span>Fairness improvement</span>
                                <strong>Up to 27 pp</strong>
                                <small>
                                    Reported gain in fairness metrics
                                    for Llama 3
                                </small>
                            </div>

                            <div>
                                <span>Key advantage</span>
                                <strong>No retraining</strong>
                                <small>
                                    Inference-only approach using
                                    testing-time adversaries
                                </small>
                            </div>
                        </div>

                        <div className="research-foot">
                            <span>
                                Llama 3 · LLM Fairness ·
                                Testing-Time Adversaries · Bias Mitigation
                            </span>

                            <Out href="https://arxiv.org/abs/2505.12100">
                                Read the Paper
                            </Out>
                            <Out href={GH + '/fairness_experiments'}>
                                Explore Code
                            </Out>
                        </div>
                    </div>
                </article>

            </div>
        </Window>
    );
}


function App() {
    const [mode, setMode] = useState('dark'); const [menu, setMenu] = useState(false); const [active, setActive] = useState('about'); useEffect(() => { document.documentElement.dataset.theme = mode; }, [mode]); useEffect(() => { const obs = new IntersectionObserver(items => items.forEach(i => { if (i.isIntersecting) setActive(i.target.id); }), { rootMargin: '-25% 0px -65% 0px' }); nav.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); }); return () => obs.disconnect(); }, []); return (
        <>
            <header className="topbar">
                <div className="topbar-inner">
                    <a href="#top" className="brand">
                        <span className="brand-glyph">ig<span>_</span>
                        </span>
                        <span className="brand-meta">ISABELA GREGIO <small>/ PORTFOLIO</small>
                        </span>
                    </a>
                    <nav className={menu ? 'nav expanded' : 'nav'}>{nav.map(([id, label]) => <a key={id} className={active === id ? 'selected' : ''} href={'#' + id} onClick={() => setMenu(false)}>{label}</a>)}</nav>
                    <div className="top-actions">
                        <button className="theme" aria-label="Toggle color theme" title="Toggle theme" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>{mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
                        <button aria-label="Toggle navigation" className="mobile-menu" onClick={() => setMenu(!menu)}>{menu ? <X size={19} /> : <Menu size={19} />}</button>
                    </div>
                </div>
            </header>
            <main id="top">
                <div className="intro-grid">
                    <div className="hero">
                        <div className="availability">
                            <span className="status-dot" /> CURIOSITY-DRIVEN. ENGINEERING-MINDED. </div>
                        <h1>Hi, I’m <span>Isabela.</span>
                        </h1>
                        <p className="hero-line">Combining Software Engineering, Data and AI<b> to build practical solutions to real-world problems.</b>
                        </p>
                        <p className="hero-detail">Computer Engineering at the University of São Paulo, currently on exchange at Polytechnique Montréal. I'm passionate about exploring how software, data, and AI can come together to solve complex problems and build practical solutions.</p>
                        <div className="hero-actions">
                            <a className="primary-action" href="#experience">Explore my work <ChevronRight size={16} />
                            </a>
                            <Out className="quiet-action" href={GH}>GitHub</Out>
                            <Out className="quiet-action" href="https://www.linkedin.com/in/isabela-gregio/">LinkedIn</Out>
                        </div>
                    </div>
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <span>
                                <Terminal size={14} /> profile.ts</span>
                            <span className="term-close">● ● ●</span>
                        </div>
                        <div className="terminal-code">
                            <div>
                                <em>01</em> <span className="syntax-purple">const</span> isabela = {'{'}</div>
                            <div>
                                <em>02</em> &nbsp; role: <span className="syntax-green">'AI & Software Engineer'</span>,</div>
                            <div>
                                <em>03</em> &nbsp; basedIn: <span className="syntax-green">'Montréal / São Paulo'</span>,</div>
                            <div>
                                <em>04</em> &nbsp; focus: [</div>
                            <div>
                                <em>05</em> &nbsp;&nbsp; <span className="syntax-green">'Software Engineering'</span>,</div>
                            <div>
                                <em>06</em> &nbsp;&nbsp; <span className="syntax-green">'Artificial Intelligence and ML'</span>,</div>
                            <div>
                                <em>07</em> &nbsp;&nbsp; <span className="syntax-green">'Data Engineering'</span>,</div>
                            <div>
                                <em>08</em> &nbsp;&nbsp; <span className="syntax-green">'Applied Agentic & LLM Research'</span>
                            </div>
                            <div>
                                <em>09</em> &nbsp; ],</div>
                            <div>
                                <em>10</em> &nbsp; <span className="syntax-blue">currentlyBuilding</span>: <span className="syntax-green">true</span>
                            </div>
                            <div>
                                <em>11</em> {'}'};</div>
                            <div className="prompt">
                                <em>›</em> <span>open to learning, building, collaborating</span>
                                <span className="cursor">▌</span>
                            </div>
                        </div>
                        <div className="terminal-foot">
                            <span>TypeScript / a little about me</span>
                            <span>UTF-8</span>
                        </div>
                    </div>
                </div>
                <div className="desktop-caption">
                    <span>WORKSPACE</span>
                    <span>Scroll to explore ↓</span>
                </div>
                <AboutSection />
                <EducationSection />
                <ExperienceSection />
                <ResearchSection />
                <ProjectsSection />

                <Window
                    id="toolkit"
                    index={6}
                    title="Beyond the Code"
                    subtitle="Skills, tools & a little about me"
                    extra="about-me/"
                >
                    <div className="toolkit-explorer">

                        <div className="explorer-header">
                            <span>EXPLORER / ISABELA</span>
                            <span>4 DIRECTORIES</span>
                        </div>

                        <div className="explorer-folders">

                            {/* AI & MACHINE LEARNING */}
                            <details className="explorer-folder">
                                <summary>
                                    <span className="folder-name">
                                        <Cpu size={18} />
                                        ai-and-machine-learning
                                    </span>
                                    <span className="folder-arrow">⌄</span>
                                </summary>

                                <div className="folder-content">
                                    <Chip>LLM & Agentic Systems</Chip>
                                    <Chip>Prompt Engineering</Chip>
                                    <Chip>Model Evaluation</Chip>
                                    <Chip>Deep Learning</Chip>
                                </div>
                            </details>

                            {/* SOFTWARE ENGINEERING */}
                            <details className="explorer-folder">
                                <summary>
                                    <span className="folder-name">
                                        <Code2 size={18} />
                                        software-engineering
                                    </span>
                                    <span className="folder-arrow">⌄</span>
                                </summary>

                                <div className="folder-content">
                                    <Chip>Python & TypeScript</Chip>
                                    <Chip>Backend & API Design</Chip>
                                    <Chip>Software Architecture</Chip>
                                    <Chip>Data Engineering</Chip>
                                </div>
                            </details>

                            {/* CLOUD & DEVOPS */}
                            <details className="explorer-folder">
                                <summary>
                                    <span className="folder-name">
                                        <Cloud size={18} />
                                        cloud-and-devops
                                    </span>
                                    <span className="folder-arrow">⌄</span>
                                </summary>

                                <div className="folder-content">
                                    <Chip>AWS & GCP</Chip>
                                    <Chip>CI/CD & Automation</Chip>
                                    <Chip>Docker</Chip>
                                    <Chip>Infrastructure as Code</Chip>
                                </div>
                            </details>

                            {/* PERSONAL */}
                            <details className="explorer-folder">
                                <summary>
                                    <span className="folder-name">
                                        <BookOpen size={18} />
                                        a-little-about-me
                                    </span>
                                    <span className="folder-arrow">⌄</span>
                                </summary>

                                <div className="folder-personal">
                                    <div className="personal-row">
                                        <span className="personal-label">
                                            Languages
                                        </span>

                                        <div className="folder-content">
                                            <Chip>Portuguese</Chip>
                                            <Chip>English</Chip>
                                            <Chip>French</Chip>
                                        </div>
                                    </div>

                                    <div className="personal-row">
                                        <span className="personal-label">
                                            Outside of work
                                        </span>

                                        <div className="folder-content">
                                            <Chip>Running</Chip>
                                            <Chip>Cooking</Chip>
                                            <Chip>Crochet</Chip>
                                        </div>
                                    </div>
                                </div>
                            </details>

                        </div>

                        <div className="explorer-footer">
                            <span>~/isabela/about-me</span>
                            <span>Always learning.</span>
                        </div>

                    </div>
                </Window>
                <footer>
                    <div>
                        <span className="footer-brand">ig_</span>
                        <p>Isabela Gregio · AI & Software Engineer</p>
                    </div>
                    <div>
                        <Out href={GH}>GitHub</Out>
                        <Out href="https://www.linkedin.com/in/isabela-gregio/">LinkedIn</Out>
                        <a href="mailto:isabela.gregio@usp.br">Email <ArrowUpRight size={14} />
                        </a>
                    </div>
                    <span className="footer-end">Built with React · Hosted on GitHub Pages</span>
                </footer>
            </main>
        </>
    );
}
createRoot(document.getElementById('root')).render(<App />);
