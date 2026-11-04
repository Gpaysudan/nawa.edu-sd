(() => {
  'use strict';

  const WA_NUMBER = '249923915072';
  const STORAGE_LANGUAGE = 'nawa-language';
  const STORAGE_THEME = 'nawa-theme';
  const generatedHeroAsset = '/manus-storage/async-images/Au2AaU784K9y9eGoSwkCMB/image-1.webp';

  const text = {
    ar: {
      skip: 'تجاوز إلى المحتوى', navHome: 'الرئيسية', navAcademies: 'الأكاديميات والمسارات', navSelfService: 'الخدمة الذاتية', navDeveloper: 'عن المطور', navContact: 'التواصل',
      install: 'تثبيت التطبيق', languageLabel: 'تغيير اللغة', themeLight: 'التبديل إلى الوضع النهاري', themeDark: 'التبديل إلى الوضع الليلي', menuOpen: 'فتح القائمة', menuClose: 'إغلاق القائمة',
      heroEyebrow: 'من السودان، إلى آفاق بلا حدود', heroTitle: 'ازرع مهارة اليوم، واحصد فرص الغد.', heroDescription: 'نَوّى مساحة للتعلّم العملي؛ تبدأ فيها فكرتك صغيرة، وتكبر بالمعرفة والتجربة حتى تصبح خطوة واثقة نحو مستقبلك.', explore: 'استكشف المسارات الآن', registerNow: 'سجّل في دوراتك', heroProof: 'مسارات عملية، وإرشاد يرافقك خطوة بخطوة', heroImageAlt: 'مشهد إبداعي يرمز إلى التعلّم والتقنية ونموّ المهارات', visualStamp: 'تعلّم يصنع أثراً', noteGrowth: 'نموّ على مهل', noteGrowthSub: 'من الأساس إلى الإتقان', noteTracks: 'مساراً للتعلّم',
      statAcademies: 'أكاديميات متخصصة', statTracks: 'مساراً تدريبياً', statLevelsValue: '3', statLevels: 'مستويات معتمدة', statsCaption: 'مسارك يبدأ من هنا',
      academyKicker: 'تعلّم على طريقتك', academyTitle: 'مسارات تنبت من شغفك', academyIntro: 'اختر مجالاً يثير فضولك، وابدأ من المستوى الذي يناسبك. كل مسار يجمع بين أساس واضح وتطبيق عملي.', courseCountLabel: 'مساراً متاحاً', allCourses: 'كل المسارات', searchPlaceholder: 'ابحث عن مسار أو مهارة', noResults: 'لم نعثر على مسارات مطابقة. جرّب كلمة أخرى.',
      details: 'تفاصيل المسار', learnLabel: 'ماذا ستتعلم؟', jobsLabel: 'فرص ومهام مستهدفة', levelsLabel: 'مستويات التعلّم', beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'محترف', enroll: 'سجّل في المسار',
      bandQuote: 'المعرفة بذرة، والعمل رعايتها، والأثر حصادها.', supportKicker: 'نحن قريبون منك', supportTitle: 'إجابة سريعة، وخطوة أوضح.', supportIntro: 'اسأل مساعد نَوّى الذكي عن أكثر ما يشغلك. وإذا احتجت تفاصيل خاصة، فريقنا على واتساب بانتظارك.', talkToTeam: 'تواصل مع فريق التسجيل', assistantName: 'مساعد نَوّى الذكي', assistantStatus: 'متاح للإجابة الآن', assistantGreeting: 'أهلاً بك! اختر سؤالاً من الأسفل، وسأساعدك بما أستطيع.', justNow: 'الآن', quickQuestions: 'أسئلة سريعة', faqPayment: 'ما هي طرق الدفع المتاحة؟', faqMode: 'هل الدورات أونلاين أم حضوري؟', faqCertificate: 'كيف أحصل على الشهادة؟', faqSchedule: 'ما مواعيد الدفعات القادمة؟', localAssistant: 'إجابات فورية داخل الموقع، بلا تسجيل أو مشاركة لبياناتك.',
      developerKicker: 'من الفكرة إلى الواجهة', developerTitle: 'صناعة رقمية بروح إنسانية.', developerIntro: 'بُنيت تجربة نَوّى لتقريب المهارات من الناس، وجعل أول خطوة في التعلّم أسهل وألطف.', developerQuote: 'كل مهارة جديدة نافذة، وكل بداية تستحق أن تُروى.', developerCardLabel: 'صاحب الفكرة والتنفيذ', developerRole: 'مهندس برمجيات', whatsappLabel: 'واتساب', emailLabel: 'البريد الإلكتروني', contactWhatsApp: 'واتساب', contactEmail: 'راسلني', portfolio: 'Portfolio',
      contactKicker: 'البداية محادثة', contactTitle: 'جاهز تختار مسارك؟', contactIntro: 'أرسل استفسارك، وخلي أول خطوة علينا.', contactCta: 'راسل نَوّى على واتساب', footerLine: 'مهارات تنمو، وفرص تتّسع.', copyright: 'حقوق النشر محفوظة © 2026 نَوّى للتقنية والمهارات', developedBy: 'تطوير', backTop: 'العودة للأعلى',
      registrationKicker: 'خطوتك الأولى', registrationTitle: 'خلّينا نبدأ رحلتك', registrationIntro: 'أكمل بياناتك، وسنفتح محادثة واتساب برسالة جاهزة لتأكيد التفاصيل.', fullNameLabel: 'الاسم الكامل', fullNamePlaceholder: 'اكتب اسمك هنا', phoneLabel: 'رقم الواتساب / الهاتف', phonePlaceholder: 'مثال: 09xxxxxxxx', courseLabel: 'المسار', levelLabel: 'المستوى', attendanceLabel: 'طريقة الحضور', online: 'أونلاين', inPerson: 'حضوري', privacyNote: 'لن تُحفظ بياناتك على الموقع؛ ستُرسل فقط عندما تفتح محادثة واتساب.', sendWhatsApp: 'متابعة عبر واتساب', noticeTitle: 'معلومة صغيرة', understood: 'تمام', portfolioNotice: 'رابط ملف الأعمال لم يُضف بعد. تواصل مباشرة عبر واتساب أو البريد الإلكتروني.', installHelp: 'للتثبيت، افتح قائمة المتصفح واختر «إضافة إلى الشاشة الرئيسية» أو «تثبيت التطبيق».', installed: 'تم تثبيت نَوّى على جهازك.', chatPrompt: 'اسأل مساعد نَوّى', chatContact: 'للتفاصيل الدقيقة، اكتب لنا على واتساب وسنساعدك.',
      faqAnswers: {
        payment: 'تتغير خيارات الدفع بحسب الدفعة. راسل فريق التسجيل على واتساب ليؤكد لك الطرق المتاحة حالياً.',
        mode: 'خيارات الحضور أونلاين أو حضوري تُحدّد بحسب المسار والدفعة. اختر ما يناسبك في نموذج التسجيل وسيؤكد الفريق التفاصيل معك.',
        certificate: 'متطلبات الشهادة تختلف حسب المسار. اسأل فريق التسجيل عن تفاصيل المسار الذي اخترته قبل بدء الدراسة.',
        schedule: 'مواعيد الدفعات تتجدد بحسب المسار. تواصل مع فريق التسجيل على واتساب لمعرفة أقرب موعد متاح.'
      },
      attendanceOnline: 'أونلاين', attendanceInPerson: 'حضوري', waIntro: 'مرحباً، أود التسجيل في مسار تدريبي لدى نَوّى.', waName: 'الاسم', waPhone: 'رقم التواصل', waCourse: 'المسار', waLevel: 'المستوى', waAttendance: 'طريقة الحضور', waClosing: 'يرجى التواصل معي لتأكيد تفاصيل التسجيل.'
    },
    en: {
      skip: 'Skip to content', navHome: 'Home', navAcademies: 'Academies & paths', navSelfService: 'Self-service', navDeveloper: 'About the developer', navContact: 'Contact',
      install: 'Install app', languageLabel: 'Change language', themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode', menuOpen: 'Open menu', menuClose: 'Close menu',
      heroEyebrow: 'Rooted in Sudan. Growing beyond borders.', heroTitle: 'Grow a skill today. Open a door tomorrow.', heroDescription: 'Nawa is a place to learn by doing. Start with a small idea, grow through knowledge and practice, and take a confident next step toward your future.', explore: 'Explore learning paths', registerNow: 'Register for a course', heroProof: 'Practical learning, with guidance at every step', heroImageAlt: 'Creative illustration representing learning, technology and growing skills', visualStamp: 'Learn to make an impact', noteGrowth: 'Steady growth', noteGrowthSub: 'From foundations to mastery', noteTracks: 'paths to explore',
      statAcademies: 'specialized academies', statTracks: 'learning paths', statLevelsValue: '3', statLevels: 'learning levels', statsCaption: 'Your path starts here',
      academyKicker: 'Learn your way', academyTitle: 'A path for what moves you', academyIntro: 'Choose a field that sparks your curiosity and begin at a level that fits. Every path pairs clear foundations with hands-on practice.', courseCountLabel: 'paths available', allCourses: 'All paths', searchPlaceholder: 'Search paths or skills', noResults: 'No matching paths found. Try another search.',
      details: 'Path details', learnLabel: 'What you will learn', jobsLabel: 'Related roles & projects', levelsLabel: 'Learning levels', beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Professional', enroll: 'Register for this path',
      bandQuote: 'Knowledge is the seed, practice is its care, and impact is the harvest.', supportKicker: 'Here when you need us', supportTitle: 'A quick answer. A clearer next step.', supportIntro: 'Ask Nawa’s smart assistant what is on your mind. For personal details, our team is ready on WhatsApp.', talkToTeam: 'Contact the admissions team', assistantName: 'Nawa Smart Assistant', assistantStatus: 'Ready to help', assistantGreeting: 'Hello! Choose a question below and I’ll help as best I can.', justNow: 'Now', quickQuestions: 'Quick questions', faqPayment: 'What payment options are available?', faqMode: 'Are courses online or in person?', faqCertificate: 'How do I receive a certificate?', faqSchedule: 'When is the next cohort?', localAssistant: 'Instant answers on this site. No sign-in or data sharing.',
      developerKicker: 'From idea to interface', developerTitle: 'Digital craft, with a human touch.', developerIntro: 'Nawa’s experience is designed to bring useful skills closer and make the first step into learning easier and more welcoming.', developerQuote: 'Every new skill opens a window. Every beginning deserves a story.', developerCardLabel: 'Concept & implementation', developerRole: 'Software Engineer', whatsappLabel: 'WhatsApp', emailLabel: 'Email', contactWhatsApp: 'WhatsApp', contactEmail: 'Email me', portfolio: 'Portfolio',
      contactKicker: 'It starts with a conversation', contactTitle: 'Ready to choose your path?', contactIntro: 'Send us a question. We’ll help with the first step.', contactCta: 'Message Nawa on WhatsApp', footerLine: 'Skills grow. Opportunities widen.', copyright: '© 2026 Nawa Tech & Skills. All rights reserved.', developedBy: 'Built by', backTop: 'Back to top',
      registrationKicker: 'Your first step', registrationTitle: 'Let’s begin your journey', registrationIntro: 'Add your details and we’ll open WhatsApp with a ready-to-send message to confirm the next steps.', fullNameLabel: 'Full name', fullNamePlaceholder: 'Enter your name', phoneLabel: 'WhatsApp / phone number', phonePlaceholder: 'Example: +249 9xxxxxxxx', courseLabel: 'Learning path', levelLabel: 'Level', attendanceLabel: 'Attendance format', online: 'Online', inPerson: 'In person', privacyNote: 'Your details are not stored on this site; they are sent only when you open WhatsApp.', sendWhatsApp: 'Continue on WhatsApp', noticeTitle: 'A quick note', understood: 'Got it', portfolioNotice: 'A portfolio link has not been added yet. Reach out directly by WhatsApp or email.', installHelp: 'To install, open your browser menu and choose “Add to Home Screen” or “Install app.”', installed: 'Nawa has been installed on your device.', chatPrompt: 'Ask Nawa’s assistant', chatContact: 'For exact details, message us on WhatsApp and we’ll help.',
      faqAnswers: {
        payment: 'Payment options can vary by cohort. Message the admissions team on WhatsApp to confirm the current options.',
        mode: 'Online or in-person availability depends on the path and cohort. Choose your preference in the form and the team will confirm the details.',
        certificate: 'Certificate requirements vary by path. Ask the admissions team about the path you choose before classes begin.',
        schedule: 'Cohort dates vary by path. Contact admissions on WhatsApp to ask about the next available start date.'
      },
      attendanceOnline: 'Online', attendanceInPerson: 'In person', waIntro: 'Hello, I would like to register for a learning path at Nawa.', waName: 'Name', waPhone: 'Contact number', waCourse: 'Learning path', waLevel: 'Level', waAttendance: 'Attendance', waClosing: 'Please contact me to confirm the registration details.'
    }
  };

  Object.assign(text.ar, {
    personalSite: 'موقعي الشخصي', developerAvatarAlt: 'أفاتار مرسوم لمهندس برمجيات يرتدي نظارة',
    chatInputLabel: 'اكتب سؤالك', chatPlaceholder: 'اكتب سؤالك هنا…', chatSend: 'إرسال السؤال', chatUnknown: 'لم أجد إجابة مؤكدة من المعلومات المتاحة. يمكنك إرسال سؤالك مباشرة إلى فريق نَوّى.', chatTeamLink: 'إرسال السؤال عبر واتساب',
    faqFees: 'كم رسوم المسارات؟', faqDuration: 'كم مدة الدورة؟', faqRequirements: 'ما متطلبات التسجيل؟', faqBeginner: 'هل أستطيع البدء من الصفر؟', faqRegistration: 'كيف أسجل في المسار؟',
    projectRequest: 'اطلب مشروعاً', projectKicker: 'خطوة أولى لمشروعك', projectTitle: 'احكِ لنا عن مشروعك', projectIntro: 'اختر نوع المشروع وأرسل موجزاً؛ سنفتح لك رسالة واتساب للتواصل مع المطور.', projectNameLabel: 'اسمك الكامل', projectNamePlaceholder: 'اكتب اسمك', projectPhoneLabel: 'رقم واتساب للتواصل', projectEmailLabel: 'البريد الإلكتروني (اختياري)', projectTypeLabel: 'نوع المشروع', projectTypePrompt: 'اختر نوع المشروع', projectTypeWebsite: 'موقع إلكتروني', projectTypeApp: 'تطبيق', projectTypeSystem: 'نظام / منصة', projectDescriptionLabel: 'وصف مختصر للفكرة', projectDescriptionPlaceholder: 'ما المشكلة التي يحلها المشروع؟ وما أهم الميزات؟', projectPrivacy: 'لن تُحفظ البيانات في الموقع؛ سيُفتح واتساب برسالة لمراجعتها قبل إرسالها.', projectSubmit: 'إكمال الطلب عبر واتساب', projectSent: 'تم تجهيز رسالة طلب المشروع في واتساب.',
    projectWaIntro: 'مرحباً، لدي طلب مشروع رقمي وأود مناقشته مع المطور.', projectWaName: 'الاسم', projectWaPhone: 'رقم التواصل', projectWaEmail: 'البريد الإلكتروني', projectWaType: 'نوع المشروع', projectWaBrief: 'ملخص المشروع', projectWaClosing: 'يرجى التواصل معي لمناقشة التفاصيل.',
    faqAnswers: {
      ...text.ar.faqAnswers,
      fees: 'تختلف قيمة الرسوم حسب المسار والدفعة. اطلب السعر المحدث من فريق التسجيل قبل التأكيد.',
      duration: 'مدة الدراسة وعدد الساعات يختلفان حسب المسار والدفعة. يحدد فريق التسجيل المدة والجدول المعتمدين.',
      requirements: 'تختلف المتطلبات السابقة حسب المسار؛ راجع تفاصيل المسار أو اطلب من فريق التسجيل توضيحها.',
      beginner: 'تبدأ بعض المسارات من مستوى مبتدئ. اختر المستوى الملائم واسأل فريق نَوّى عن متطلبات المسار الذي اخترته.',
      registration: 'اضغط «سجّل في المسار»، أكمل بياناتك وطريقة الحضور، ثم افتح رسالة واتساب المعدّة لإتمام التواصل.',
      materials: 'البرامج والأدوات المطلوبة تختلف بحسب المسار؛ اسأل فريق التسجيل عن قائمة الدفعة قبل بدء الدراسة.'
    }
  });
  Object.assign(text.en, {
    personalSite: 'Personal website', developerAvatarAlt: 'Illustrated avatar of a software engineer wearing glasses',
    chatInputLabel: 'Type your question', chatPlaceholder: 'Ask a question…', chatSend: 'Send question', chatUnknown: 'I could not find a confirmed answer in the information available here. You can send your question to the Nawa team.', chatTeamLink: 'Send this question on WhatsApp',
    faqFees: 'How much are the course fees?', faqDuration: 'How long is a course?', faqRequirements: 'What are the registration requirements?', faqBeginner: 'Can I start as a beginner?', faqRegistration: 'How do I register for a path?',
    projectRequest: 'Request a project', projectKicker: 'A first step for your project', projectTitle: 'Tell us about your project', projectIntro: 'Choose a project type and add a short brief. We will prepare a WhatsApp message to contact the developer.', projectNameLabel: 'Full name', projectNamePlaceholder: 'Enter your name', projectPhoneLabel: 'WhatsApp contact number', projectEmailLabel: 'Email (optional)', projectTypeLabel: 'Project type', projectTypePrompt: 'Choose a project type', projectTypeWebsite: 'Website', projectTypeApp: 'Application', projectTypeSystem: 'System / platform', projectDescriptionLabel: 'Short project brief', projectDescriptionPlaceholder: 'What problem should it solve, and which features matter most?', projectPrivacy: 'Your information is not saved on this site. WhatsApp opens with a draft for you to review before sending.', projectSubmit: 'Continue with WhatsApp', projectSent: 'Your project request draft is ready in WhatsApp.',
    projectWaIntro: 'Hello, I have a digital project request I would like to discuss with the developer.', projectWaName: 'Name', projectWaPhone: 'Contact number', projectWaEmail: 'Email', projectWaType: 'Project type', projectWaBrief: 'Project brief', projectWaClosing: 'Please contact me to discuss the details.',
    faqAnswers: {
      ...text.en.faqAnswers,
      fees: 'Fees vary by learning path and cohort. Please ask the admissions team to confirm the current price before enrolling.',
      duration: 'Course length and teaching hours vary by path and cohort. The admissions team can confirm the current schedule.',
      requirements: 'Prerequisites depend on the path. Review its details or ask the admissions team to clarify what you need.',
      beginner: 'Some paths offer a beginner level. Choose the level that fits and ask Nawa about prerequisites for your selected path.',
      registration: 'Choose a path, select “Register”, complete your details and attendance preference, then review the prepared WhatsApp message.',
      materials: 'Required software and materials depend on the path. Ask admissions for the current cohort list before classes begin.'
    }
  });

  const categories = [
    { id: 'software', ar: 'أكاديمية البرمجيات وتطوير التطبيقات', en: 'Software & Application Development', icon: 'fa-code', color: '#4b8261', bg: 'linear-gradient(135deg,#e0eee0,#f1f1df)' },
    { id: 'data', ar: 'علوم الحاسوب والبيانات والذكاء الاصطناعي', en: 'Computer Science, Data & AI', icon: 'fa-brain', color: '#6573a8', bg: 'linear-gradient(135deg,#e3e5f4,#f4ebdc)' },
    { id: 'systems', ar: 'الأنظمة والتصميم والإدارة', en: 'Systems, design & management', icon: 'fa-compass-drafting', color: '#a56b44', bg: 'linear-gradient(135deg,#f1e4d7,#e8ebdc)' },
    { id: 'modern', ar: 'التقنيات الحديثة والصيانة', en: 'Emerging tech & repair', icon: 'fa-microchip', color: '#43828a', bg: 'linear-gradient(135deg,#dcedeb,#e9eedf)' },
    { id: 'languages', ar: 'أكاديمية اللغات', en: 'Language Academy', icon: 'fa-language', color: '#9c6687', bg: 'linear-gradient(135deg,#f1e1e9,#f2ebd9)' },
    { id: 'craft', ar: 'المهارات الحرفية والتراثية', en: 'Craft & heritage skills', icon: 'fa-hands', color: '#b77b3a', bg: 'linear-gradient(135deg,#f3e6ce,#ecdfd1)' }
  ];

  const academyImages = {
    software: { generated: '/manus-storage/async-images/0CoOtQSPqie5c3jD8rabTw/image-1.webp', fallback: './assets/academy-software.svg' },
    data: { generated: '/manus-storage/async-images/0CoOtQSPqie5c3jD8rabTw/image-2.webp', fallback: './assets/academy-data-ai.svg' },
    systems: { generated: '/manus-storage/async-images/0CoOtQSPqie5c3jD8rabTw/image-3.webp', fallback: './assets/academy-systems.svg' },
    modern: { generated: '/manus-storage/async-images/0CoOtQSPqie5c3jD8rabTw/image-4.webp', fallback: './assets/academy-modern-tech.svg' },
    languages: { generated: '/manus-storage/async-images/0CoOtQSPqie5c3jD8rabTw/image-5.webp', fallback: './assets/academy-languages.svg' },
    craft: { generated: '/manus-storage/async-images/8K1su2hZYnRg22bynqYgXZ/image-1.webp', fallback: './assets/academy-craft.svg' }
  };

  const courses = [
    { id:'frontend', cat:'software', icon:'fa-laptop-code', code:'WEB / 01', ar:'تطوير واجهات الويب', en:'Web Frontend Development', descAr:'حوّل التصميم إلى واجهات ويب سريعة ومتجاوبة.', descEn:'Turn thoughtful designs into responsive, fast web interfaces.', learnAr:['أساسيات HTML وCSS وJavaScript','بناء واجهات متجاوبة ومكوّنات قابلة لإعادة الاستخدام','تجربة التصميم على أجهزة وشاشات مختلفة'], learnEn:['HTML, CSS and JavaScript foundations','Build responsive interfaces and reusable components','Test designs across devices and screen sizes'], jobsAr:['مطور واجهات ويب','منفذ صفحات ومواقع تفاعلية'], jobsEn:['Frontend developer','Interactive website builder'] },
    { id:'fullstack', cat:'software', icon:'fa-layer-group', code:'WEB / 02', ar:'تطوير Full Stack', en:'Full Stack Development', descAr:'ابنِ تطبيق ويب من الواجهة حتى منطق الخادم.', descEn:'Build a web application from interface to server logic.', learnAr:['تصميم واجهات وواجهات برمجية','ربط البيانات بالواجهة وإدارة الجلسات','تنظيم تطبيق متكامل ونشره'], learnEn:['Design interfaces and APIs','Connect data to interfaces and manage sessions','Structure and deploy a complete app'], jobsAr:['مطور Full Stack مبتدئ','مساعد تطوير تطبيقات ويب'], jobsEn:['Junior full-stack developer','Web application developer'] },
    { id:'mobile', cat:'software', icon:'fa-mobile-screen-button', code:'APP / 03', ar:'تطوير تطبيقات الموبايل', en:'Mobile App Development', descAr:'تعرّف إلى بناء تجارب تطبيقات تناسب الهاتف.', descEn:'Learn to build useful experiences made for mobile.', learnAr:['تخطيط شاشات الهاتف وتدفق الاستخدام','بناء الواجهات وربطها بالبيانات','اختبار التطبيق وتجهيزه للإصدار'], learnEn:['Plan mobile screens and user flows','Build interfaces and connect data','Test and prepare an app for release'], jobsAr:['مطور تطبيقات موبايل مبتدئ','مساعد فرق المنتجات الرقمية'], jobsEn:['Junior mobile developer','Digital product assistant'] },
    { id:'desktop', cat:'software', icon:'fa-window-maximize', code:'APP / 04', ar:'تطوير تطبيقات سطح المكتب', en:'Desktop App Development', descAr:'طوّر أدوات عملية تعمل على أجهزة الحاسوب.', descEn:'Create practical tools that run on desktop computers.', learnAr:['أساسيات تصميم واجهات سطح المكتب','إدارة الملفات والمدخلات','إنشاء تطبيق قابل للاستخدام والتوزيع'], learnEn:['Desktop interface foundations','Handle files and user input','Create a usable, distributable application'], jobsAr:['مطور تطبيقات مكتبية مبتدئ','مساعد دعم تقني'], jobsEn:['Junior desktop developer','Technical support assistant'] },
    { id:'games', cat:'software', icon:'fa-gamepad', code:'PLAY / 05', ar:'تطوير الألعاب', en:'Game Development', descAr:'ابدأ من فكرة اللعب إلى نموذج تفاعلي قابل للتجربة.', descEn:'Take a game idea from play concept to a working prototype.', learnAr:['مبادئ تصميم اللعب والمراحل','برمجة الحركة والتفاعل','بناء نموذج أولي واختباره'], learnEn:['Game and level design principles','Program movement and interaction','Build and test a playable prototype'], jobsAr:['مطور ألعاب مبتدئ','مصمم مستويات أو تجارب تفاعلية'], jobsEn:['Junior game developer','Level or interactive experience designer'] },
    { id:'problem-solving', cat:'software', icon:'fa-puzzle-piece', code:'LOGIC / 06', ar:'حل المشكلات البرمجية', en:'Programming Problem Solving', descAr:'درّب تفكيرك المنطقي وطبّقه على تحديات برمجية.', descEn:'Strengthen logical thinking through programming challenges.', learnAr:['تفكيك المسائل إلى خطوات','اختيار هياكل البيانات المناسبة','تحسين الحل وشرح طريقة التفكير'], learnEn:['Break problems into steps','Choose suitable data structures','Improve solutions and explain your reasoning'], jobsAr:['مؤهل للمقابلات التقنية','قاعدة مشتركة لمسارات البرمجة'], jobsEn:['Technical interview preparation','A foundation for programming paths'] },
    { id:'computer-science', cat:'data', icon:'fa-laptop', code:'CORE / 07', ar:'أساسيات علوم الحاسوب', en:'Computer Science Foundations', descAr:'افهم كيف تعمل الحواسيب والبرمجيات من الداخل.', descEn:'Understand how computers and software work under the hood.', learnAr:['الخوارزميات والتفكير الحاسوبي','أنظمة التشغيل والتمثيل الرقمي','مفاهيم الشبكات وقواعد البيانات'], learnEn:['Algorithms and computational thinking','Operating systems and digital representation','Networking and database concepts'], jobsAr:['مسار تمهيدي للتخصصات التقنية','مساعد مختبر أو دعم تقني'], jobsEn:['Foundation for technical specializations','Lab or technical support assistant'] },
    { id:'ai', cat:'data', icon:'fa-wand-magic-sparkles', code:'AI / 08', ar:'مدخل إلى الذكاء الاصطناعي', en:'Artificial Intelligence Foundations', descAr:'تعرّف إلى مفاهيم الذكاء الاصطناعي وتطبيقاته العملية.', descEn:'Explore core AI ideas and practical applications.', learnAr:['مفاهيم تعلم الآلة والبيانات','استخدام أدوات الذكاء الاصطناعي بمسؤولية','تجربة نموذج بسيط وتقييم نتائجه'], learnEn:['Machine learning and data concepts','Use AI tools responsibly','Experiment with a simple model and evaluate results'], jobsAr:['مساعد مشاريع ذكاء اصطناعي','مسار تأسيسي لتحليل البيانات'], jobsEn:['AI project assistant','Foundation for data analysis'] },
    { id:'data-analysis', cat:'data', icon:'fa-chart-line', code:'DATA / 09', ar:'تحليل البيانات', en:'Data Analysis', descAr:'حوّل الجداول والأرقام إلى إجابات مفهومة.', descEn:'Turn tables and numbers into clear, useful answers.', learnAr:['تنظيف البيانات وتنظيمها','التحليل باستخدام الجداول وأدوات مناسبة','استخلاص النتائج وعرضها بصرياً'], learnEn:['Clean and organize datasets','Analyze with spreadsheets and suitable tools','Draw conclusions and present them visually'], jobsAr:['محلل بيانات مبتدئ','مساعد تقارير ومؤشرات'], jobsEn:['Junior data analyst','Reporting and metrics assistant'] },
    { id:'business-intelligence', cat:'data', icon:'fa-chart-pie', code:'BI / 10', ar:'ذكاء الأعمال ولوحات المؤشرات', en:'Business Intelligence & Dashboards', descAr:'صمّم لوحات تساعد الفرق على متابعة الأداء.', descEn:'Build dashboards that help teams understand performance.', learnAr:['تحويل الأسئلة إلى مؤشرات قابلة للقياس','تصميم لوحات وتقارير واضحة','تفسير الاتجاهات ومشاركة النتائج'], learnEn:['Translate questions into useful metrics','Design clear dashboards and reports','Interpret trends and share findings'], jobsAr:['مساعد ذكاء أعمال','معدّ لوحات مؤشرات'], jobsEn:['Business intelligence assistant','Dashboard developer'] },
    { id:'python-data', cat:'data', icon:'fa-brands fa-python', code:'DATA / 11', ar:'بايثون للبيانات', en:'Python for Data', descAr:'استخدم Python لتنظيم البيانات وتحليلها.', descEn:'Use Python to organize and explore data.', learnAr:['أساسيات Python وهياكل البيانات','قراءة الملفات وتنظيف البيانات','أتمتة التحليل وعرض النتائج'], learnEn:['Python fundamentals and data structures','Read files and clean datasets','Automate analysis and present results'], jobsAr:['مساعد تحليل بيانات','مطور نصوص أتمتة'], jobsEn:['Data analysis assistant','Automation scripting assistant'] },
    { id:'sql-databases', cat:'data', icon:'fa-database', code:'DATA / 12', ar:'قواعد البيانات وSQL', en:'Databases & SQL', descAr:'نظّم البيانات واستخرج منها ما تحتاجه بثقة.', descEn:'Organize information and retrieve what you need with confidence.', learnAr:['تصميم الجداول والعلاقات','كتابة استعلامات SQL عملية','التحقق من سلامة البيانات'], learnEn:['Design tables and relationships','Write practical SQL queries','Maintain data integrity'], jobsAr:['مساعد قواعد بيانات','دعم فرق التحليل والتطوير'], jobsEn:['Database assistant','Analytics and development support'] },
    { id:'uiux', cat:'systems', icon:'fa-pen-ruler', code:'DESIGN / 13', ar:'تصميم UI/UX', en:'UI/UX Design', descAr:'صمّم منتجات رقمية سهلة الفهم والاستخدام.', descEn:'Design digital products that feel clear and easy to use.', learnAr:['بحث المستخدم ورسم الرحلات','بناء المخططات والنماذج الأولية','اختبار الاستخدام وتحسين التصميم'], learnEn:['User research and journey mapping','Wireframes and interactive prototypes','Usability testing and design iteration'], jobsAr:['مصمم UI/UX مبتدئ','مساعد أبحاث تجربة المستخدم'], jobsEn:['Junior UI/UX designer','User research assistant'] },
    { id:'networking', cat:'systems', icon:'fa-network-wired', code:'SYS / 14', ar:'الشبكات', en:'Computer Networking', descAr:'افهم أساسيات ربط الأجهزة وإدارة الشبكات.', descEn:'Learn how devices connect and how networks are managed.', learnAr:['مفاهيم الشبكات وعناوين IP','إعداد أجهزة الشبكة ومراقبتها','تشخيص الأعطال الشائعة'], learnEn:['Networking concepts and IP addressing','Configure and monitor network devices','Troubleshoot common issues'], jobsAr:['مساعد شبكات','دعم تقني للمؤسسات'], jobsEn:['Network support assistant','Organization IT support'] },
    { id:'cybersecurity', cat:'systems', icon:'fa-shield-halved', code:'SEC / 15', ar:'الأمن السيبراني', en:'Cybersecurity Foundations', descAr:'تعرّف إلى الممارسات الأساسية لحماية الأنظمة والبيانات.', descEn:'Explore practical foundations for protecting systems and data.', learnAr:['مبادئ السرية والسلامة والتوافر','مخاطر شائعة وطرق الحد منها','ممارسات حماية الحسابات والأجهزة'], learnEn:['Confidentiality, integrity and availability','Common risks and mitigation','Protect accounts and devices'], jobsAr:['مساعد توعية أمنية','مسار تأسيسي للأمن السيبراني'], jobsEn:['Security awareness assistant','Cybersecurity pathway foundation'] },
    { id:'project-management', cat:'systems', icon:'fa-list-check', code:'PLAN / 16', ar:'إدارة المشاريع', en:'Project Management', descAr:'نظّم العمل من تحديد الهدف حتى تسليم النتيجة.', descEn:'Organize work from clear goals through delivery.', learnAr:['تحديد النطاق والمهام والأولويات','متابعة الوقت والمخاطر والتواصل','استخدام أدوات تخطيط عملية'], learnEn:['Define scope, tasks and priorities','Track time, risks and communication','Use practical planning tools'], jobsAr:['مساعد مدير مشروع','منسق فريق أو مهام'], jobsEn:['Project coordinator','Team or delivery assistant'] },
    { id:'university-skills', cat:'systems', icon:'fa-graduation-cap', code:'CAMPUS / 17', ar:'مهارات الطالب الجامعي', en:'University Student Skills', descAr:'ابنِ عادات دراسة وتنظيم تخدم رحلتك الجامعية.', descEn:'Build study and organization habits for university life.', learnAr:['التخطيط للدراسة وإدارة الوقت','البحث والتوثيق والتعلّم الذاتي','العروض والعمل الجماعي'], learnEn:['Study planning and time management','Research, citation and self-learning','Presentations and collaboration'], jobsAr:['مهارات مساندة لكل التخصصات','استعداد أفضل للتدريب والعمل'], jobsEn:['Transferable skills across majors','Preparation for internships and work'] },
    { id:'linux-admin', cat:'systems', icon:'fa-terminal', code:'SYS / 18', ar:'لينكس وإدارة الأنظمة', en:'Linux & Systems Administration', descAr:'تعرّف إلى سطر الأوامر وإدارة الأنظمة الأساسية.', descEn:'Get comfortable with the command line and system administration basics.', learnAr:['التنقل وإدارة الملفات في Linux','المستخدمون والصلاحيات والخدمات','أساسيات المراقبة وحل الأعطال'], learnEn:['Navigate files and commands in Linux','Users, permissions and services','Monitoring and basic troubleshooting'], jobsAr:['مساعد أنظمة','دعم تقني للبنية التحتية'], jobsEn:['Systems assistant','Infrastructure support'] },
    { id:'drones', cat:'modern', icon:'fa-helicopter', code:'TECH / 19', ar:'الدرونز وتطبيقاتها', en:'Drones & Applications', descAr:'استكشف مبادئ الطيران الآمن واستخدامات الدرونز.', descEn:'Explore safe flight principles and drone applications.', learnAr:['مكونات الدرون ومبادئ الطيران','السلامة والتخطيط للرحلات','تطبيقات التصوير والمسح الأولي'], learnEn:['Drone components and flight principles','Safety and flight planning','Imaging and introductory survey applications'], jobsAr:['مساعد تشغيل درونز','دعم مشاريع تصوير ومسح'], jobsEn:['Drone operations assistant','Imaging and survey project support'] },
    { id:'robotics', cat:'modern', icon:'fa-robot', code:'TECH / 20', ar:'الروبوتات والإلكترونيات', en:'Robotics & Electronics', descAr:'اجمع بين الحساسات والدوائر والبرمجة في تجارب عملية.', descEn:'Bring sensors, circuits and code together in hands-on projects.', learnAr:['مبادئ الدوائر والحساسات','التحكم بالمحركات والمخرجات','بناء نموذج روبوتي بسيط'], learnEn:['Circuit and sensor basics','Control motors and outputs','Build a simple robotic prototype'], jobsAr:['مساعد روبوتات تعليمية','دعم النمذجة الإلكترونية'], jobsEn:['Educational robotics assistant','Electronics prototyping support'] },
    { id:'computer-repair', cat:'modern', icon:'fa-screwdriver-wrench', code:'FIX / 21', ar:'صيانة الحاسوب', en:'Computer Maintenance', descAr:'شخّص الأعطال الشائعة واعتنِ بمكوّنات الحاسوب.', descEn:'Diagnose common issues and care for computer components.', learnAr:['التعرّف إلى مكونات الجهاز','التشخيص والصيانة الوقائية','تركيب القطع واختبارها بأمان'], learnEn:['Identify computer components','Diagnose issues and perform preventive care','Install and safely test parts'], jobsAr:['فني صيانة حاسوب مبتدئ','مساعد دعم أجهزة'], jobsEn:['Junior computer repair technician','Hardware support assistant'] },
    { id:'phone-repair', cat:'modern', icon:'fa-mobile-screen', code:'FIX / 22', ar:'صيانة الهواتف', en:'Mobile Phone Maintenance', descAr:'تعرّف إلى خطوات الفحص والصيانة الأساسية للهواتف.', descEn:'Learn practical inspection and maintenance for mobile devices.', learnAr:['أجزاء الهاتف وأدوات الصيانة','الفحص الآمن وتشخيص المشكلات','إجراءات العناية والاختبار بعد الصيانة'], learnEn:['Phone components and repair tools','Safe inspection and issue diagnosis','Care and testing after maintenance'], jobsAr:['مساعد صيانة هواتف','دعم فني للأجهزة المحمولة'], jobsEn:['Mobile repair assistant','Mobile device support'] },
    { id:'software-hardware', cat:'modern', icon:'fa-microchip', code:'TECH / 23', ar:'أساسيات السوفت وير والهاردوير', en:'Software & Hardware Essentials', descAr:'اربط بين مكونات الجهاز والبرامج التي تشغّله.', descEn:'Connect the hardware components to the software that runs them.', learnAr:['العلاقة بين النظام والمكونات','تثبيت البرامج الأساسية والتعريفات','مبادئ ترقية الأجهزة ومعالجة المشكلات'], learnEn:['How systems and components work together','Install core software and drivers','Upgrade basics and troubleshooting'], jobsAr:['مساعد تقني شامل','مركز دعم وصيانة أجهزة'], jobsEn:['General IT assistant','Device support and repair'] },
    { id:'it-support', cat:'modern', icon:'fa-headset', code:'TECH / 24', ar:'الدعم التقني وإدارة الأجهزة', en:'IT Support & Device Administration', descAr:'قدّم دعماً منظماً للمستخدمين والأجهزة والبرامج.', descEn:'Provide structured support for users, devices and software.', learnAr:['استقبال البلاغات وتحديد الأولويات','تشخيص أعطال البرامج والأجهزة','توثيق الحلول والتواصل مع المستخدم'], learnEn:['Handle tickets and prioritize issues','Troubleshoot software and hardware','Document fixes and communicate with users'], jobsAr:['مساعد دعم تقني','منسق خدمات تقنية'], jobsEn:['IT support assistant','Technical service coordinator'] },
    ...[
      { id:'english', ar:'اللغة الإنجليزية', en:'English', code:'LANG / EN', icon:'fa-language' },
      { id:'arabic', ar:'اللغة العربية', en:'Arabic', code:'LANG / AR', icon:'fa-book-open' },
      { id:'french', ar:'اللغة الفرنسية', en:'French', code:'LANG / FR', icon:'fa-language' },
      { id:'german', ar:'اللغة الألمانية', en:'German', code:'LANG / DE', icon:'fa-language' },
      { id:'spanish', ar:'اللغة الإسبانية', en:'Spanish', code:'LANG / ES', icon:'fa-language' },
      { id:'chinese', ar:'اللغة الصينية', en:'Chinese', code:'LANG / ZH', icon:'fa-language' },
      { id:'japanese', ar:'اللغة اليابانية', en:'Japanese', code:'LANG / JA', icon:'fa-language' }
    ].map((language) => ({
      id: language.id, cat:'languages', icon: language.icon, code: language.code, ar:language.ar, en:language.en,
      descAr:'تعلّم اللغة بمراحل متدرجة من A1 إلى C2، مع تدريب على التواصل والفهم.',
      descEn:`Build ${language.en} skills through progressive A1–C2 levels, with practice in communication and comprehension.`,
      learnAr:['مفردات وتراكيب مناسبة للمستوى','استماع ومحادثة وقراءة وكتابة','تطبيقات تواصل ومواقف من الحياة اليومية'],
      learnEn:['Vocabulary and grammar for your level','Listening, speaking, reading and writing','Practice for everyday communication'],
      jobsAr:['تواصل ودراسة وسفر','مساندة للأعمال متعددة اللغات'],
      jobsEn:['Communication, study and travel','Support for multilingual work']
    })),
    { id:'sudanese-tobe', cat:'craft', icon:'fa-scissors', code:'CRAFT / 32', ar:'صناعة الثوب السوداني', en:'Sudanese Tobe Craft', descAr:'تعرّف إلى تفاصيل اختيار القماش ولفّ الثوب وتنسيقه.', descEn:'Explore fabric selection, draping and styling of the Sudanese tobe.', learnAr:['التعرّف إلى الخامات والألوان','أساسيات اللف والتنسيق والعناية','تجربة عملية تراعي الذوق والتراث'], learnEn:['Explore fabric, color and material choices','Draping, styling and care basics','Practice that respects craft and heritage'], jobsAr:['خدمات تنسيق أزياء تراثية','مشاريع حرفية وتصميمية'], jobsEn:['Heritage styling services','Craft and design projects'] },
    { id:'baking', cat:'craft', icon:'fa-bread-slice', code:'CRAFT / 33', ar:'المخبوزات والمعجنات', en:'Baking & Pastry', descAr:'تدرّب على تحضير مخبوزات ومعجنات بخطوات منظمة.', descEn:'Practice preparing baked goods and pastries with clear methods.', learnAr:['التعرّف إلى المكونات والقياس','تحضير العجين والتخمير والخبز','التشطيب والتقديم وسلامة المطبخ'], learnEn:['Ingredients and accurate measurement','Dough preparation, proofing and baking','Finishing, presentation and kitchen safety'], jobsAr:['إنتاج منزلي للمخبوزات','مساعد مخبز أو مشروع صغير'], jobsEn:['Home baking and small-batch production','Bakery assistant or small business'] }
  ];

  const faqButtons = {
    payment: { ar: text.ar.faqPayment, en: text.en.faqPayment },
    fees: { ar: text.ar.faqFees, en: text.en.faqFees },
    mode: { ar: text.ar.faqMode, en: text.en.faqMode },
    duration: { ar: text.ar.faqDuration, en: text.en.faqDuration },
    requirements: { ar: text.ar.faqRequirements, en: text.en.faqRequirements },
    beginner: { ar: text.ar.faqBeginner, en: text.en.faqBeginner },
    certificate: { ar: text.ar.faqCertificate, en: text.en.faqCertificate },
    schedule: { ar: text.ar.faqSchedule, en: text.en.faqSchedule },
    registration: { ar: text.ar.faqRegistration, en: text.en.faqRegistration }
  };
  const faqKeywords = {
    payment: ['الدفع', 'طريقة الدفع', 'طرق الدفع', 'payment', 'pay by'],
    fees: ['رسوم', 'سعر', 'اسعار', 'الأسعار', 'تكلفة', 'كم يكلف', 'fee', 'price', 'cost'],
    duration: ['مدة', 'كم ساعة', 'ساعات', 'زمن الدورة', 'duration', 'how long', 'hours'],
    schedule: ['موعد', 'مواعيد', 'الدفعة', 'الجدول', 'schedule', 'cohort', 'start date'],
    mode: ['اونلاين', 'أونلاين', 'عن بعد', 'حضوري', 'حضور', 'online', 'in person', 'attendance'],
    beginner: ['مبتدئ', 'مبتدئاً', 'من الصفر', 'بدون خبرة', 'beginner', 'no experience'],
    requirements: ['متطلبات', 'شروط', 'احتاج', 'أحتاج', 'مطلوب', 'requirement', 'prerequisite'],
    certificate: ['شهادة', 'شهادات', 'certificate', 'certification'],
    registration: ['تسجيل', 'اسجل', 'أسجل', 'التسجيل', 'register', 'enroll', 'enrol', 'apply'],
    materials: ['ادوات', 'أدوات', 'برامج', 'برنامج', 'المواد', 'materials', 'software', 'equipment']
  };

  let currentLanguage = localStorage.getItem(STORAGE_LANGUAGE) === 'en' ? 'en' : 'ar';
  let currentTheme = localStorage.getItem(STORAGE_THEME) === 'dark' ? 'dark' : 'light';
  let activeCategory = 'all';
  let deferredInstallPrompt = null;
  let toastTimer = null;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const translate = (key) => text[currentLanguage][key] ?? key;
  const categoryById = (id) => categories.find((category) => category.id === id);
  const localized = (record, key) => record[`${key}${currentLanguage === 'ar' ? 'Ar' : 'En'}`];

  function applyLanguage() {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (text[currentLanguage][key] !== undefined) element.textContent = text[currentLanguage][key];
    });
    $$('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (text[currentLanguage][key] !== undefined) element.placeholder = text[currentLanguage][key];
    });
    $$('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (text[currentLanguage][key] !== undefined) element.alt = text[currentLanguage][key];
    });
    $$('[data-i18n-aria-label]').forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (text[currentLanguage][key] !== undefined) element.setAttribute('aria-label', text[currentLanguage][key]);
    });
    const languageButton = $('#language-toggle');
    languageButton.textContent = currentLanguage === 'ar' ? 'EN' : 'عربي';
    languageButton.setAttribute('aria-label', translate('languageLabel'));
    const menuToggle = $('#menu-toggle');
    menuToggle.setAttribute('aria-label', translate(menuToggle.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen'));
    updateThemeButton();
    renderFilters();
    renderCourses();
    populateCourseOptions($('#registration-course').value);
    populateLevelOptions($('#registration-level').value);
    $$('.quick-questions button[data-faq]').forEach((button) => {
      const entry = faqButtons[button.dataset.faq];
      if (entry) button.textContent = entry[currentLanguage];
    });
    document.title = currentLanguage === 'ar' ? 'نَوّى للتقنية والمهارات | Nawa Tech & Skills' : 'Nawa Tech & Skills';
    localStorage.setItem(STORAGE_LANGUAGE, currentLanguage);
  }

  function updateThemeButton() {
    document.documentElement.dataset.theme = currentTheme;
    const button = $('#theme-toggle');
    button.innerHTML = currentTheme === 'dark'
      ? '<i class="fa-regular fa-sun" aria-hidden="true"></i>'
      : '<i class="fa-regular fa-moon" aria-hidden="true"></i>';
    button.setAttribute('aria-label', currentTheme === 'dark' ? translate('themeLight') : translate('themeDark'));
    document.querySelector('meta[name="theme-color"]').content = currentTheme === 'dark' ? '#0e1b15' : '#143c30';
  }

  function renderFilters() {
    const wrapper = $('#academy-filters');
    wrapper.replaceChildren();
    const options = [{ id: 'all', label: translate('allCourses'), icon: 'fa-grip' }, ...categories.map((category) => ({ id: category.id, label: category[currentLanguage], icon: category.icon }))];
    options.forEach((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = activeCategory === option.id ? 'is-active' : '';
      button.setAttribute('aria-pressed', String(activeCategory === option.id));
      button.dataset.category = option.id;
      button.innerHTML = `<i class="fa-solid ${option.icon}" aria-hidden="true"></i> ${option.label}`;
      button.addEventListener('click', () => {
        activeCategory = option.id;
        renderFilters();
        renderCourses();
      });
      wrapper.append(button);
    });
  }

  function makeList(title, values) {
    const section = document.createElement('div');
    section.className = 'detail-column';
    const heading = document.createElement('h4');
    heading.textContent = title;
    const list = document.createElement('ul');
    values.forEach((value) => {
      const item = document.createElement('li');
      item.textContent = value;
      list.append(item);
    });
    section.append(heading, list);
    return section;
  }

  function buildCourseCard(course, index) {
    const category = categoryById(course.cat);
    const card = document.createElement('article');
    card.className = 'course-card';
    card.style.setProperty('--course-accent', category.color);
    card.style.setProperty('--course-bg', category.bg);
    card.style.animationDelay = `${Math.min(index * 25, 150)}ms`;

    const visual = document.createElement('div');
    visual.className = 'course-visual';
    visual.setAttribute('aria-hidden', 'true');
    const courseImage = document.createElement('img');
    courseImage.className = 'course-image';
    courseImage.alt = '';
    courseImage.loading = 'lazy';
    courseImage.decoding = 'async';
    const imageAsset = academyImages[course.cat];
    courseImage.addEventListener('error', () => {
      if (courseImage.dataset.fallbackApplied === 'true') {
        courseImage.remove();
        visual.classList.add('course-visual-fallback');
        return;
      }
      courseImage.dataset.fallbackApplied = 'true';
      courseImage.src = imageAsset.fallback;
    });
    if (location.protocol === 'file:' || location.hostname.endsWith('github.io')) {
      courseImage.dataset.fallbackApplied = 'true';
      courseImage.src = imageAsset.fallback;
    } else {
      courseImage.src = imageAsset.generated;
    }
    const code = document.createElement('span');
    code.className = 'visual-code';
    code.textContent = course.code;
    const icon = document.createElement('span');
    icon.className = 'visual-icon';
    icon.innerHTML = `<i class="${course.icon.startsWith('fa-brands') ? course.icon : `fa-solid ${course.icon}`}" aria-hidden="true"></i>`;
    const visualLabel = document.createElement('span');
    visualLabel.className = 'visual-label';
    visualLabel.textContent = currentLanguage === 'ar' ? 'NAWA / SKILLS' : 'NAWA / SKILLS';
    visual.append(courseImage, code, icon, visualLabel);

    const body = document.createElement('div');
    body.className = 'course-body';
    const categoryLabel = document.createElement('span');
    categoryLabel.className = 'course-category';
    categoryLabel.innerHTML = `<i class="fa-solid ${category.icon}" aria-hidden="true"></i> ${category[currentLanguage]}`;
    const title = document.createElement('h3');
    title.textContent = course[currentLanguage];
    const description = document.createElement('p');
    description.className = 'course-description';
    description.textContent = localized(course, 'desc');
    const meta = document.createElement('div');
    meta.className = 'course-meta';
    const levelHint = document.createElement('span');
    levelHint.className = 'level-hint';
    levelHint.innerHTML = `<i class="fa-solid fa-layer-group" aria-hidden="true"></i> ${currentLanguage === 'ar' ? '3 مستويات' : '3 levels'}`;
    meta.append(levelHint);

    const details = document.createElement('details');
    details.className = 'course-detail';
    const summary = document.createElement('summary');
    summary.textContent = translate('details');
    const detailContent = document.createElement('div');
    detailContent.className = 'course-detail-content';
    detailContent.append(
      makeList(translate('learnLabel'), localized(course, 'learn')),
      makeList(translate('jobsLabel'), localized(course, 'jobs'))
    );
    const levelList = document.createElement('div');
    levelList.className = 'course-levels';
    const levelTitle = document.createElement('h4');
    levelTitle.className = 'sr-only';
    levelTitle.textContent = translate('levelsLabel');
    levelList.append(levelTitle);
    ['beginner', 'intermediate', 'advanced'].forEach((key) => {
      const tag = document.createElement('span');
      tag.textContent = translate(key);
      levelList.append(tag);
    });
    const registerButton = document.createElement('button');
    registerButton.type = 'button';
    registerButton.className = 'button button-primary course-register';
    registerButton.innerHTML = `<i class="fa-brands fa-whatsapp" aria-hidden="true"></i><span>${translate('enroll')}</span>`;
    registerButton.addEventListener('click', () => openRegistration(course.id));
    detailContent.append(levelList, registerButton);
    details.append(summary, detailContent);

    const quickRegister = document.createElement('button');
    quickRegister.type = 'button';
    quickRegister.className = 'button button-quiet course-register';
    quickRegister.textContent = translate('enroll');
    quickRegister.addEventListener('click', () => openRegistration(course.id));
    body.append(categoryLabel, title, description, meta, details, quickRegister);
    card.append(visual, body);
    return card;
  }

  function renderCourses() {
    const query = $('#course-search').value.trim().toLocaleLowerCase(currentLanguage === 'ar' ? 'ar' : 'en');
    const visible = courses.filter((course) => {
      const category = categoryById(course.cat);
      const matchesCategory = activeCategory === 'all' || course.cat === activeCategory;
      const searchable = [course.ar, course.en, course.descAr, course.descEn, category.ar, category.en].join(' ').toLocaleLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
    const grid = $('#course-grid');
    grid.replaceChildren(...visible.map(buildCourseCard));
    $('#course-count').textContent = String(visible.length);
    $('#empty-state').hidden = visible.length !== 0;
    grid.hidden = visible.length === 0;
  }

  function populateCourseOptions(selected = '') {
    const select = $('#registration-course');
    const previous = selected || select.value;
    select.replaceChildren();
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = !previous;
    placeholder.textContent = currentLanguage === 'ar' ? 'اختر المسار' : 'Choose a path';
    select.append(placeholder);
    categories.forEach((category) => {
      const group = document.createElement('optgroup');
      group.label = category[currentLanguage];
      courses.filter((course) => course.cat === category.id).forEach((course) => {
        const option = document.createElement('option');
        option.value = course.id;
        option.textContent = course[currentLanguage];
        group.append(option);
      });
      select.append(group);
    });
    if (previous && courses.some((course) => course.id === previous)) select.value = previous;
  }

  function populateLevelOptions(selected = '') {
    const select = $('#registration-level');
    const previous = selected || select.value;
    const keys = ['beginner', 'intermediate', 'advanced'];
    select.replaceChildren(...keys.map((key) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = translate(key);
      return option;
    }));
    select.value = keys.includes(previous) ? previous : 'beginner';
  }

  function openRegistration(courseId = '') {
    populateCourseOptions(courseId || $('#registration-course').value);
    populateLevelOptions($('#registration-level').value || 'beginner');
    $('#registration-dialog').showModal();
  }

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3600);
  }

  function showNotice(message) {
    $('#notice-message').textContent = message;
    $('#notice-dialog').showModal();
  }

  function whatsAppUrl(message) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function appendChatMessage(message, type, contactQuestion = '') {
    const container = $('#chat-messages');
    const bubble = document.createElement('div');
    bubble.className = `chat-message ${type === 'user' ? 'user-message' : 'assistant-message'}`;
    const label = document.createElement('span');
    label.className = 'message-label';
    label.textContent = type === 'user' ? (currentLanguage === 'ar' ? 'أنت' : 'You') : translate('assistantName');
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    const time = document.createElement('time');
    time.textContent = translate('justNow');
    bubble.append(label, paragraph, time);
    if (type === 'assistant' && contactQuestion) {
      const contact = document.createElement('a');
      contact.className = 'message-action';
      contact.href = whatsAppUrl(`${translate('chatPrompt')}\n\n${contactQuestion}`);
      contact.target = '_blank';
      contact.rel = 'noopener noreferrer';
      contact.innerHTML = `<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>`;
      contact.append(document.createTextNode(translate('chatTeamLink')));
      bubble.append(contact);
    }
    container.append(bubble);
    container.scrollTop = container.scrollHeight;
  }

  function answerFaq(questionId) {
    const entry = faqButtons[questionId];
    if (!entry) return;
    appendChatMessage(entry[currentLanguage], 'user');
    window.setTimeout(() => appendChatMessage(text[currentLanguage].faqAnswers[questionId], 'assistant'), 230);
  }

  function matchFaqQuestion(question) {
    const normalized = String(question).toLocaleLowerCase().normalize('NFKC').replace(/[\u064b-\u065f\u0670\u0640]/g, '').replace(/\s+/g, ' ').trim();
    return Object.entries(faqKeywords).find(([, keywords]) => keywords.some((keyword) => normalized.includes(keyword.toLocaleLowerCase())))?.[0] || '';
  }

  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(STORAGE_THEME, theme);
    updateThemeButton();
  }

  $('#language-toggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    applyLanguage();
  });

  $('#theme-toggle').addEventListener('click', () => setTheme(currentTheme === 'light' ? 'dark' : 'light'));

  const menuToggle = $('#menu-toggle');
  const nav = $('#primary-nav');
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.innerHTML = open ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>' : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    menuToggle.setAttribute('aria-label', translate(open ? 'menuClose' : 'menuOpen'));
    nav.classList.toggle('is-open', open);
  });
  $$('#primary-nav a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    menuToggle.setAttribute('aria-label', translate('menuOpen'));
    nav.classList.remove('is-open');
  }));

  $$('[data-open-registration]').forEach((button) => button.addEventListener('click', () => openRegistration()));
  $$('[data-open-project]').forEach((button) => button.addEventListener('click', () => $('#project-dialog').showModal()));
  $$('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
  $$('.quick-questions [data-faq]').forEach((button) => button.addEventListener('click', () => answerFaq(button.dataset.faq)));
  $('#chat-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = $('#chat-input');
    const question = input.value.trim();
    if (!question) return;
    appendChatMessage(question, 'user');
    input.value = '';
    const answerKey = matchFaqQuestion(question);
    window.setTimeout(() => {
      if (answerKey) appendChatMessage(text[currentLanguage].faqAnswers[answerKey], 'assistant');
      else appendChatMessage(translate('chatUnknown'), 'assistant', question);
    }, 260);
  });
  $('#course-search').addEventListener('input', renderCourses);
  $('#registration-course').addEventListener('change', () => populateLevelOptions('beginner'));

  $('#registration-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const course = courses.find((item) => item.id === values.get('course'));
    const level = translate(values.get('level'));
    const attendance = values.get('attendance') === 'online' ? translate('attendanceOnline') : translate('attendanceInPerson');
    const message = [
      text[currentLanguage].waIntro,
      '',
      `${text[currentLanguage].waName}: ${values.get('fullName').trim()}`,
      `${text[currentLanguage].waPhone}: ${values.get('phone').trim()}`,
      `${text[currentLanguage].waCourse}: ${course ? course[currentLanguage] : ''}`,
      `${text[currentLanguage].waLevel}: ${level}`,
      `${text[currentLanguage].waAttendance}: ${attendance}`,
      '',
      text[currentLanguage].waClosing
    ].join('\n');
    const destination = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(destination, '_blank', 'noopener,noreferrer');
    $('#registration-dialog').close();
    showToast(currentLanguage === 'ar' ? 'تم تجهيز رسالة التسجيل في واتساب.' : 'Your registration message is ready in WhatsApp.');
  });

  $('#project-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const projectTypes = { website: 'projectTypeWebsite', app: 'projectTypeApp', system: 'projectTypeSystem' };
    const email = String(values.get('email') || '').trim();
    const message = [
      text[currentLanguage].projectWaIntro,
      '',
      `${translate('projectWaName')}: ${String(values.get('name')).trim()}`,
      `${translate('projectWaPhone')}: ${String(values.get('phone')).trim()}`,
      ...(email ? [`${translate('projectWaEmail')}: ${email}`] : []),
      `${translate('projectWaType')}: ${translate(projectTypes[values.get('projectType')])}`,
      `${translate('projectWaBrief')}: ${String(values.get('description')).trim()}`,
      '',
      text[currentLanguage].projectWaClosing
    ].join('\n');
    window.open(whatsAppUrl(message), '_blank', 'noopener,noreferrer');
    $('#project-dialog').close();
    form.reset();
    showToast(translate('projectSent'));
  });

  $('#install-button').addEventListener('click', async () => {
    if (!deferredInstallPrompt) {
      showNotice(translate('installHelp'));
      return;
    }
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (choice.outcome === 'accepted') showToast(translate('installed'));
  });
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $('#install-button').classList.add('is-install-ready');
  });
  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    showToast(translate('installed'));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      $('#course-search').focus();
    }
  });

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }

  const heroImage = $('#hero-image');
  const developerAvatar = $('.developer-avatar-image');
  if (!location.hostname.endsWith('github.io') && location.protocol !== 'file:') {
    developerAvatar.addEventListener('error', () => {
      developerAvatar.src = developerAvatar.dataset.fallbackSrc;
    }, { once: true });
    developerAvatar.src = developerAvatar.dataset.generatedSrc;
  }
  if (!location.hostname.endsWith('github.io') && location.protocol !== 'file:') {
    heroImage.addEventListener('error', () => {
      heroImage.src = './assets/nawa-hero.svg';
    }, { once: true });
    heroImage.src = generatedHeroAsset;
  }

  applyLanguage();
  populateCourseOptions();
  populateLevelOptions();
})();
