document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['C++', 'Python', 'JAVA', 'HTML/CSS/JS', 'SQL'],
            datasets: [{
                label: 'Proficiency',
                data: [90, 75, 70, 85, 80],
                backgroundColor: 'rgba(14, 165, 233, 0.7)',
                borderColor: 'rgba(14, 165, 233, 1)',
                borderWidth: 1,
                borderRadius: 4,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#e7e5e4'
                    },
                    ticks: {
                        color: '#78716c'
                    }
                },
                y: {
                     grid: {
                        display: false
                    },
                    ticks: {
                        color: '#292524'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Proficiency: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(item => {
                item.classList.remove('active', 'text-sky-600', 'border-sky-500');
                item.classList.add('text-gray-500', 'border-transparent');
            });
            btn.classList.add('active', 'text-sky-600', 'border-sky-500');
            btn.classList.remove('text-gray-500', 'border-transparent');
            
            const targetPane = document.querySelector(btn.dataset.tabTarget);
            tabPanes.forEach(pane => {
                pane.classList.add('hidden');
            });
            targetPane.classList.remove('hidden');
        });
    });

    const projects = [
        {
            title: "Contact Management System",
            description: `
                <p>Architected a robust Contact Management System in C++ with comprehensive features, including add/search/edit/delete; enhanced operational efficiency by 35% and minimized data entry errors by 20%.</p>
                <p>Engineered a C++ based Contact Management System enabling functionalities such as adding, searching, editing, and deleting contacts; reduced manual data handling time by 40% and improved data accuracy by 25%.</p>
                <p>Designed a user-friendly console interface with intuitive navigation for seamless user interaction.</p>
            `
        },
        {
            title: "TalkTherapy Bot",
            description: `
                <p>Led front-end development for "TalkTherapy," a virtual psychologist website utilizing the Llama 2 model, providing specialized support for various mental health concerns.</p>
                <p>Implemented user interface and interactive features using HTML, CSS and JavaScript.</p>
                <p>Collaborated with a teammate responsible for Python programming and backend integration of the Llama-2 model.</p>
            `
        },
        {
            title: "System Monitoring for Unauthorized Keyboard Input",
            description: "<p>Developed a proof-of-concept system to understand and detect unauthorized keyboard input capture techniques, focusing on defensive counter-measures. This project involved deep diving into system hooks and event listeners to build a foundational understanding of keylogger-style malware from a defensive perspective.</p>"
        },
        {
            title: "Malware Behavior Analysis",
            description: "<p>Implemented a basic application to analyze the behavior of covert data exfiltration methods, focusing on identifying suspicious activities for security purposes. The goal was to understand how spyware operates in order to build better detection and prevention strategies.</p>"
        },
        {
            title: "Security Awareness Training Simulation",
            description: "<p>Designed and executed a controlled simulation of social engineering tactics, specifically phishing, to understand user vulnerability and develop effective security awareness training materials. This involved creating safe, replica phishing pages and analyzing click-through rates.</p>"
        },
        {
            title: "Basic Network Scanner",
            description: "<p>Developed a basic network scanner to identify active hosts and open ports within a local network, demonstrating a practical understanding of network protocols (TCP/IP) and reconnaissance techniques used in both offensive and defensive security.</p>"
        },
         {
            title: "Secure Password Manager",
            description: "<p>Designed and implemented a basic password manager application to understand secure password storage principles. This project focused on the correct implementation of hashing algorithms (e.g., Argon2, bcrypt) and encryption to protect sensitive user data at rest.</p>"
        },
        {
            title: "Caesar Cipher Tool",
            description: "<p>Created a tool to encrypt and decrypt messages using the Caesar cipher. While simple, this project served as a hands-on introduction to fundamental cryptographic concepts, algorithms, and the importance of strong encryption.</p>"
        }
    ];

    const projectGrid = document.getElementById('project-grid');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal-btn');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col';
        card.innerHTML = `
            <h3 class="text-xl font-semibold text-stone-800 mb-3">${project.title}</h3>
            <p class="text-stone-600 flex-grow">${project.description.split('<p>')[1].replace('</p>','').substring(0, 100)}...</p>
            <div class="mt-4">
                <button class="view-details-btn text-sky-600 font-semibold hover:text-sky-800 transition-colors">View Details &rarr;</button>
            </div>
        `;
        projectGrid.appendChild(card);

        card.querySelector('.view-details-btn').addEventListener('click', () => {
            modalTitle.textContent = project.title;
            modalBody.innerHTML = project.description;
            modal.classList.remove('hidden');
            setTimeout(() => modal.classList.remove('opacity-0'), 10);
            setTimeout(() => modal.querySelector('.modal-content').classList.remove('scale-95'), 10);
        });
    });

    const closeModal = () => {
        modal.classList.add('opacity-0');
        modal.querySelector('.modal-content').classList.add('scale-95');
        setTimeout(() => modal.classList.add('hidden'), 300);
    };

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    const timelineEvents = [
        {
            year: "2021-2024",
            title: "Bachelor of Computer Applications (B.C.A)",
            institution: "Graphic Era Hill University",
            description: "Achieved a GPA of 8.1/10.0. Key coursework included Data Structures, Algorithms, Computer Networks, and Operating Systems.",
            type: "education"
        },
        {
            year: "Completed",
            title: "Cyber Security Professional Certification",
            institution: "Global Institute of Cyber Security and Training",
            description: "Successfully completed a comprehensive program in cybersecurity, covering advanced topics in network security, incident response, and ethical hacking.",
            type: "certification"
        },
        {
            year: "Lab Experience",
            title: "Personal Cybersecurity Home Lab",
            institution: "Self-directed",
            description: "Developed and maintained a personal lab for hands-on practice with security tools and techniques, including setting up VMs for secure testing and analysis.",
            type: "experience"
        },
         {
            year: "Certification",
            title: "Hardware and Networking",
            institution: "National Skill Training Institute Dehradun",
            description: "Completed an offline certification program covering the fundamentals of computer hardware and network infrastructure.",
            type: "certification"
        },
         {
            year: "2018-2019",
            title: "Intermediate / NIOS",
            institution: "N.L.O.S",
            description: "Completed secondary education with a score of 67.00%.",
            type: "education"
        }
    ];

    const timelineContainer = document.getElementById('timeline-container');
    timelineEvents.forEach((event, index) => {
        const isLeft = index % 2 === 0;
        const timelineItem = document.createElement('div');
        timelineItem.className = `relative flex items-center ${isLeft ? 'justify-start md:justify-end md:pr-8' : 'justify-start md:pl-8'}`;
        
        const dot = document.createElement('div');
        dot.className = `absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${event.type === 'education' ? 'bg-sky-500' : event.type === 'certification' ? 'bg-emerald-500' : 'bg-stone-500'}`;
        
        const content = document.createElement('div');
        content.className = 'w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md';
        content.innerHTML = `
            <p class="text-sm font-medium text-sky-600 mb-1">${event.year}</p>
            <h3 class="font-bold text-lg text-stone-800">${event.title}</h3>
            <p class="text-sm font-medium text-stone-500 mb-2">${event.institution}</p>
            <p class="text-stone-600">${event.description}</p>
        `;

        timelineItem.appendChild(dot);
        timelineItem.appendChild(content);
        timelineContainer.appendChild(timelineItem);
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});
