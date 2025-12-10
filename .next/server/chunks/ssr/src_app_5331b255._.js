module.exports = {

"[project]/src/app/data/rates.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "cities": ()=>cities,
    "rates": ()=>rates,
    "services": ()=>services
});
const cities = [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Edmonton",
    "Ottawa",
    "Winnipeg",
    "Quebec City",
    "Hamilton",
    "London"
];
const services = [
    "Appliance Installation & Repairs",
    "Arts / Crafts",
    "Automotive",
    "Babyproofing",
    "Cleaning",
    "Cooking",
    "Delivery",
    "Dog Walking",
    "Electrical",
    "Event Planning",
    "Furniture Assembly",
    "Gardening",
    "Handyman",
    "Home Organization",
    "Interior Painting",
    "Lawn Care",
    "Moving Help",
    "Pet Sitting",
    "Photography",
    "Plumbing",
    "Tutoring",
    "Web Development"
];
const rates = [
    "Appliance Installation & Repairs",
    "Arts / Crafts",
    "Automotive",
    "Babyproofing"
];
}),
"[project]/src/app/components/dashboard/ProfileDetails.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ProfileDetails
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$watch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Watch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/watch.js [app-ssr] (ecmascript) <export default as Watch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-image-crop/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$rates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/rates.js [app-ssr] (ecmascript)"); // ✅ NEW: Cities array
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$ServicesLinks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/ServicesLinks.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function ProfileDetails() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [originalProfile, setOriginalProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedSkill, setSelectedSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentRate, setCurrentRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [availableSkills, setAvailableSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Crop states for profile picture
    const [upImg, setUpImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [completedCrop, setCompletedCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ID image states
    const [idUpImg, setIdUpImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [idCrop, setIdCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [idCompletedCrop, setIdCompletedCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [idPreviewUrl, setIdPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const idImgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Helper: enrich data
    // Helper: enrich data
    const enrichProfileData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((userData)=>{
        const cityData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$rates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rates"].find((r)=>r.city === userData.city);
        const skillsWithRates = userData?.skills?.map((skill)=>{
            // 🧩 Case 1: purana data (array of strings)
            if (typeof skill === 'string') {
                const skillRate = cityData?.services?.[skill] || 0;
                return {
                    name: skill,
                    rate: skillRate
                };
            }
            // 🧩 Case 2: naya data (array of objects)
            if (skill && typeof skill === 'object') {
                const skillName = skill.name || skill.skillName;
                const skillRate = typeof skill.rate === 'number' ? skill.rate : cityData?.services?.[skillName] || 0;
                return {
                    name: skillName,
                    rate: skillRate
                };
            }
            return null;
        }) || [];
        return {
            ...userData,
            skills: skillsWithRates.filter(Boolean),
            bio: userData.bio || '',
            profileImage: userData.profileImage || '/d_avatar.png',
            identityVerification: userData.identityVerification || {},
            email: userData.email || '',
            contactNumber: userData.contactNumber || '',
            availabilityTiming: userData.availabilityTiming || {
                startWork: 'today',
                preferredTime: [
                    'morning',
                    'afternoon',
                    'evening'
                ],
                availableDays: [
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday'
                ]
            },
            workingHours: userData.workingHours || {
                hoursPerDay: 8,
                daysPerWeek: 5,
                totalHoursPerWeek: 40
            }
        };
    }, []);
    // Load profile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadProfile() {
            try {
                const res = await fetch('/api/dashboard/profile');
                const data = await res.json();
                /* eslint-disable */ console.log(...oo_oo(`2709879347_116_8_116_52_4`, '🔍 Loaded profile data:', data));
                const enriched = enrichProfileData(data.user);
                setProfile(enriched);
                setOriginalProfile(enriched);
                setSelectedCity(data.user.city || '');
                // Set previews if exist
                if (data.user.profileImage) {
                    setPreviewUrl(data.user.profileImage);
                }
                if (data.user.identityVerification?.idImageFront) {
                    setIdPreviewUrl(data.user.identityVerification.idImageFront);
                }
            } catch (err) {
                /* eslint-disable */ console.error(...oo_tx(`2709879347_130_8_130_52_11`, 'Error loading profile:', err));
            }
        }
        if (session?.user?.id) loadProfile();
    }, [
        session,
        enrichProfileData
    ]);
    // Update available skills when city changes
    // Jab city change ho, tab hi skills ke rates aur profile.city update karo
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!profile || !selectedCity) return;
        const cityData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$rates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rates"].find((r)=>r.city === selectedCity);
        setProfile((prev)=>({
                ...prev,
                city: selectedCity,
                skills: (prev.skills || []).map((skill)=>({
                        ...skill,
                        rate: cityData?.services?.[skill.name] || 0
                    }))
            }));
    }, [
        selectedCity
    ]); // 👈 Yahan se profile hata diya
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedCity || !profile) {
            setAvailableSkills([]);
            setCurrentRate(null);
            return;
        }
        const cityData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$rates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rates"].find((r)=>r.city === selectedCity);
        const services = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$ServicesLinks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].flatMap((service)=>(service.subServices || []).map((sub)=>sub.name));
        const userSkillNames = (profile.skills || []).map((s)=>s.name);
        if (cityData) {
            const availableInCity = Object.keys(cityData.services);
            const skills = availableInCity.filter((s)=>!userSkillNames.includes(s));
            setAvailableSkills(skills);
        } else {
            // Agar city ki rates defined nahi, to saare services dikhao (rate 0)
            const skills = services.filter((s)=>!userSkillNames.includes(s));
            setAvailableSkills(skills);
        }
    }, [
        selectedCity,
        profile?.skills
    ]); // 👈 ab sirf skills ka slice observe kar rahe
    // Update rate when skill is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedCity && selectedSkill) {
            const cityData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$rates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rates"].find((r)=>r.city === selectedCity);
            if (cityData && cityData.services[selectedSkill]) {
                setCurrentRate(cityData.services[selectedSkill]);
            } else {
                setCurrentRate(0);
            }
        } else {
            setCurrentRate(null);
        }
    }, [
        selectedSkill,
        selectedCity
    ]);
    // Profile Picture Crop Logic
    const onSelectFile = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', ()=>setUpImg(String(reader.result)));
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    // ID Picture Select Logic
    const onSelectIdFile = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', ()=>setIdUpImg(String(reader.result)));
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const onImageLoad = (e)=>{
        const { width, height } = e.currentTarget;
        setCrop((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["centerCrop"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeAspectCrop"])({
            unit: '%',
            width: 90
        }, 1, width, height), width, height));
    };
    // ID Image Load
    const onIdImageLoad = (e)=>{
        const { width, height } = e.currentTarget;
        setIdCrop((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["centerCrop"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeAspectCrop"])({
            unit: '%',
            width: 90
        }, 1, width, height), width, height));
    };
    const generateCroppedImage = async (image, crop, isIdImage = false)=>{
        if (!crop?.width || !crop?.height) return;
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
        const blob = await new Promise((resolve)=>canvas.toBlob(resolve, 'image/jpeg', 0.9));
        const compressedBlob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(blob, {
            maxSizeMB: 0.5,
            maxWidthOrHeight: 1000,
            useWebWorker: true
        });
        const base64 = await new Promise((resolve)=>{
            const reader = new FileReader();
            reader.readAsDataURL(compressedBlob);
            reader.onloadend = ()=>resolve(reader.result);
        });
        if (isIdImage) {
            setIdPreviewUrl(base64);
            setIdUpImg(null);
            setProfile((prev)=>({
                    ...prev,
                    identityVerification: {
                        ...prev.identityVerification,
                        idImageFront: base64
                    }
                }));
        } else {
            setProfile((prev)=>({
                    ...prev,
                    profileImage: base64
                }));
            setPreviewUrl(base64);
            setUpImg(null);
        }
    };
    // Save function with proper city handling
    const handleSaveChanges = async ()=>{
        try {
            setLoading(true);
            /* eslint-disable */ console.log(...oo_oo(`2709879347_288_6_296_8_4`, '🔍 FRONTEND - Saving profile:', {
                profileCity: profile?.city,
                selectedCity: selectedCity,
                skills: profile?.skills,
                email: profile?.email,
                contactNumber: profile?.contactNumber,
                availabilityTiming: profile?.availabilityTiming,
                workingHours: profile?.workingHours
            }));
            // Prepare payload
            const payload = {
                ...profile,
                // skills: profile.skills.map((s) => s.name),
                city: profile.city,
                email: profile.email,
                contactNumber: profile.contactNumber,
                profileImage: profile.profileImage,
                identityVerification: profile.identityVerification,
                availabilityTiming: profile.availabilityTiming,
                workingHours: profile.workingHours,
                skills: (profile.skills || []).map((s)=>({
                        name: s.name,
                        rate: s.rate ?? 0
                    }))
            };
            /* eslint-disable */ console.log(...oo_oo(`2709879347_315_6_315_60_4`, '🔍 FRONTEND - Sending payload:', payload));
            const res = await fetch('/api/dashboard/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const responseData = await res.json();
            /* eslint-disable */ console.log(...oo_oo(`2709879347_324_6_324_62_4`, '🔍 FRONTEND - API Response:', responseData));
            if (!res.ok) {
                throw new Error(responseData.error || 'Failed to update profile');
            }
            const enriched = enrichProfileData(responseData.user);
            setProfile(enriched);
            setOriginalProfile(enriched);
            setSelectedCity(responseData.user.city || '');
            setIsEditing(false);
            setSuccess(true);
            setTimeout(()=>setSuccess(false), 2500);
        } catch (err) {
            /* eslint-disable */ console.error(...oo_tx(`2709879347_338_6_338_42_11`, '❌ Save failed:', err));
            alert('Failed to save profile. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    const handleCancel = ()=>{
        setProfile(originalProfile);
        setIsEditing(false);
        setSelectedCity(originalProfile.city || '');
        setSelectedSkill('');
        setPreviewUrl(originalProfile.profileImage || '');
        setIdPreviewUrl(originalProfile.identityVerification?.idImageFront || '');
        setUpImg(null);
        setIdUpImg(null);
    };
    const handleAddSkill = ()=>{
        if (!selectedSkill || !selectedCity) return;
        if (currentRate === null || Number.isNaN(currentRate)) {
            alert('Please enter a valid rate for this skill');
            return;
        }
        // Duplicate check
        if (profile.skills?.some((s)=>s.name === selectedSkill)) {
            alert('This skill is already added');
            return;
        }
        const newSkill = {
            name: selectedSkill,
            rate: currentRate ?? 0
        };
        setProfile((prev)=>({
                ...prev,
                skills: [
                    ...prev.skills || [],
                    newSkill
                ]
            }));
        setSelectedSkill('');
        setCurrentRate(null);
    };
    const handleRemoveSkill = (skillName)=>setProfile((prev)=>({
                ...prev,
                skills: prev.skills.filter((s)=>s.name !== skillName)
            }));
    // Availability timing handlers
    const handleTimeToggle = (time)=>{
        const currentTimes = profile.availabilityTiming?.preferredTime || [];
        let newTimes;
        if (currentTimes.includes(time)) {
            newTimes = currentTimes.filter((t)=>t !== time);
        } else {
            newTimes = [
                ...currentTimes,
                time
            ];
        }
        setProfile((prev)=>({
                ...prev,
                availabilityTiming: {
                    ...prev.availabilityTiming,
                    preferredTime: newTimes
                }
            }));
    };
    const handleDayToggle = (day)=>{
        const currentDays = profile.availabilityTiming?.availableDays || [];
        let newDays;
        if (currentDays.includes(day)) {
            newDays = currentDays.filter((d)=>d !== day);
        } else {
            newDays = [
                ...currentDays,
                day
            ];
        }
        setProfile((prev)=>({
                ...prev,
                availabilityTiming: {
                    ...prev.availabilityTiming,
                    availableDays: newDays
                }
            }));
    };
    // Working hours handlers
    const handleWorkingHoursChange = (field, value)=>{
        const numValue = parseInt(value) || 0;
        setProfile((prev)=>({
                ...prev,
                workingHours: {
                    ...prev.workingHours,
                    [field]: numValue
                }
            }));
    };
    // Calculate total hours per week automatically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (profile?.workingHours) {
            const hoursPerDay = profile.workingHours.hoursPerDay || 0;
            const daysPerWeek = profile.workingHours.daysPerWeek || 0;
            const totalHoursPerWeek = hoursPerDay * daysPerWeek;
            setProfile((prev)=>({
                    ...prev,
                    workingHours: {
                        ...prev.workingHours,
                        totalHoursPerWeek: totalHoursPerWeek
                    }
                }));
        }
    }, [
        profile?.workingHours?.hoursPerDay,
        profile?.workingHours?.daysPerWeek
    ]);
    // City dropdown handler
    const handleCityChange = (e)=>{
        const newCity = e.target.value;
        /* eslint-disable */ console.log(...oo_oo(`2709879347_457_4_457_48_4`, '🏙️ City changed to:', newCity));
        setSelectedCity(newCity);
    };
    const totalHourlyRate = profile?.skills.reduce((sum, s)=>sum + (s.rate || 0), 0) || 0;
    if (!profile) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center py-10 text-slate-500",
        children: "Loading profile..."
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
        lineNumber: 466,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    className: "absolute top-0 right-0 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-md flex items-center gap-2 shadow-sm z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                            lineNumber: 480,
                            columnNumber: 13
                        }, this),
                        " Profile updated successfully!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                    lineNumber: 474,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 472,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-800",
                        children: "Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsEditing(true),
                        className: "flex items-center gap-2 px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-md hover:bg-slate-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this),
                            " Edit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCancel,
                                className: "flex items-center gap-2 px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-md hover:bg-slate-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this),
                                    " Cancel"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSaveChanges,
                                disabled: loading,
                                className: `flex items-center gap-2 px-4 py-2 rounded-md text-white bg-slate-800 hover:bg-slate-900 transition ${loading && 'opacity-70 cursor-not-allowed'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    loading ? 'Saving...' : 'Save'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 503,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 496,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-t from-gray-50 to-gray-200 p-6 rounded-lg border border-slate-200 text-center shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-4",
                        children: "Profile Picture"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative inline-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: previewUrl || profile.profileImage || '/d_avatar.png',
                                alt: "Profile",
                                className: "w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full border-8 border-slate-200 shadow-md mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "absolute bottom-0 right-0 bg-slate-800 p-2 rounded-full cursor-pointer hover:bg-slate-600 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        className: "text-white w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        className: "hidden",
                                        onChange: onSelectFile
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this),
                    upImg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg p-6 max-w-md w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Crop Profile Picture"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 544,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    crop: crop,
                                    onChange: (_, percentCrop)=>setCrop(percentCrop),
                                    onComplete: (c)=>setCompletedCrop(c),
                                    aspect: 1,
                                    className: "max-h-96",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        ref: imgRef,
                                        alt: "Crop me",
                                        src: upImg,
                                        onLoad: onImageLoad,
                                        className: "max-w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 554,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 547,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setUpImg(null);
                                                setCrop(undefined);
                                            },
                                            className: "flex-1 px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>generateCroppedImage(imgRef.current, completedCrop, false),
                                            className: "flex-1 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-900",
                                            children: "Apply Crop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                            lineNumber: 543,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 542,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg border border-slate-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-4",
                        children: "Personal Information"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 16,
                                                className: "inline mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 596,
                                                columnNumber: 15
                                            }, this),
                                            "Email Address"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 595,
                                        columnNumber: 13
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: profile.email || '',
                                        onChange: (e)=>setProfile((prev)=>({
                                                    ...prev,
                                                    email: e.target.value
                                                })),
                                        placeholder: "Enter your email",
                                        className: "w-full border border-slate-200 rounded-md p-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 600,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-700 p-2 bg-slate-50 rounded-md",
                                        children: profile.email || 'No email provided'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 610,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 594,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 16,
                                                className: "inline mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 619,
                                                columnNumber: 15
                                            }, this),
                                            "Contact Number"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 618,
                                        columnNumber: 13
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        value: profile.contactNumber || '',
                                        onChange: (e)=>setProfile((prev)=>({
                                                    ...prev,
                                                    contactNumber: e.target.value
                                                })),
                                        placeholder: "Enter your phone number",
                                        className: "w-full border border-slate-200 rounded-md p-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-700 p-2 bg-slate-50 rounded-md",
                                        children: profile.contactNumber || 'No contact number provided'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 617,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg border border-slate-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-4",
                        children: "Bio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this),
                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: profile.bio || '',
                        onChange: (e)=>setProfile((prev)=>({
                                    ...prev,
                                    bio: e.target.value
                                })),
                        placeholder: "Tell us about yourself, your experience, and what makes you great at your work...",
                        className: "w-full border border-slate-200 rounded-md p-3 min-h-[120px] resize-vertical",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 648,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-700 p-3 bg-slate-50 rounded-md min-h-[120px]",
                        children: profile.bio || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 italic",
                            children: "No bio added yet. Click Edit to add a bio."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                            lineNumber: 660,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 658,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 645,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg border border-slate-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-4",
                        children: "Location"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-600 mb-2",
                                children: "Select Your City"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 673,
                                columnNumber: 11
                            }, this),
                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCity,
                                onChange: handleCityChange,
                                className: "w-full border border-slate-200 rounded-md p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "-- Select Your City --"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 682,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$rates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cities"].map((city // ✅ Using cities array
                                    )=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: city,
                                            children: city
                                        }, city, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 687,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 677,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-700 p-2 bg-slate-50 rounded-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: profile.city || 'No city selected'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 695,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 694,
                                        columnNumber: 13
                                    }, this),
                                    profile?.location?.fullAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-700 p-2 rounded-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-xs",
                                            children: profile?.location?.fullAddress || 'No city selected'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 700,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 699,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 672,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Note:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 710,
                                        columnNumber: 13
                                    }, this),
                                    " Your selected city determines the available skills and their rates. You can change your city anytime, and your skill rates will be updated automatically."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 709,
                                columnNumber: 11
                            }, this),
                            isEditing && selectedCity && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$rates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rates"].find((r)=>r.city === selectedCity) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-600 mt-2",
                                children: [
                                    "⚠️ No rates defined for ",
                                    selectedCity,
                                    ". Skills will show $0/hr rate."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 717,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 708,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 669,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-t from-gray-50 to-gray-200 p-6 rounded-lg border border-slate-200 text-center shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-4",
                        children: "Government ID / License"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative inline-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: idPreviewUrl || '/id_placeholder.png',
                                alt: "ID Preview",
                                className: "w-64 h-40 object-contain border-4 border-slate-200 rounded-lg shadow-md bg-white mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this),
                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "absolute bottom-2 right-2 bg-slate-800 p-2 rounded-full cursor-pointer hover:bg-slate-600 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        className: "text-white w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 738,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        className: "hidden",
                                        onChange: onSelectIdFile
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 739,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 737,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 730,
                        columnNumber: 9
                    }, this),
                    idPreviewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-green-600 mt-2",
                        children: "✓ ID image ready to save"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 749,
                        columnNumber: 11
                    }, this),
                    idUpImg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg p-6 max-w-md w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Crop ID Picture"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 758,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    crop: idCrop,
                                    onChange: (_, percentCrop)=>setIdCrop(percentCrop),
                                    onComplete: (c)=>setIdCompletedCrop(c),
                                    aspect: 1,
                                    className: "max-h-96",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        ref: idImgRef,
                                        alt: "Crop ID",
                                        src: idUpImg,
                                        onLoad: onIdImageLoad,
                                        className: "max-w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 766,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 759,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIdUpImg(null);
                                                setIdCrop(undefined);
                                            },
                                            className: "flex-1 px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 775,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>generateCroppedImage(idImgRef.current, idCompletedCrop, true),
                                            className: "flex-1 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-900",
                                            children: "Apply Crop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 784,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 774,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                            lineNumber: 757,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 756,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 726,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg border border-slate-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$watch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Watch$3e$__["Watch"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 805,
                                columnNumber: 11
                            }, this),
                            " Working Hours"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 804,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600 mb-2",
                                        children: "Hours Per Day"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 811,
                                        columnNumber: 13
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: profile.workingHours?.hoursPerDay || 8,
                                        onChange: (e)=>handleWorkingHoursChange('hoursPerDay', e.target.value),
                                        className: "w-full border border-slate-200 rounded-md p-2",
                                        children: [
                                            4,
                                            6,
                                            8,
                                            10,
                                            12
                                        ].map((hours)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: hours,
                                                children: [
                                                    hours,
                                                    " hours"
                                                ]
                                            }, hours, true, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 823,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 815,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-700 p-2 bg-slate-50 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 830,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    profile.workingHours?.hoursPerDay || 8,
                                                    " hours/day"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 831,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 829,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 810,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600 mb-2",
                                        children: "Days Per Week"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 840,
                                        columnNumber: 13
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: profile.workingHours?.daysPerWeek || 5,
                                        onChange: (e)=>handleWorkingHoursChange('daysPerWeek', e.target.value),
                                        className: "w-full border border-slate-200 rounded-md p-2",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6,
                                            7
                                        ].map((days)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: days,
                                                children: [
                                                    days,
                                                    " days"
                                                ]
                                            }, days, true, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 852,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 844,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-700 p-2 bg-slate-50 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 859,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    profile.workingHours?.daysPerWeek || 5,
                                                    " days/week"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 860,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 858,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 839,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600 mb-2",
                                        children: "Total Hours Per Week"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 869,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-700 p-2 bg-blue-50 rounded-md border border-blue-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$watch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Watch$3e$__["Watch"], {
                                                size: 16,
                                                className: "text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 873,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-blue-700",
                                                children: [
                                                    profile.workingHours?.totalHoursPerWeek || 40,
                                                    " hours/week"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 874,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 872,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 mt-1 text-center",
                                        children: "Automatically calculated"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 878,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 868,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 808,
                        columnNumber: 9
                    }, this),
                    !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-3 bg-green-50 border border-green-200 rounded-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-green-700 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Weekly Schedule:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 888,
                                    columnNumber: 15
                                }, this),
                                ' ',
                                profile.workingHours?.hoursPerDay || 8,
                                " hours/day ×",
                                ' ',
                                profile.workingHours?.daysPerWeek || 5,
                                " days =",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        profile.workingHours?.totalHoursPerWeek || 40,
                                        " hours/week"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 891,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                            lineNumber: 887,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 886,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 803,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg border border-slate-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 902,
                                columnNumber: 11
                            }, this),
                            " Availability Timing"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 901,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600 mb-2",
                                        children: "When can you start work?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 908,
                                        columnNumber: 13
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: profile.availabilityTiming?.startWork || 'today',
                                        onChange: (e)=>setProfile((prev)=>({
                                                    ...prev,
                                                    availabilityTiming: {
                                                        ...prev.availabilityTiming,
                                                        startWork: e.target.value
                                                    }
                                                })),
                                        className: "w-full border border-slate-200 rounded-md p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "today",
                                                children: "Today"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 925,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "tomorrow",
                                                children: "Tomorrow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 926,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "in_one_week",
                                                children: "In One Week"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 927,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 912,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-700 p-2 bg-slate-50 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 931,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "capitalize font-medium",
                                                children: profile.availabilityTiming?.startWork === 'in_one_week' ? 'In One Week' : profile.availabilityTiming?.startWork || 'Today'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 932,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 930,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 907,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600 mb-2",
                                        children: "Preferred Time Slots"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 943,
                                        columnNumber: 13
                                    }, this),
                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            'morning',
                                            'afternoon',
                                            'evening'
                                        ].map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: profile.availabilityTiming?.preferredTime?.includes(time) || false,
                                                        onChange: ()=>handleTimeToggle(time),
                                                        className: "rounded border-slate-300 text-slate-800 focus:ring-slate-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                        lineNumber: 953,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "capitalize text-slate-700",
                                                        children: time
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                        lineNumber: 963,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, time, true, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 949,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 947,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            profile.availabilityTiming?.preferredTime?.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize",
                                                    children: time
                                                }, time, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                    lineNumber: 970,
                                                    columnNumber: 19
                                                }, this)),
                                            (!profile.availabilityTiming?.preferredTime || profile.availabilityTiming.preferredTime.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500 text-sm",
                                                children: "No preferred times set"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 979,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 968,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 942,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 905,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-600 mb-2",
                                children: "Available Days"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 990,
                                columnNumber: 11
                            }, this),
                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                children: [
                                    'monday',
                                    'tuesday',
                                    'wednesday',
                                    'thursday',
                                    'friday',
                                    'saturday',
                                    'sunday'
                                ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: profile.availabilityTiming?.availableDays?.includes(day) || false,
                                                onChange: ()=>handleDayToggle(day),
                                                className: "rounded border-slate-300 text-slate-800 focus:ring-slate-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 1008,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "capitalize text-slate-700 text-sm",
                                                children: day.slice(0, 3)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                lineNumber: 1018,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, day, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 1004,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 994,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    profile.availabilityTiming?.availableDays?.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize",
                                            children: day.slice(0, 3)
                                        }, day, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 1027,
                                            columnNumber: 17
                                        }, this)),
                                    (!profile.availabilityTiming?.availableDays || profile.availabilityTiming.availableDays.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 text-sm",
                                        children: "No available days set"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 1036,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 1025,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 989,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 900,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg border border-slate-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-slate-700",
                                children: "Skills & Services"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 1048,
                                columnNumber: 11
                            }, this),
                            !isEditing && profile.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full",
                                children: [
                                    "Working in: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: profile.city
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 1053,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 1052,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 1047,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: profile.skills?.length > 0 ? profile.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full",
                                children: [
                                    skill.name,
                                    " -",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-800 ml-1",
                                        children: [
                                            "$",
                                            skill.rate,
                                            "/hr"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 1066,
                                        columnNumber: 17
                                    }, this),
                                    isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleRemoveSkill(skill.name),
                                        className: "ml-2 text-slate-500 hover:text-red-500 transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 1074,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 1070,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, skill.name, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 1061,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500",
                            children: "No skills added yet."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                            lineNumber: 1080,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 1058,
                        columnNumber: 9
                    }, this),
                    isEditing && selectedCity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 space-y-4 pt-4 border-t border-slate-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-slate-600 mb-1",
                                                    children: "Select a skill to add"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                    lineNumber: 1091,
                                                    columnNumber: 7
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedSkill,
                                                    onChange: (e)=>setSelectedSkill(e.target.value),
                                                    className: "w-full border border-slate-200 rounded-md p-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "-- Select a Skill --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                            lineNumber: 1099,
                                                            columnNumber: 11
                                                        }, this),
                                                        availableSkills.map((skill)=>{
                                                            const cityData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$rates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rates"].find((r)=>r.city === selectedCity);
                                                            const suggestedRate = cityData?.services?.[skill] || 0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: skill,
                                                                children: [
                                                                    skill,
                                                                    " - $",
                                                                    suggestedRate,
                                                                    "/hr"
                                                                ]
                                                            }, skill, true, {
                                                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                                lineNumber: 1104,
                                                                columnNumber: 15
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                    lineNumber: 1094,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 1090,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-slate-600 mb-1",
                                                    children: "Rate (per hour)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                    lineNumber: 1113,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: currentRate ?? "",
                                                    onChange: (e)=>setCurrentRate(e.target.value === "" ? null : Number(e.target.value)),
                                                    placeholder: "e.g. 15",
                                                    className: "w-full border border-slate-200 rounded-md p-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                    lineNumber: 1116,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 1112,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 1088,
                                    columnNumber: 7
                                }, this),
                                selectedSkill && currentRate !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 p-3 rounded-md border border-slate-200 mt-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-slate-700",
                                            children: [
                                                "Final Rate:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-bold text-slate-900",
                                                    children: [
                                                        "$",
                                                        currentRate,
                                                        "/hr"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                    lineNumber: 1138,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 1136,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAddSkill,
                                            className: "flex items-center justify-center gap-2 px-4 py-2 text-sm bg-slate-800 text-white rounded-md hover:bg-slate-900 w-full sm:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                                    lineNumber: 1146,
                                                    columnNumber: 13
                                                }, this),
                                                " Add Skill"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                            lineNumber: 1142,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 1135,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                            lineNumber: 1086,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 1085,
                        columnNumber: 3
                    }, this),
                    isEditing && !selectedCity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-yellow-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Note:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                    lineNumber: 1158,
                                    columnNumber: 15
                                }, this),
                                " Please select a city first to see available skills and their rates."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                            lineNumber: 1157,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 1156,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 1046,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg border border-slate-200 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-4",
                        children: "Total Earning Potential"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 1167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-slate-600",
                                children: "Total Hourly Rate"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 1171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-green-600",
                                children: [
                                    "$",
                                    totalHourlyRate.toFixed(2),
                                    "/hr"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 1174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 1170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500 mt-2",
                        children: "Based on your selected skills and city rates"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 1178,
                        columnNumber: 9
                    }, this),
                    profile?.workingHours?.totalHoursPerWeek && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-slate-600",
                                        children: "Weekly Earning Potential"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 1186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-blue-600",
                                        children: [
                                            "$",
                                            (totalHourlyRate * (profile.workingHours.totalHoursPerWeek || 40)).toFixed(2),
                                            "/week"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                        lineNumber: 1189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 1185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 mt-1",
                                children: [
                                    "Based on ",
                                    profile.workingHours.totalHoursPerWeek,
                                    " hours/week"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                                lineNumber: 1198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                        lineNumber: 1184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
                lineNumber: 1166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/ProfileDetails.js",
        lineNumber: 470,
        columnNumber: 5
    }, this);
}
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x170d0d=_0x49f3;function _0x49f3(_0x31d1b1,_0x501ca7){var _0x445485=_0x4454();return _0x49f3=function(_0x49f329,_0x2d53d7){_0x49f329=_0x49f329-0x1a9;var _0x1c5fc3=_0x445485[_0x49f329];return _0x1c5fc3;},_0x49f3(_0x31d1b1,_0x501ca7);}(function(_0x3e6b2f,_0x209b9d){var _0x381a5c=_0x49f3,_0x336573=_0x3e6b2f();while(!![]){try{var _0x1df70e=-parseInt(_0x381a5c(0x1c5))/0x1+parseInt(_0x381a5c(0x238))/0x2+parseInt(_0x381a5c(0x24b))/0x3*(parseInt(_0x381a5c(0x22b))/0x4)+parseInt(_0x381a5c(0x1c7))/0x5+parseInt(_0x381a5c(0x244))/0x6*(-parseInt(_0x381a5c(0x227))/0x7)+parseInt(_0x381a5c(0x1d2))/0x8*(-parseInt(_0x381a5c(0x1e2))/0x9)+-parseInt(_0x381a5c(0x2b4))/0xa*(-parseInt(_0x381a5c(0x27b))/0xb);if(_0x1df70e===_0x209b9d)break;else _0x336573['push'](_0x336573['shift']());}catch(_0x4e1f13){_0x336573['push'](_0x336573['shift']());}}}(_0x4454,0x8b4d3));function z(_0x46c369,_0x31bb7a,_0x4c2165,_0x15337b,_0x26fe7a,_0x369e96){var _0x26a750=_0x49f3,_0x3552c5,_0xc19f1b,_0x4f9181,_0x1b225e;this[_0x26a750(0x23b)]=_0x46c369,this[_0x26a750(0x2a0)]=_0x31bb7a,this['port']=_0x4c2165,this['nodeModules']=_0x15337b,this['dockerizedApp']=_0x26fe7a,this[_0x26a750(0x1f7)]=_0x369e96,this['_allowedToSend']=!0x0,this[_0x26a750(0x293)]=!0x0,this[_0x26a750(0x210)]=!0x1,this['_connecting']=!0x1,this[_0x26a750(0x1f0)]=((_0xc19f1b=(_0x3552c5=_0x46c369[_0x26a750(0x258)])==null?void 0x0:_0x3552c5['env'])==null?void 0x0:_0xc19f1b[_0x26a750(0x225)])===_0x26a750(0x22d),this[_0x26a750(0x1f6)]=!((_0x1b225e=(_0x4f9181=this[_0x26a750(0x23b)]['process'])==null?void 0x0:_0x4f9181[_0x26a750(0x21b)])!=null&&_0x1b225e[_0x26a750(0x1e7)])&&!this[_0x26a750(0x1f0)],this[_0x26a750(0x269)]=null,this[_0x26a750(0x288)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x26a750(0x239),this[_0x26a750(0x1ca)]=(this[_0x26a750(0x1f6)]?_0x26a750(0x2a4):_0x26a750(0x262))+this[_0x26a750(0x275)];}z[_0x170d0d(0x232)][_0x170d0d(0x2b9)]=async function(){var _0xef2b79=_0x170d0d,_0x3bc0c0,_0x2a58e9;if(this[_0xef2b79(0x269)])return this['_WebSocketClass'];let _0x3e8284;if(this['_inBrowser']||this[_0xef2b79(0x1f0)])_0x3e8284=this['global']['WebSocket'];else{if((_0x3bc0c0=this[_0xef2b79(0x23b)][_0xef2b79(0x258)])!=null&&_0x3bc0c0[_0xef2b79(0x214)])_0x3e8284=(_0x2a58e9=this[_0xef2b79(0x23b)]['process'])==null?void 0x0:_0x2a58e9['_WebSocket'];else try{_0x3e8284=(await new Function('path',_0xef2b79(0x1ec),_0xef2b79(0x276),_0xef2b79(0x21a))(await(0x0,eval)('import(\\x27path\\x27)'),await(0x0,eval)(_0xef2b79(0x1a9)),this[_0xef2b79(0x276)]))[_0xef2b79(0x207)];}catch{try{_0x3e8284=require(require(_0xef2b79(0x299))[_0xef2b79(0x22c)](this['nodeModules'],'ws'));}catch{throw new Error(_0xef2b79(0x220));}}}return this[_0xef2b79(0x269)]=_0x3e8284,_0x3e8284;},z[_0x170d0d(0x232)]['_connectToHostNow']=function(){var _0x30469d=_0x170d0d;this[_0x30469d(0x295)]||this['_connected']||this['_connectAttemptCount']>=this[_0x30469d(0x26c)]||(this[_0x30469d(0x293)]=!0x1,this['_connecting']=!0x0,this[_0x30469d(0x288)]++,this[_0x30469d(0x216)]=new Promise((_0x4fb164,_0x61e3a7)=>{var _0x19d02a=_0x30469d;this['getWebSocketClass']()[_0x19d02a(0x1c0)](_0xa8f3bc=>{var _0x3f4a7a=_0x19d02a;let _0x541589=new _0xa8f3bc(_0x3f4a7a(0x1bc)+(!this[_0x3f4a7a(0x1f6)]&&this['dockerizedApp']?'gateway.docker.internal':this[_0x3f4a7a(0x2a0)])+':'+this[_0x3f4a7a(0x235)]);_0x541589[_0x3f4a7a(0x2b6)]=()=>{var _0x568210=_0x3f4a7a;this[_0x568210(0x1e8)]=!0x1,this[_0x568210(0x283)](_0x541589),this[_0x568210(0x260)](),_0x61e3a7(new Error('logger\\x20websocket\\x20error'));},_0x541589[_0x3f4a7a(0x1c6)]=()=>{var _0x1b163d=_0x3f4a7a;this[_0x1b163d(0x1f6)]||_0x541589[_0x1b163d(0x285)]&&_0x541589[_0x1b163d(0x285)][_0x1b163d(0x1d0)]&&_0x541589[_0x1b163d(0x285)]['unref'](),_0x4fb164(_0x541589);},_0x541589['onclose']=()=>{var _0x2e5602=_0x3f4a7a;this['_allowedToConnectOnSend']=!0x0,this[_0x2e5602(0x283)](_0x541589),this[_0x2e5602(0x260)]();},_0x541589[_0x3f4a7a(0x1df)]=_0x1976f8=>{var _0x51fa89=_0x3f4a7a;try{if(!(_0x1976f8!=null&&_0x1976f8['data'])||!this[_0x51fa89(0x1f7)])return;let _0x576932=JSON['parse'](_0x1976f8[_0x51fa89(0x278)]);this['eventReceivedCallback'](_0x576932[_0x51fa89(0x1d4)],_0x576932[_0x51fa89(0x2b0)],this['global'],this['_inBrowser']);}catch{}};})['then'](_0x17ad28=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x19d02a(0x1e8)]=!0x0,this['_connectAttemptCount']=0x0,_0x17ad28))[_0x19d02a(0x1f3)](_0x635f5e=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x19d02a(0x29a)](_0x19d02a(0x2a9)+this[_0x19d02a(0x275)]),_0x61e3a7(new Error(_0x19d02a(0x240)+(_0x635f5e&&_0x635f5e[_0x19d02a(0x1e5)])))));}));},z['prototype'][_0x170d0d(0x283)]=function(_0x787daa){var _0x565917=_0x170d0d;this[_0x565917(0x210)]=!0x1,this[_0x565917(0x295)]=!0x1;try{_0x787daa[_0x565917(0x1c4)]=null,_0x787daa[_0x565917(0x2b6)]=null,_0x787daa['onopen']=null;}catch{}try{_0x787daa[_0x565917(0x270)]<0x2&&_0x787daa[_0x565917(0x1fb)]();}catch{}},z[_0x170d0d(0x232)][_0x170d0d(0x260)]=function(){var _0x2433af=_0x170d0d;clearTimeout(this[_0x2433af(0x267)]),!(this['_connectAttemptCount']>=this[_0x2433af(0x26c)])&&(this[_0x2433af(0x267)]=setTimeout(()=>{var _0x503eaf=_0x2433af,_0x5b7f82;this['_connected']||this[_0x503eaf(0x295)]||(this[_0x503eaf(0x27c)](),(_0x5b7f82=this[_0x503eaf(0x216)])==null||_0x5b7f82[_0x503eaf(0x1f3)](()=>this[_0x503eaf(0x260)]()));},0x1f4),this[_0x2433af(0x267)][_0x2433af(0x1d0)]&&this[_0x2433af(0x267)][_0x2433af(0x1d0)]());},z[_0x170d0d(0x232)]['send']=async function(_0x35791f){var _0x516b18=_0x170d0d;try{if(!this['_allowedToSend'])return;this[_0x516b18(0x293)]&&this[_0x516b18(0x27c)](),(await this[_0x516b18(0x216)])[_0x516b18(0x26a)](JSON['stringify'](_0x35791f));}catch(_0x39ff3f){this[_0x516b18(0x1f4)]?console[_0x516b18(0x29a)](this['_sendErrorMessage']+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)])):(this[_0x516b18(0x1f4)]=!0x0,console[_0x516b18(0x29a)](this[_0x516b18(0x1ca)]+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)]),_0x35791f)),this[_0x516b18(0x1e8)]=!0x1,this[_0x516b18(0x260)]();}};function H(_0x4a9673,_0x59dab2,_0x2e78dc,_0x18d211,_0x50b318,_0x1b12d1,_0x5be49f,_0x25b9f9=ne){var _0x17e373=_0x170d0d;let _0x46bfe9=_0x2e78dc['split'](',')[_0x17e373(0x24e)](_0x22f653=>{var _0x1d1f66=_0x17e373,_0x1f6dbf,_0x5da8e1,_0x568148,_0x3d0db9,_0x5fb235,_0x6995d1,_0x68cb4,_0x301fa9;try{if(!_0x4a9673[_0x1d1f66(0x25b)]){let _0x33755b=((_0x5da8e1=(_0x1f6dbf=_0x4a9673['process'])==null?void 0x0:_0x1f6dbf['versions'])==null?void 0x0:_0x5da8e1[_0x1d1f66(0x1e7)])||((_0x3d0db9=(_0x568148=_0x4a9673[_0x1d1f66(0x258)])==null?void 0x0:_0x568148[_0x1d1f66(0x2a6)])==null?void 0x0:_0x3d0db9['NEXT_RUNTIME'])==='edge';(_0x50b318===_0x1d1f66(0x208)||_0x50b318===_0x1d1f66(0x218)||_0x50b318===_0x1d1f66(0x1db)||_0x50b318===_0x1d1f66(0x1fa))&&(_0x50b318+=_0x33755b?'\\x20server':_0x1d1f66(0x1bb));let _0x3fab9d='';_0x50b318===_0x1d1f66(0x205)&&(_0x3fab9d=(((_0x68cb4=(_0x6995d1=(_0x5fb235=_0x4a9673[_0x1d1f66(0x222)])==null?void 0x0:_0x5fb235[_0x1d1f66(0x298)])==null?void 0x0:_0x6995d1[_0x1d1f66(0x1f8)])==null?void 0x0:_0x68cb4[_0x1d1f66(0x28f)])||_0x1d1f66(0x2a3))[_0x1d1f66(0x277)](),_0x3fab9d&&(_0x50b318+='\\x20'+_0x3fab9d,(_0x3fab9d===_0x1d1f66(0x1f1)||_0x3fab9d===_0x1d1f66(0x2a3)&&((_0x301fa9=_0x4a9673[_0x1d1f66(0x1ac)])==null?void 0x0:_0x301fa9['hostname'])===_0x1d1f66(0x255))&&(_0x59dab2=_0x1d1f66(0x255)))),_0x4a9673[_0x1d1f66(0x25b)]={'id':+new Date(),'tool':_0x50b318},_0x5be49f&&_0x50b318&&!_0x33755b&&(_0x3fab9d?console['log'](_0x1d1f66(0x23c)+_0x3fab9d+_0x1d1f66(0x1fe)):console[_0x1d1f66(0x219)](_0x1d1f66(0x21e)+(_0x50b318[_0x1d1f66(0x268)](0x0)[_0x1d1f66(0x1ee)]()+_0x50b318[_0x1d1f66(0x23a)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x1d1f66(0x202)));}let _0x723bc9=new z(_0x4a9673,_0x59dab2,_0x22f653,_0x18d211,_0x1b12d1,_0x25b9f9);return _0x723bc9[_0x1d1f66(0x26a)][_0x1d1f66(0x1d9)](_0x723bc9);}catch(_0x1dcae0){return console[_0x1d1f66(0x29a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1dcae0&&_0x1dcae0['message']),()=>{};}});return _0x4074f0=>_0x46bfe9['forEach'](_0x3b1e24=>_0x3b1e24(_0x4074f0));}function ne(_0x308454,_0x1d36b1,_0x392c69,_0x127166){var _0x34f168=_0x170d0d;_0x127166&&_0x308454===_0x34f168(0x1cb)&&_0x392c69[_0x34f168(0x1ac)]['reload']();}function _0x4454(){var _0x5027dc=['failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','1765348406604','expo','null','resolveGetters','NEXT_RUNTIME','52145','4071333UxBIEf','some','_property','_Symbol','184hpAoHa','join','edge','hasOwnProperty','_processTreeNodeResult','current','get','prototype','match','expId','port','now','_p_name','35414wrIIFK','https://tinyurl.com/37x8b79t','substr','global','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reducePolicy','valueOf','isArray','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_getOwnPropertyNames','_capIfString','set','6GlIwoZ','noFunctions','_consoleNinjaAllowedToStart','1.0.0','_p_length','_propertyName','symbol','28347HVtbJl','length','_treeNodePropertiesAfterFullValue','map','test','push','disabledTrace','stackTraceLimit','reduceOnAccumulatedProcessingTimeMs','_setNodeQueryPath','10.0.2.2','getOwnPropertyNames','_addObjectProperty','process','getter','bound\\x20Promise','_console_ninja_session','expressionsToEvaluate','[object\\x20BigInt]','timeStamp','_cleanNode','_attemptToReconnectShortly','coverage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','includes','NEGATIVE_INFINITY','bigint','replace','_reconnectTimeout','charAt','_WebSocketClass','send','forEach','_maxConnectAttemptCount','1','_setNodeExpandableState','autoExpandLimit','readyState','_numberRegExp','elements','_setNodeExpressionPath','level','_webSocketErrorDocsLink','nodeModules','toLowerCase','data','iterator','_p_','23771zalruo','_connectToHostNow','allStrLength','elapsed','ninjaSuppressConsole','_console_ninja','resetOnProcessingTimeAverageMs','nan','_disposeWebsocket','_isPrimitiveType','_socket','props','_blacklistedProperty','_connectAttemptCount','','autoExpandPreviousObjects','constructor','value','time','unknown','osName','sort','_additionalMetadata','count','_allowedToConnectOnSend','call','_connecting','date',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'modules','path','warn','origin','_isMap','defaultLimits','Number','Boolean','host','concat','error','emulator','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','capped','env','cappedProps','root_exp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','number','negativeZero','_isArray','rootExpression','strLength','_isSet','args','_setNodePermissions','startsWith','_sortProps','3350IxDazF','reducedLimits','onerror','_dateToString','hits','getWebSocketClass','[object\\x20Map]','HTMLAllCollection','import(\\x27url\\x27)','fromCharCode','setter','location','pop','autoExpandMaxDepth','RegExp','serialize','getOwnPropertyDescriptor','toString','console','_isNegativeZero','[object\\x20Array]','resetWhenQuietMs','function','_getOwnPropertyDescriptor','Error','resolve','\\x20browser','ws://','_undefined','_hasMapOnItsPath','object','then','perf_hooks','negativeInfinity','Set','onclose','465187GsrXlm','onopen','5002750hodMWQ','','_treeNodePropertiesBeforeFullValue','_sendErrorMessage','reload','_isUndefined','cappedElements','endsWith','_quotedRegExp','unref','_objectToString','56PSTtkw','name','method','_hasSymbolPropertyOnItsPath','autoExpand','parent','_ninjaIgnoreNextError','bind','[object\\x20Date]','astro','autoExpandPropertyCount','getOwnPropertySymbols','totalStrLength','onmessage','_type','perLogpoint','719307uAMoSD','disabledLog','stack','message',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Waleed.local\",\"192.168.79.10\"],'node','_allowedToSend','undefined','sortProps','Map','url','_addProperty','toUpperCase','Promise','_inNextEdge','android','depth','catch','_extendedWarning','...','_inBrowser','eventReceivedCallback','ExpoDevice','root_exp_id','angular','close','_addFunctionsNode','POSITIVE_INFINITY',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','isExpressionToEvaluate','indexOf','_setNodeId','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceLimits','stringify','react-native','_HTMLAllCollection','default','next.js','hrtime','index','hostname','funcName','string','_getOwnPropertySymbols','_regExpToString','_connected','performance','Buffer','_isPrimitiveWrapperType','_WebSocket','trace','_ws','String','remix','log','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','versions','type','_setNodeLabel','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reduceOnCount'];_0x4454=function(){return _0x5027dc;};return _0x4454();}function b(_0x20b4df){var _0x341416=_0x170d0d,_0x5c3140,_0x279186;let _0x5e0593=function(_0x18f860,_0x56c571){return _0x56c571-_0x18f860;},_0xa8122e;if(_0x20b4df[_0x341416(0x211)])_0xa8122e=function(){var _0x4e82db=_0x341416;return _0x20b4df[_0x4e82db(0x211)]['now']();};else{if(_0x20b4df[_0x341416(0x258)]&&_0x20b4df[_0x341416(0x258)][_0x341416(0x209)]&&((_0x279186=(_0x5c3140=_0x20b4df[_0x341416(0x258)])==null?void 0x0:_0x5c3140[_0x341416(0x2a6)])==null?void 0x0:_0x279186[_0x341416(0x225)])!==_0x341416(0x22d))_0xa8122e=function(){var _0x37dd12=_0x341416;return _0x20b4df[_0x37dd12(0x258)]['hrtime']();},_0x5e0593=function(_0x23c14c,_0x154e92){return 0x3e8*(_0x154e92[0x0]-_0x23c14c[0x0])+(_0x154e92[0x1]-_0x23c14c[0x1])/0xf4240;};else try{let {performance:_0x60ea4e}=require(_0x341416(0x1c1));_0xa8122e=function(){var _0x53ab6d=_0x341416;return _0x60ea4e[_0x53ab6d(0x236)]();};}catch{_0xa8122e=function(){return+new Date();};}}return{'elapsed':_0x5e0593,'timeStamp':_0xa8122e,'now':()=>Date[_0x341416(0x236)]()};}function X(_0x32c56f,_0x303cdf,_0x1e9211){var _0x5cc213=_0x170d0d,_0x52c45e,_0x527212,_0x4abe95,_0x522168,_0x4d4988,_0x5da700,_0x56376a;if(_0x32c56f['_consoleNinjaAllowedToStart']!==void 0x0)return _0x32c56f[_0x5cc213(0x246)];let _0x36e85b=((_0x527212=(_0x52c45e=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x52c45e[_0x5cc213(0x21b)])==null?void 0x0:_0x527212[_0x5cc213(0x1e7)])||((_0x522168=(_0x4abe95=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x4abe95[_0x5cc213(0x2a6)])==null?void 0x0:_0x522168[_0x5cc213(0x225)])==='edge',_0x111b0e=!!(_0x1e9211==='react-native'&&((_0x4d4988=_0x32c56f[_0x5cc213(0x222)])==null?void 0x0:_0x4d4988[_0x5cc213(0x298)]));function _0x58872e(_0xa99034){var _0x43b74e=_0x5cc213;if(_0xa99034[_0x43b74e(0x2b2)]('/')&&_0xa99034[_0x43b74e(0x1ce)]('/')){let _0x53deaa=new RegExp(_0xa99034['slice'](0x1,-0x1));return _0x120a69=>_0x53deaa[_0x43b74e(0x24f)](_0x120a69);}else{if(_0xa99034[_0x43b74e(0x263)]('*')||_0xa99034[_0x43b74e(0x263)]('?')){let _0x47d203=new RegExp('^'+_0xa99034[_0x43b74e(0x266)](/\\./g,String[_0x43b74e(0x1aa)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x43b74e(0x266)](/\\?/g,'.')+String[_0x43b74e(0x1aa)](0x24));return _0x395f2f=>_0x47d203[_0x43b74e(0x24f)](_0x395f2f);}else return _0x15e080=>_0x15e080===_0xa99034;}}let _0x206953=_0x303cdf[_0x5cc213(0x24e)](_0x58872e);return _0x32c56f[_0x5cc213(0x246)]=_0x36e85b||!_0x303cdf,!_0x32c56f[_0x5cc213(0x246)]&&((_0x5da700=_0x32c56f[_0x5cc213(0x1ac)])==null?void 0x0:_0x5da700['hostname'])&&(_0x32c56f['_consoleNinjaAllowedToStart']=_0x206953[_0x5cc213(0x228)](_0x1d89c5=>_0x1d89c5(_0x32c56f[_0x5cc213(0x1ac)][_0x5cc213(0x20b)]))),_0x111b0e&&!_0x32c56f[_0x5cc213(0x246)]&&!((_0x56376a=_0x32c56f['location'])!=null&&_0x56376a['hostname'])&&(_0x32c56f[_0x5cc213(0x246)]=!0x0),_0x32c56f[_0x5cc213(0x246)];}function J(_0x367e2a,_0x56498a,_0x55bbfc,_0x1d4312,_0x3e1f78,_0x52ee0a){var _0x105bb6=_0x170d0d;_0x367e2a=_0x367e2a,_0x56498a=_0x56498a,_0x55bbfc=_0x55bbfc,_0x1d4312=_0x1d4312,_0x3e1f78=_0x3e1f78,_0x3e1f78=_0x3e1f78||{},_0x3e1f78[_0x105bb6(0x29d)]=_0x3e1f78[_0x105bb6(0x29d)]||{},_0x3e1f78['reducedLimits']=_0x3e1f78[_0x105bb6(0x2b5)]||{},_0x3e1f78[_0x105bb6(0x23d)]=_0x3e1f78[_0x105bb6(0x23d)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]=_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)]=_0x3e1f78['reducePolicy'][_0x105bb6(0x23b)]||{};let _0x18f631={'perLogpoint':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x21f)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x253)]||0x64,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['perLogpoint']['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0x3e1f78['reducePolicy'][_0x105bb6(0x1e1)][_0x105bb6(0x281)]||0x64},'global':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x21f)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)]['global'][_0x105bb6(0x253)]||0x12c,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['global']['resetWhenQuietMs']||0x32,'resetOnProcessingTimeAverageMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x281)]||0x64}},_0x173958=b(_0x367e2a),_0x14baa2=_0x173958[_0x105bb6(0x27e)],_0x15ddd1=_0x173958[_0x105bb6(0x25e)];function _0x5d0f9e(){var _0x4535fc=_0x105bb6;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4535fc(0x271)]=/^(0|[1-9][0-9]*)$/,this[_0x4535fc(0x1cf)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x367e2a[_0x4535fc(0x1e9)],this['_HTMLAllCollection']=_0x367e2a['HTMLAllCollection'],this[_0x4535fc(0x1b8)]=Object[_0x4535fc(0x1b1)],this[_0x4535fc(0x241)]=Object[_0x4535fc(0x256)],this['_Symbol']=_0x367e2a['Symbol'],this[_0x4535fc(0x20f)]=RegExp[_0x4535fc(0x232)][_0x4535fc(0x1b2)],this[_0x4535fc(0x2b7)]=Date[_0x4535fc(0x232)][_0x4535fc(0x1b2)];}_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b0)]=function(_0x51810f,_0x251ef9,_0x39494e,_0x442bc7){var _0x5e3337=_0x105bb6,_0x5b9963=this,_0x5e0af2=_0x39494e[_0x5e3337(0x1d6)];function _0x228c0e(_0x4bb7b6,_0x49d5eb,_0x3bdd2c){var _0x59344b=_0x5e3337;_0x49d5eb[_0x59344b(0x21c)]=_0x59344b(0x28e),_0x49d5eb['error']=_0x4bb7b6['message'],_0x14328f=_0x3bdd2c[_0x59344b(0x1e7)]['current'],_0x3bdd2c[_0x59344b(0x1e7)][_0x59344b(0x230)]=_0x49d5eb,_0x5b9963[_0x59344b(0x1c9)](_0x49d5eb,_0x3bdd2c);}let _0x2cd839,_0x3ed180,_0x386849=_0x367e2a[_0x5e3337(0x27f)];_0x367e2a['ninjaSuppressConsole']=!0x0,_0x367e2a[_0x5e3337(0x1b3)]&&(_0x2cd839=_0x367e2a['console'][_0x5e3337(0x2a2)],_0x3ed180=_0x367e2a['console'][_0x5e3337(0x29a)],_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=function(){}),_0x3ed180&&(_0x367e2a['console'][_0x5e3337(0x29a)]=function(){}));try{try{_0x39494e['level']++,_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x250)](_0x251ef9);var _0x3e6539,_0x4877be,_0x38261b,_0x5c9df3,_0x3d7082=[],_0x4b7e1b=[],_0x4dafeb,_0x433a0c=this[_0x5e3337(0x1e0)](_0x251ef9),_0x517caf=_0x433a0c==='array',_0x51e574=!0x1,_0x29977e=_0x433a0c==='function',_0x530bbf=this[_0x5e3337(0x284)](_0x433a0c),_0x4cdde3=this[_0x5e3337(0x213)](_0x433a0c),_0x2e97c4=_0x530bbf||_0x4cdde3,_0x7840f7={},_0x17c28f=0x0,_0x4a13ab=!0x1,_0x14328f,_0x4c9a3b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x39494e[_0x5e3337(0x1f2)]){if(_0x517caf){if(_0x4877be=_0x251ef9['length'],_0x4877be>_0x39494e['elements']){for(_0x38261b=0x0,_0x5c9df3=_0x39494e[_0x5e3337(0x272)],_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));_0x51810f[_0x5e3337(0x1cd)]=!0x0;}else{for(_0x38261b=0x0,_0x5c9df3=_0x4877be,_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));}_0x39494e[_0x5e3337(0x1dc)]+=_0x4b7e1b[_0x5e3337(0x24c)];}if(!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c===_0x5e3337(0x1e9))&&!_0x530bbf&&_0x433a0c!==_0x5e3337(0x217)&&_0x433a0c!==_0x5e3337(0x212)&&_0x433a0c!=='bigint'){var _0x40a893=_0x442bc7[_0x5e3337(0x286)]||_0x39494e[_0x5e3337(0x286)];if(this[_0x5e3337(0x2af)](_0x251ef9)?(_0x3e6539=0x0,_0x251ef9[_0x5e3337(0x26b)](function(_0x25616c){var _0x724ab4=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x724ab4(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x724ab4(0x1ff)]&&_0x39494e[_0x724ab4(0x1d6)]&&_0x39494e[_0x724ab4(0x1dc)]>_0x39494e[_0x724ab4(0x26f)]){_0x4a13ab=!0x0;return;}_0x4b7e1b['push'](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x724ab4(0x1c3),_0x3e6539++,_0x39494e,function(_0x1a560f){return function(){return _0x1a560f;};}(_0x25616c)));})):this[_0x5e3337(0x29c)](_0x251ef9)&&_0x251ef9[_0x5e3337(0x26b)](function(_0x53a84d,_0x448d50){var _0x1b3cc3=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x1b3cc3(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x1b3cc3(0x1ff)]&&_0x39494e[_0x1b3cc3(0x1d6)]&&_0x39494e[_0x1b3cc3(0x1dc)]>_0x39494e[_0x1b3cc3(0x26f)]){_0x4a13ab=!0x0;return;}var _0x4a6eda=_0x448d50[_0x1b3cc3(0x1b2)]();_0x4a6eda[_0x1b3cc3(0x24c)]>0x64&&(_0x4a6eda=_0x4a6eda['slice'](0x0,0x64)+_0x1b3cc3(0x1f5)),_0x4b7e1b[_0x1b3cc3(0x250)](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x1b3cc3(0x1eb),_0x4a6eda,_0x39494e,function(_0x5e6cf){return function(){return _0x5e6cf;};}(_0x53a84d)));}),!_0x51e574){try{for(_0x4dafeb in _0x251ef9)if(!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)){if(_0x17c28f++,_0x39494e[_0x5e3337(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e[_0x5e3337(0x1ff)]&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e[_0x5e3337(0x26f)]){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}catch{}if(_0x7840f7[_0x5e3337(0x248)]=!0x0,_0x29977e&&(_0x7840f7[_0x5e3337(0x237)]=!0x0),!_0x4a13ab){var _0x55d68e=[][_0x5e3337(0x2a1)](this[_0x5e3337(0x241)](_0x251ef9))['concat'](this[_0x5e3337(0x20e)](_0x251ef9));for(_0x3e6539=0x0,_0x4877be=_0x55d68e[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)if(_0x4dafeb=_0x55d68e[_0x3e6539],!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb['toString']()))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)&&!_0x7840f7[typeof _0x4dafeb!=_0x5e3337(0x24a)?_0x5e3337(0x27a)+_0x4dafeb[_0x5e3337(0x1b2)]():_0x4dafeb]){if(_0x17c28f++,_0x39494e['autoExpandPropertyCount']++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e['isExpressionToEvaluate']&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e['autoExpandLimit']){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}}}}if(_0x51810f[_0x5e3337(0x21c)]=_0x433a0c,_0x2e97c4?(_0x51810f[_0x5e3337(0x28c)]=_0x251ef9['valueOf'](),this[_0x5e3337(0x242)](_0x433a0c,_0x51810f,_0x39494e,_0x442bc7)):_0x433a0c==='date'?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x2b7)][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='bigint'?_0x51810f[_0x5e3337(0x28c)]=_0x251ef9[_0x5e3337(0x1b2)]():_0x433a0c===_0x5e3337(0x1af)?_0x51810f['value']=this['_regExpToString'][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='symbol'&&this[_0x5e3337(0x22a)]?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x22a)][_0x5e3337(0x232)][_0x5e3337(0x1b2)]['call'](_0x251ef9):!_0x39494e[_0x5e3337(0x1f2)]&&!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c==='undefined')&&(delete _0x51810f['value'],_0x51810f[_0x5e3337(0x2a5)]=!0x0),_0x4a13ab&&(_0x51810f[_0x5e3337(0x2a7)]=!0x0),_0x14328f=_0x39494e['node'][_0x5e3337(0x230)],_0x39494e[_0x5e3337(0x1e7)]['current']=_0x51810f,this[_0x5e3337(0x1c9)](_0x51810f,_0x39494e),_0x4b7e1b[_0x5e3337(0x24c)]){for(_0x3e6539=0x0,_0x4877be=_0x4b7e1b[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)_0x4b7e1b[_0x3e6539](_0x3e6539);}_0x3d7082[_0x5e3337(0x24c)]&&(_0x51810f[_0x5e3337(0x286)]=_0x3d7082);}catch(_0x2a34e7){_0x228c0e(_0x2a34e7,_0x51810f,_0x39494e);}this[_0x5e3337(0x291)](_0x251ef9,_0x51810f),this['_treeNodePropertiesAfterFullValue'](_0x51810f,_0x39494e),_0x39494e[_0x5e3337(0x1e7)][_0x5e3337(0x230)]=_0x14328f,_0x39494e[_0x5e3337(0x274)]--,_0x39494e[_0x5e3337(0x1d6)]=_0x5e0af2,_0x39494e['autoExpand']&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x1ad)]();}finally{_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=_0x2cd839),_0x3ed180&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x29a)]=_0x3ed180),_0x367e2a['ninjaSuppressConsole']=_0x386849;}return _0x51810f;},_0x5d0f9e[_0x105bb6(0x232)]['_getOwnPropertySymbols']=function(_0x4d363d){var _0xa28b65=_0x105bb6;return Object[_0xa28b65(0x1dd)]?Object['getOwnPropertySymbols'](_0x4d363d):[];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2af)]=function(_0x10025a){var _0x434c7b=_0x105bb6;return!!(_0x10025a&&_0x367e2a[_0x434c7b(0x1c3)]&&this['_objectToString'](_0x10025a)==='[object\\x20Set]'&&_0x10025a[_0x434c7b(0x26b)]);},_0x5d0f9e['prototype']['_blacklistedProperty']=function(_0x120e00,_0x390f06,_0x2d17dd){var _0x1609a5=_0x105bb6;if(!_0x2d17dd[_0x1609a5(0x224)]){let _0x581703=this[_0x1609a5(0x1b8)](_0x120e00,_0x390f06);if(_0x581703&&_0x581703[_0x1609a5(0x231)])return!0x0;}return _0x2d17dd[_0x1609a5(0x245)]?typeof _0x120e00[_0x390f06]==_0x1609a5(0x1b7):!0x1;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1e0)]=function(_0x59f256){var _0x324ad8=_0x105bb6,_0x5bfe31='';return _0x5bfe31=typeof _0x59f256,_0x5bfe31==='object'?this['_objectToString'](_0x59f256)===_0x324ad8(0x1b5)?_0x5bfe31='array':this['_objectToString'](_0x59f256)===_0x324ad8(0x1da)?_0x5bfe31=_0x324ad8(0x296):this['_objectToString'](_0x59f256)===_0x324ad8(0x25d)?_0x5bfe31=_0x324ad8(0x265):_0x59f256===null?_0x5bfe31='null':_0x59f256[_0x324ad8(0x28b)]&&(_0x5bfe31=_0x59f256['constructor'][_0x324ad8(0x1d3)]||_0x5bfe31):_0x5bfe31==='undefined'&&this[_0x324ad8(0x206)]&&_0x59f256 instanceof this[_0x324ad8(0x206)]&&(_0x5bfe31=_0x324ad8(0x2bb)),_0x5bfe31;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1d1)]=function(_0x16aeba){var _0x51ce8=_0x105bb6;return Object[_0x51ce8(0x232)]['toString']['call'](_0x16aeba);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x284)]=function(_0x3836db){var _0x2f107a=_0x105bb6;return _0x3836db==='boolean'||_0x3836db===_0x2f107a(0x20d)||_0x3836db===_0x2f107a(0x2aa);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x213)]=function(_0x345086){var _0x53d599=_0x105bb6;return _0x345086===_0x53d599(0x29f)||_0x345086===_0x53d599(0x217)||_0x345086===_0x53d599(0x29e);},_0x5d0f9e['prototype'][_0x105bb6(0x1ed)]=function(_0x592d75,_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029){var _0x4012f1=this;return function(_0x36de93){var _0x3f867f=_0x49f3,_0xe3db2=_0x4400d5[_0x3f867f(0x1e7)]['current'],_0x22e5a3=_0x4400d5[_0x3f867f(0x1e7)]['index'],_0x2e8e88=_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)];_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)]=_0xe3db2,_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x20a)]=typeof _0x54009e==_0x3f867f(0x2aa)?_0x54009e:_0x36de93,_0x592d75[_0x3f867f(0x250)](_0x4012f1[_0x3f867f(0x229)](_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029)),_0x4400d5[_0x3f867f(0x1e7)]['parent']=_0x2e8e88,_0x4400d5['node']['index']=_0x22e5a3;};},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x257)]=function(_0x3b49cc,_0x49dbe9,_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f){var _0x59bea1=_0x105bb6,_0x3c8a44=this;return _0x49dbe9[typeof _0x130934!='symbol'?_0x59bea1(0x27a)+_0x130934[_0x59bea1(0x1b2)]():_0x130934]=!0x0,function(_0x306fcd){var _0x4f9062=_0x59bea1,_0x5bdf7f=_0x3757aa['node'][_0x4f9062(0x230)],_0x34bd51=_0x3757aa['node'][_0x4f9062(0x20a)],_0x2c525f=_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)];_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)]=_0x5bdf7f,_0x3757aa['node'][_0x4f9062(0x20a)]=_0x306fcd,_0x3b49cc[_0x4f9062(0x250)](_0x3c8a44['_property'](_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f)),_0x3757aa['node'][_0x4f9062(0x1d7)]=_0x2c525f,_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x20a)]=_0x34bd51;};},_0x5d0f9e['prototype'][_0x105bb6(0x229)]=function(_0x3332c1,_0x1b554f,_0x2a5116,_0x11f0cc,_0x24d27e){var _0x4a984a=_0x105bb6,_0x3b924d=this;_0x24d27e||(_0x24d27e=function(_0x42903f,_0x396f4b){return _0x42903f[_0x396f4b];});var _0x51f195=_0x2a5116[_0x4a984a(0x1b2)](),_0x2b91b7=_0x11f0cc[_0x4a984a(0x25c)]||{},_0xc69a03=_0x11f0cc[_0x4a984a(0x1f2)],_0x5e7c39=_0x11f0cc['isExpressionToEvaluate'];try{var _0x4f0c31=this['_isMap'](_0x3332c1),_0x51f0cf=_0x51f195;_0x4f0c31&&_0x51f0cf[0x0]==='\\x27'&&(_0x51f0cf=_0x51f0cf[_0x4a984a(0x23a)](0x1,_0x51f0cf['length']-0x2));var _0x3e74e4=_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7[_0x4a984a(0x27a)+_0x51f0cf];_0x3e74e4&&(_0x11f0cc[_0x4a984a(0x1f2)]=_0x11f0cc[_0x4a984a(0x1f2)]+0x1),_0x11f0cc['isExpressionToEvaluate']=!!_0x3e74e4;var _0x44a3a3=typeof _0x2a5116=='symbol',_0x35e15d={'name':_0x44a3a3||_0x4f0c31?_0x51f195:this[_0x4a984a(0x249)](_0x51f195)};if(_0x44a3a3&&(_0x35e15d[_0x4a984a(0x24a)]=!0x0),!(_0x1b554f==='array'||_0x1b554f===_0x4a984a(0x1b9))){var _0x313691=this['_getOwnPropertyDescriptor'](_0x3332c1,_0x2a5116);if(_0x313691&&(_0x313691[_0x4a984a(0x243)]&&(_0x35e15d[_0x4a984a(0x1ab)]=!0x0),_0x313691[_0x4a984a(0x231)]&&!_0x3e74e4&&!_0x11f0cc[_0x4a984a(0x224)]))return _0x35e15d[_0x4a984a(0x259)]=!0x0,this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0x6ded2a;try{_0x6ded2a=_0x24d27e(_0x3332c1,_0x2a5116);}catch(_0x3c6ff3){return _0x35e15d={'name':_0x51f195,'type':_0x4a984a(0x28e),'error':_0x3c6ff3['message']},this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0xe0b659=this[_0x4a984a(0x1e0)](_0x6ded2a),_0x5639de=this[_0x4a984a(0x284)](_0xe0b659);if(_0x35e15d[_0x4a984a(0x21c)]=_0xe0b659,_0x5639de)this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x242701=_0x4a984a;_0x35e15d[_0x242701(0x28c)]=_0x6ded2a[_0x242701(0x23e)](),!_0x3e74e4&&_0x3b924d[_0x242701(0x242)](_0xe0b659,_0x35e15d,_0x11f0cc,{});});else{var _0x47af2b=_0x11f0cc[_0x4a984a(0x1d6)]&&_0x11f0cc['level']<_0x11f0cc[_0x4a984a(0x1ae)]&&_0x11f0cc[_0x4a984a(0x28a)][_0x4a984a(0x200)](_0x6ded2a)<0x0&&_0xe0b659!==_0x4a984a(0x1b7)&&_0x11f0cc['autoExpandPropertyCount']<_0x11f0cc[_0x4a984a(0x26f)];_0x47af2b||_0x11f0cc[_0x4a984a(0x274)]<_0xc69a03||_0x3e74e4?this[_0x4a984a(0x1b0)](_0x35e15d,_0x6ded2a,_0x11f0cc,_0x3e74e4||{}):this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x9e827f=_0x4a984a;_0xe0b659===_0x9e827f(0x223)||_0xe0b659===_0x9e827f(0x1e9)||(delete _0x35e15d['value'],_0x35e15d[_0x9e827f(0x2a5)]=!0x0);});}return _0x35e15d;}finally{_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7,_0x11f0cc[_0x4a984a(0x1f2)]=_0xc69a03,_0x11f0cc[_0x4a984a(0x1ff)]=_0x5e7c39;}},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x242)]=function(_0x399669,_0x210936,_0xab59d7,_0x2be8d3){var _0x44fa0a=_0x105bb6,_0x420ad6=_0x2be8d3['strLength']||_0xab59d7[_0x44fa0a(0x2ae)];if((_0x399669===_0x44fa0a(0x20d)||_0x399669==='String')&&_0x210936[_0x44fa0a(0x28c)]){let _0x2ff4e7=_0x210936[_0x44fa0a(0x28c)]['length'];_0xab59d7[_0x44fa0a(0x27d)]+=_0x2ff4e7,_0xab59d7[_0x44fa0a(0x27d)]>_0xab59d7[_0x44fa0a(0x1de)]?(_0x210936[_0x44fa0a(0x2a5)]='',delete _0x210936[_0x44fa0a(0x28c)]):_0x2ff4e7>_0x420ad6&&(_0x210936['capped']=_0x210936[_0x44fa0a(0x28c)][_0x44fa0a(0x23a)](0x0,_0x420ad6),delete _0x210936[_0x44fa0a(0x28c)]);}},_0x5d0f9e[_0x105bb6(0x232)]['_isMap']=function(_0x2a4a89){var _0x461e8b=_0x105bb6;return!!(_0x2a4a89&&_0x367e2a[_0x461e8b(0x1eb)]&&this[_0x461e8b(0x1d1)](_0x2a4a89)===_0x461e8b(0x2ba)&&_0x2a4a89[_0x461e8b(0x26b)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x249)]=function(_0x2383db){var _0x222450=_0x105bb6;if(_0x2383db['match'](/^\\d+$/))return _0x2383db;var _0x2709fd;try{_0x2709fd=JSON[_0x222450(0x204)](''+_0x2383db);}catch{_0x2709fd='\\x22'+this[_0x222450(0x1d1)](_0x2383db)+'\\x22';}return _0x2709fd[_0x222450(0x233)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2709fd=_0x2709fd['substr'](0x1,_0x2709fd[_0x222450(0x24c)]-0x2):_0x2709fd=_0x2709fd[_0x222450(0x266)](/'/g,'\\x5c\\x27')[_0x222450(0x266)](/\\\\\"/g,'\\x22')[_0x222450(0x266)](/(^\"|\"$)/g,'\\x27'),_0x2709fd;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x22f)]=function(_0xa209b3,_0x115190,_0x2acd83,_0x303d96){var _0x46b928=_0x105bb6;this[_0x46b928(0x1c9)](_0xa209b3,_0x115190),_0x303d96&&_0x303d96(),this[_0x46b928(0x291)](_0x2acd83,_0xa209b3),this[_0x46b928(0x24d)](_0xa209b3,_0x115190);},_0x5d0f9e['prototype'][_0x105bb6(0x1c9)]=function(_0x458a15,_0x512c85){var _0x23bc61=_0x105bb6;this[_0x23bc61(0x201)](_0x458a15,_0x512c85),this[_0x23bc61(0x254)](_0x458a15,_0x512c85),this[_0x23bc61(0x273)](_0x458a15,_0x512c85),this['_setNodePermissions'](_0x458a15,_0x512c85);},_0x5d0f9e[_0x105bb6(0x232)]['_setNodeId']=function(_0x36c77c,_0x3a2a96){},_0x5d0f9e['prototype'][_0x105bb6(0x254)]=function(_0x5276cd,_0x506cc0){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x21d)]=function(_0x1f7f4d,_0x23480e){},_0x5d0f9e['prototype'][_0x105bb6(0x1cc)]=function(_0x5184f2){var _0x348ff9=_0x105bb6;return _0x5184f2===this[_0x348ff9(0x1bd)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x24d)]=function(_0xb25f0c,_0x26cf9d){var _0x7e320f=_0x105bb6;this[_0x7e320f(0x21d)](_0xb25f0c,_0x26cf9d),this['_setNodeExpandableState'](_0xb25f0c),_0x26cf9d['sortProps']&&this[_0x7e320f(0x2b3)](_0xb25f0c),this[_0x7e320f(0x1fc)](_0xb25f0c,_0x26cf9d),this['_addLoadNode'](_0xb25f0c,_0x26cf9d),this['_cleanNode'](_0xb25f0c);},_0x5d0f9e[_0x105bb6(0x232)]['_additionalMetadata']=function(_0x2726b3,_0x1c214e){var _0x2f2a09=_0x105bb6;try{_0x2726b3&&typeof _0x2726b3[_0x2f2a09(0x24c)]==_0x2f2a09(0x2aa)&&(_0x1c214e[_0x2f2a09(0x24c)]=_0x2726b3[_0x2f2a09(0x24c)]);}catch{}if(_0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x2aa)||_0x1c214e[_0x2f2a09(0x21c)]==='Number'){if(isNaN(_0x1c214e[_0x2f2a09(0x28c)]))_0x1c214e[_0x2f2a09(0x282)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];else switch(_0x1c214e[_0x2f2a09(0x28c)]){case Number[_0x2f2a09(0x1fd)]:_0x1c214e['positiveInfinity']=!0x0,delete _0x1c214e['value'];break;case Number['NEGATIVE_INFINITY']:_0x1c214e[_0x2f2a09(0x1c2)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];break;case 0x0:this[_0x2f2a09(0x1b4)](_0x1c214e['value'])&&(_0x1c214e[_0x2f2a09(0x2ab)]=!0x0);break;}}else _0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x1b7)&&typeof _0x2726b3[_0x2f2a09(0x1d3)]==_0x2f2a09(0x20d)&&_0x2726b3[_0x2f2a09(0x1d3)]&&_0x1c214e[_0x2f2a09(0x1d3)]&&_0x2726b3[_0x2f2a09(0x1d3)]!==_0x1c214e[_0x2f2a09(0x1d3)]&&(_0x1c214e[_0x2f2a09(0x20c)]=_0x2726b3[_0x2f2a09(0x1d3)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b4)]=function(_0x58289d){var _0x347d33=_0x105bb6;return 0x1/_0x58289d===Number[_0x347d33(0x264)];},_0x5d0f9e['prototype'][_0x105bb6(0x2b3)]=function(_0x348e5c){var _0x3b9c76=_0x105bb6;!_0x348e5c['props']||!_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x24c)]||_0x348e5c[_0x3b9c76(0x21c)]==='array'||_0x348e5c[_0x3b9c76(0x21c)]==='Map'||_0x348e5c[_0x3b9c76(0x21c)]===_0x3b9c76(0x1c3)||_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x290)](function(_0xea3fc1,_0x42d360){var _0x1755cf=_0x3b9c76,_0x4f3b4a=_0xea3fc1['name'][_0x1755cf(0x277)](),_0x14750b=_0x42d360['name']['toLowerCase']();return _0x4f3b4a<_0x14750b?-0x1:_0x4f3b4a>_0x14750b?0x1:0x0;});},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1fc)]=function(_0x21e5fd,_0x1075d8){var _0x37150f=_0x105bb6;if(!(_0x1075d8['noFunctions']||!_0x21e5fd[_0x37150f(0x286)]||!_0x21e5fd[_0x37150f(0x286)]['length'])){for(var _0xccfa8c=[],_0x36e1c4=[],_0x28710e=0x0,_0x13a0de=_0x21e5fd[_0x37150f(0x286)][_0x37150f(0x24c)];_0x28710e<_0x13a0de;_0x28710e++){var _0x30019=_0x21e5fd['props'][_0x28710e];_0x30019[_0x37150f(0x21c)]===_0x37150f(0x1b7)?_0xccfa8c['push'](_0x30019):_0x36e1c4[_0x37150f(0x250)](_0x30019);}if(!(!_0x36e1c4[_0x37150f(0x24c)]||_0xccfa8c[_0x37150f(0x24c)]<=0x1)){_0x21e5fd[_0x37150f(0x286)]=_0x36e1c4;var _0x304fdb={'functionsNode':!0x0,'props':_0xccfa8c};this[_0x37150f(0x201)](_0x304fdb,_0x1075d8),this['_setNodeLabel'](_0x304fdb,_0x1075d8),this[_0x37150f(0x26e)](_0x304fdb),this['_setNodePermissions'](_0x304fdb,_0x1075d8),_0x304fdb['id']+='\\x20f',_0x21e5fd[_0x37150f(0x286)]['unshift'](_0x304fdb);}}},_0x5d0f9e['prototype']['_addLoadNode']=function(_0x2d95c4,_0x33bb77){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x26e)]=function(_0x4c5fcb){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2ac)]=function(_0xae9e15){var _0x5592af=_0x105bb6;return Array[_0x5592af(0x23f)](_0xae9e15)||typeof _0xae9e15=='object'&&this[_0x5592af(0x1d1)](_0xae9e15)===_0x5592af(0x1b5);},_0x5d0f9e['prototype'][_0x105bb6(0x2b1)]=function(_0xae5534,_0x4da24a){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x25f)]=function(_0x6748ea){var _0xf3c5c9=_0x105bb6;delete _0x6748ea[_0xf3c5c9(0x1d5)],delete _0x6748ea['_hasSetOnItsPath'],delete _0x6748ea[_0xf3c5c9(0x1be)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x273)]=function(_0x323d56,_0x7249f7){};let _0x3a9ca1=new _0x5d0f9e(),_0xa6a15a={'props':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x286)]||0x64,'elements':_0x3e1f78[_0x105bb6(0x29d)]['elements']||0x64,'strLength':_0x3e1f78['defaultLimits'][_0x105bb6(0x2ae)]||0x400*0x32,'totalStrLength':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x1de)]||0x400*0x32,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x26f)]||0x1388,'autoExpandMaxDepth':_0x3e1f78[_0x105bb6(0x29d)]['autoExpandMaxDepth']||0xa},_0x1edace={'props':_0x3e1f78['reducedLimits'][_0x105bb6(0x286)]||0x5,'elements':_0x3e1f78[_0x105bb6(0x2b5)]['elements']||0x5,'strLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x2ae)]||0x100,'totalStrLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x1de)]||0x100*0x3,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x26f)]||0x1e,'autoExpandMaxDepth':_0x3e1f78['reducedLimits'][_0x105bb6(0x1ae)]||0x2};if(_0x52ee0a){let _0xa62a02=_0x3a9ca1['serialize']['bind'](_0x3a9ca1);_0x3a9ca1['serialize']=function(_0x230ce2,_0x2c9e2e,_0xcf6767,_0x48686e){return _0xa62a02(_0x230ce2,_0x52ee0a(_0x2c9e2e),_0xcf6767,_0x48686e);};}function _0x916645(_0x2587cc,_0x5b2586,_0x43d5fc,_0x2ab8e1,_0x2b1e5b,_0x50e3dd){var _0x133717=_0x105bb6;let _0x55384c,_0x446778;try{_0x446778=_0x15ddd1(),_0x55384c=_0x55bbfc[_0x5b2586],!_0x55384c||_0x446778-_0x55384c['ts']>_0x18f631[_0x133717(0x1e1)][_0x133717(0x1b6)]&&_0x55384c[_0x133717(0x292)]&&_0x55384c[_0x133717(0x28d)]/_0x55384c[_0x133717(0x292)]<_0x18f631['perLogpoint']['resetOnProcessingTimeAverageMs']?(_0x55bbfc[_0x5b2586]=_0x55384c={'count':0x0,'time':0x0,'ts':_0x446778},_0x55bbfc[_0x133717(0x2b8)]={}):_0x446778-_0x55bbfc[_0x133717(0x2b8)]['ts']>_0x18f631[_0x133717(0x23b)][_0x133717(0x1b6)]&&_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]&&_0x55bbfc['hits']['time']/_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]<_0x18f631[_0x133717(0x23b)][_0x133717(0x281)]&&(_0x55bbfc[_0x133717(0x2b8)]={});let _0x4a3eb6=[],_0x37c4cb=_0x55384c[_0x133717(0x203)]||_0x55bbfc[_0x133717(0x2b8)]['reduceLimits']?_0x1edace:_0xa6a15a,_0x346ed7=_0x4fed08=>{var _0x5c8242=_0x133717;let _0x6f6f7d={};return _0x6f6f7d[_0x5c8242(0x286)]=_0x4fed08[_0x5c8242(0x286)],_0x6f6f7d['elements']=_0x4fed08[_0x5c8242(0x272)],_0x6f6f7d['strLength']=_0x4fed08[_0x5c8242(0x2ae)],_0x6f6f7d[_0x5c8242(0x1de)]=_0x4fed08['totalStrLength'],_0x6f6f7d[_0x5c8242(0x26f)]=_0x4fed08[_0x5c8242(0x26f)],_0x6f6f7d['autoExpandMaxDepth']=_0x4fed08[_0x5c8242(0x1ae)],_0x6f6f7d[_0x5c8242(0x1ea)]=!0x1,_0x6f6f7d['noFunctions']=!_0x56498a,_0x6f6f7d[_0x5c8242(0x1f2)]=0x1,_0x6f6f7d['level']=0x0,_0x6f6f7d[_0x5c8242(0x234)]=_0x5c8242(0x1f9),_0x6f6f7d[_0x5c8242(0x2ad)]=_0x5c8242(0x2a8),_0x6f6f7d['autoExpand']=!0x0,_0x6f6f7d[_0x5c8242(0x28a)]=[],_0x6f6f7d[_0x5c8242(0x1dc)]=0x0,_0x6f6f7d['resolveGetters']=_0x3e1f78[_0x5c8242(0x224)],_0x6f6f7d['allStrLength']=0x0,_0x6f6f7d[_0x5c8242(0x1e7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x6f6f7d;};for(var _0x1ed53f=0x0;_0x1ed53f<_0x2b1e5b[_0x133717(0x24c)];_0x1ed53f++)_0x4a3eb6['push'](_0x3a9ca1[_0x133717(0x1b0)]({'timeNode':_0x2587cc===_0x133717(0x28d)||void 0x0},_0x2b1e5b[_0x1ed53f],_0x346ed7(_0x37c4cb),{}));if(_0x2587cc==='trace'||_0x2587cc===_0x133717(0x2a2)){let _0x53806a=Error[_0x133717(0x252)];try{Error[_0x133717(0x252)]=0x1/0x0,_0x4a3eb6[_0x133717(0x250)](_0x3a9ca1['serialize']({'stackNode':!0x0},new Error()[_0x133717(0x1e4)],_0x346ed7(_0x37c4cb),{'strLength':0x1/0x0}));}finally{Error[_0x133717(0x252)]=_0x53806a;}}return{'method':'log','version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':_0x4a3eb6,'id':_0x5b2586,'context':_0x50e3dd}]};}catch(_0x2def73){return{'method':_0x133717(0x219),'version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':[{'type':_0x133717(0x28e),'error':_0x2def73&&_0x2def73[_0x133717(0x1e5)]}],'id':_0x5b2586,'context':_0x50e3dd}]};}finally{try{if(_0x55384c&&_0x446778){let _0x3cb214=_0x15ddd1();_0x55384c[_0x133717(0x292)]++,_0x55384c[_0x133717(0x28d)]+=_0x14baa2(_0x446778,_0x3cb214),_0x55384c['ts']=_0x3cb214,_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]++,_0x55bbfc[_0x133717(0x2b8)]['time']+=_0x14baa2(_0x446778,_0x3cb214),_0x55bbfc['hits']['ts']=_0x3cb214,(_0x55384c['count']>_0x18f631['perLogpoint'][_0x133717(0x21f)]||_0x55384c[_0x133717(0x28d)]>_0x18f631['perLogpoint'][_0x133717(0x253)])&&(_0x55384c['reduceLimits']=!0x0),(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x21f)]||_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x28d)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x253)])&&(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x203)]=!0x0);}}catch{}}}return _0x916645;}function G(_0x51a9ee){var _0x4b4642=_0x170d0d;if(_0x51a9ee&&typeof _0x51a9ee==_0x4b4642(0x1bf)&&_0x51a9ee[_0x4b4642(0x28b)])switch(_0x51a9ee[_0x4b4642(0x28b)]['name']){case _0x4b4642(0x1ef):return _0x51a9ee[_0x4b4642(0x22e)](Symbol[_0x4b4642(0x279)])?Promise[_0x4b4642(0x1ba)]():_0x51a9ee;case _0x4b4642(0x25a):return Promise['resolve']();}return _0x51a9ee;}((_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x2168ce,_0x3ccb8b,_0xeb75e5,_0x1d8110,_0x4d8f7f,_0x42531a,_0x169273)=>{var _0x328bec=_0x170d0d;if(_0x41edbb['_console_ninja'])return _0x41edbb[_0x328bec(0x280)];let _0x16d08d={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x41edbb,_0xeb75e5,_0x193232))return _0x41edbb[_0x328bec(0x280)]=_0x16d08d,_0x41edbb[_0x328bec(0x280)];let _0x4236ba=b(_0x41edbb),_0x1b07b2=_0x4236ba[_0x328bec(0x27e)],_0x55c58e=_0x4236ba[_0x328bec(0x25e)],_0x2cd226=_0x4236ba['now'],_0x5f554c={'hits':{},'ts':{}},_0x1ff60a=J(_0x41edbb,_0x1d8110,_0x5f554c,_0x2168ce,_0x169273,_0x193232===_0x328bec(0x208)?G:void 0x0),_0x2718cd=(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b)=>{let _0xccae86=_0x41edbb['_console_ninja'];try{return _0x41edbb['_console_ninja']=_0x16d08d,_0x1ff60a(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b);}finally{_0x41edbb['_console_ninja']=_0xccae86;}},_0x2a7126=_0x2aacd3=>{_0x5f554c['ts'][_0x2aacd3]=_0x55c58e();},_0x6190d9=(_0x4b8b9a,_0x39ce0d)=>{var _0x48141e=_0x328bec;let _0x241899=_0x5f554c['ts'][_0x39ce0d];if(delete _0x5f554c['ts'][_0x39ce0d],_0x241899){let _0x1589a5=_0x1b07b2(_0x241899,_0x55c58e());_0x159082(_0x2718cd(_0x48141e(0x28d),_0x4b8b9a,_0x2cd226(),_0x217436,[_0x1589a5],_0x39ce0d));}},_0x2ae855=_0x40b04f=>{var _0x5530db=_0x328bec,_0x163aad;return _0x193232===_0x5530db(0x208)&&_0x41edbb['origin']&&((_0x163aad=_0x40b04f==null?void 0x0:_0x40b04f[_0x5530db(0x2b0)])==null?void 0x0:_0x163aad['length'])&&(_0x40b04f[_0x5530db(0x2b0)][0x0][_0x5530db(0x29b)]=_0x41edbb[_0x5530db(0x29b)]),_0x40b04f;};_0x41edbb['_console_ninja']={'consoleLog':(_0xcdac44,_0x49a38d)=>{var _0x380c53=_0x328bec;_0x41edbb[_0x380c53(0x1b3)][_0x380c53(0x219)][_0x380c53(0x1d3)]!==_0x380c53(0x1e3)&&_0x159082(_0x2718cd(_0x380c53(0x219),_0xcdac44,_0x2cd226(),_0x217436,_0x49a38d));},'consoleTrace':(_0x4ae7de,_0x1c3fa5)=>{var _0x331167=_0x328bec,_0x5b578d,_0x15c8c6;_0x41edbb[_0x331167(0x1b3)][_0x331167(0x219)]['name']!==_0x331167(0x251)&&((_0x15c8c6=(_0x5b578d=_0x41edbb[_0x331167(0x258)])==null?void 0x0:_0x5b578d['versions'])!=null&&_0x15c8c6[_0x331167(0x1e7)]&&(_0x41edbb['_ninjaIgnoreNextError']=!0x0),_0x159082(_0x2ae855(_0x2718cd(_0x331167(0x215),_0x4ae7de,_0x2cd226(),_0x217436,_0x1c3fa5))));},'consoleError':(_0xa1808c,_0x49bd48)=>{var _0x375d16=_0x328bec;_0x41edbb[_0x375d16(0x1d8)]=!0x0,_0x159082(_0x2ae855(_0x2718cd(_0x375d16(0x2a2),_0xa1808c,_0x2cd226(),_0x217436,_0x49bd48)));},'consoleTime':_0x32b043=>{_0x2a7126(_0x32b043);},'consoleTimeEnd':(_0x3cc349,_0x481352)=>{_0x6190d9(_0x481352,_0x3cc349);},'autoLog':(_0x2653f8,_0x5ef56c)=>{var _0x7f57ff=_0x328bec;_0x159082(_0x2718cd(_0x7f57ff(0x219),_0x5ef56c,_0x2cd226(),_0x217436,[_0x2653f8]));},'autoLogMany':(_0x2a6453,_0x1e7eea)=>{var _0x5ee2bd=_0x328bec;_0x159082(_0x2718cd(_0x5ee2bd(0x219),_0x2a6453,_0x2cd226(),_0x217436,_0x1e7eea));},'autoTrace':(_0x2144f3,_0x36cfc5)=>{_0x159082(_0x2ae855(_0x2718cd('trace',_0x36cfc5,_0x2cd226(),_0x217436,[_0x2144f3])));},'autoTraceMany':(_0x3ce65f,_0x4f40c3)=>{var _0x273171=_0x328bec;_0x159082(_0x2ae855(_0x2718cd(_0x273171(0x215),_0x3ce65f,_0x2cd226(),_0x217436,_0x4f40c3)));},'autoTime':(_0x10cbb8,_0x396cf2,_0x9ed779)=>{_0x2a7126(_0x9ed779);},'autoTimeEnd':(_0x1ad158,_0x56c01d,_0x591bd6)=>{_0x6190d9(_0x56c01d,_0x591bd6);},'coverage':_0x69ebeb=>{var _0x326f3f=_0x328bec;_0x159082({'method':_0x326f3f(0x261),'version':_0x2168ce,'args':[{'id':_0x69ebeb}]});}};let _0x159082=H(_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x4d8f7f,_0x42531a),_0x217436=_0x41edbb[_0x328bec(0x25b)];return _0x41edbb['_console_ninja'];})(globalThis,'127.0.0.1',_0x170d0d(0x226),\"/Users/interlink/.vscode/extensions/wallabyjs.console-ninja-1.0.500/node_modules\",'next.js',_0x170d0d(0x247),_0x170d0d(0x221),_0x170d0d(0x1e6),_0x170d0d(0x1c8),_0x170d0d(0x289),_0x170d0d(0x26d),_0x170d0d(0x297));");
    } catch (e) {
        console.error(e);
    }
}
; /* istanbul ignore next */ 
function oo_oo(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tr(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tx(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_ts(/**@type{any}**/ v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_te(/**@type{any}**/ v, /**@type{any}**/ i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
}),
"[project]/src/app/components/dashboard/MyTasks.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AvailabilityManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function AvailabilityManager({ session }) {
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProfile, setEditingProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchProfiles = async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/dashboard/availability');
            if (!res.ok) throw new Error('Failed to fetch your work profiles.');
            const data = await res.json();
            setProfiles(data.profiles || []);
        } catch (err) {
            setError(err.message);
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProfiles();
    }, []);
    const handleEdit = (profile)=>{
        setEditingProfile(profile);
        setShowForm(true);
    };
    const handleAddNew = ()=>{
        setEditingProfile(null);
        setShowForm(true);
    };
    const handleFormClose = ()=>{
        setEditingProfile(null);
        setShowForm(false);
    };
    const handleDelete = async (profileId)=>{
        const originalProfiles = [
            ...profiles
        ];
        setProfiles((currentProfiles)=>currentProfiles.filter((p)=>p._id !== profileId));
        try {
            const res = await fetch('/api/dashboard/availability', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    profileId
                })
            });
            if (!res.ok) throw new Error('Failed to delete profile.');
        } catch (err) {
            setProfiles(originalProfiles);
            alert('An error occurred while deleting the profile.');
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "mx-auto animate-spin text-slate-500",
                size: 32
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
            lineNumber: 84,
            columnNumber: 7
        }, this);
    }
    if (showForm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkSetupForm, {
            session: session,
            editingProfile: editingProfile,
            profiles: profiles,
            onFormClose: handleFormClose,
            onProfileAdded: fetchProfiles
        }, void 0, false, {
            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm w-full max-w-3xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6 pb-4 border-b border-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-800",
                        children: "Your Work Profiles"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddNew,
                        className: "flex items-center gap-2 px-4 py-2 rounded-md transition duration-200 text-sm font-semibold bg-slate-800 text-white hover:bg-slate-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            " Add New Profile"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600 mb-4 text-center",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 115,
                columnNumber: 17
            }, this),
            profiles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: profiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileCard, {
                        profile: profile,
                        onEdit: handleEdit,
                        onDelete: handleDelete
                    }, profile._id, false, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 117,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 border-2 border-dashed border-slate-200 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                        className: "mx-auto text-slate-400",
                        size: 48
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-4 text-lg font-semibold text-slate-700",
                        children: "No work profiles found."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-slate-500",
                        children: 'Click "Add New Profile" to set up your first location.'
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function ProfileCard({ profile, onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        className: "p-4 border border-slate-200 rounded-lg group hover:bg-slate-50/50 transition-colors",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 flex-grow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-slate-800 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    size: 14,
                                    className: "text-slate-500 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                profile.fullAddress
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-sm font-bold bg-slate-800 text-white px-3 py-1 rounded-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    profile.skill
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-600 space-y-1 pt-2",
                            children: [
                                profile.workScope?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Scope:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        profile.workScope.join(', ')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                profile.workDays?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Days:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        profile.workDays.join(', ')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onEdit(profile),
                            className: "p-2 text-slate-500 hover:text-blue-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onDelete(profile._id),
                            className: "p-2 text-slate-500 hover:text-red-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
function WorkSetupForm({ session, editingProfile, profiles, onFormClose, onProfileAdded }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profileLoading, setProfileLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [locationData, setLocationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullAddress: '',
        city: '',
        coordinates: null
    });
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const debounceTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [availabilityData, setAvailabilityData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        workScope: [],
        workDays: [],
        skill: '',
        workDetails: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchProfile() {
            if (!session?.user) return;
            try {
                const res = await fetch('/api/dashboard/profile');
                if (!res.ok) throw new Error('Could not fetch profile.');
                const data = await res.json();
                setUserProfile(data.user);
            } catch (err) {
                setError('Failed to load your user profile.');
            } finally{
                setProfileLoading(false);
            }
        }
        fetchProfile();
        if (editingProfile) {
            setLocationData({
                fullAddress: editingProfile.fullAddress,
                city: editingProfile.city,
                coordinates: {
                    lng: editingProfile.location.coordinates[0],
                    lat: editingProfile.location.coordinates[1]
                }
            });
            setSearchQuery(editingProfile.fullAddress);
            setAvailabilityData({
                workScope: editingProfile.workScope || [],
                workDays: editingProfile.workDays || [],
                skill: editingProfile.skill,
                workDetails: editingProfile.workDetails || ''
            });
        }
    }, [
        editingProfile,
        session
    ]);
    const handleNext = ()=>setStep((prev)=>prev + 1);
    const handleBack = ()=>setStep((prev)=>prev - 1);
    const handleSearchChange = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        setError(null);
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }
        setIsSearching(true);
        debounceTimeout.current = setTimeout(async ()=>{
            try {
                const params = new URLSearchParams({
                    q: query,
                    format: 'json',
                    addressdetails: 1,
                    limit: 5
                });
                const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`);
                const data = await response.json();
                setSuggestions(data || []);
            } catch (err) {
                setError('Failed to fetch address suggestions.');
            } finally{
                setIsSearching(false);
            }
        }, 500);
    };
    const handleSuggestionClick = (suggestion)=>{
        const suggestionCity = suggestion.address.city || suggestion.address.town || suggestion.address.village;
        if (userProfile?.city && suggestionCity !== userProfile.city) {
            setError(`Please select an address within your registered city: ${userProfile.city}.`);
            setSuggestions([]);
            return;
        }
        setLocationData({
            fullAddress: suggestion.display_name,
            city: suggestionCity,
            coordinates: {
                lat: parseFloat(suggestion.lat),
                lng: parseFloat(suggestion.lon)
            }
        });
        setSearchQuery(suggestion.display_name);
        setSuggestions([]);
    };
    const handleScopeChange = (scope)=>setAvailabilityData((prev)=>({
                ...prev,
                workScope: prev.workScope.includes(scope) ? prev.workScope.filter((s)=>s !== scope) : [
                    ...prev.workScope,
                    scope
                ]
            }));
    const handleDayChange = (day)=>setAvailabilityData((prev)=>({
                ...prev,
                workDays: prev.workDays.includes(day) ? prev.workDays.filter((d)=>d !== day) : [
                    ...prev.workDays,
                    day
                ]
            }));
    const handleSkillChange = (skill)=>setAvailabilityData((prev)=>({
                ...prev,
                skill
            }));
    const handleSubmit = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const isEditing = !!editingProfile;
            const url = '/api/dashboard/availability';
            const method = isEditing ? 'PUT' : 'POST';
            const payload = {
                locationData,
                availabilityData,
                ...isEditing && {
                    profileId: editingProfile._id
                }
            };
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Something went wrong.');
            await onProfileAdded();
            onFormClose();
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    };
    const STEPS = [
        {
            num: 1,
            title: 'Location',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
        },
        {
            num: 2,
            title: 'Schedule',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            num: 3,
            title: 'Skill',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"]
        },
        {
            num: 4,
            title: 'Details',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
        }
    ];
    const SCOPE_OPTIONS = [
        'Small Tasks (1-2 hours)',
        'Medium Tasks (2-4 hours)',
        'Large Projects (4+ hours)'
    ];
    const DAY_OPTIONS = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    const usedSkills = profiles.map((p)=>p.skill);
    if (profileLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "mx-auto animate-spin text-slate-500"
        }, void 0, false, {
            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
            lineNumber: 385,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
        lineNumber: 384,
        columnNumber: 7
    }, this);
    if (!userProfile?.city) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg border border-red-200 w-full max-w-2xl mx-auto text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "mx-auto text-red-500 mb-4",
                size: 40
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 391,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold text-slate-800",
                children: "Primary City Not Set"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 392,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-600 mt-2",
                children: "Please go to your main profile and set your primary work city first."
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 395,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
        lineNumber: 390,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm w-full max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-800 mb-2",
                        children: editingProfile ? 'Edit Work Profile' : 'Add New Work Profile'
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onFormClose,
                        className: "text-sm font-semibold text-slate-600 hover:text-slate-800",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-500 mb-6",
                children: editingProfile ? 'Update the details for this profile.' : 'Create a new profile for a specific location and skill.'
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2 mb-8",
                children: STEPS.map((s, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${step >= s.num ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-500'}`,
                                children: step > s.num ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 429,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 429,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `ml-2 text-xs sm:text-sm font-semibold transition-colors duration-300 ${step >= s.num ? 'text-slate-800' : 'text-slate-500'}`,
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this),
                            index < STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-0.5 w-full transition-colors duration-300 ml-2 ${step > s.num ? 'bg-slate-800' : 'bg-slate-200'}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this)
                        ]
                    }, s.num, true, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -50
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: [
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "location",
                                    className: "block text-sm font-semibold text-slate-700",
                                    children: "Enter your precise work address"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500",
                                    children: [
                                        "This must be within your registered city:",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: userProfile.city
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 466,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 469,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "location",
                                            placeholder: "Start typing your address...",
                                            value: searchQuery,
                                            onChange: handleSearchChange,
                                            className: "w-full p-3 pl-10 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this),
                                        isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 animate-spin",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 482,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: suggestions?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].ul, {
                                        initial: {
                                            opacity: 0,
                                            height: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            height: 'auto'
                                        },
                                        exit: {
                                            opacity: 0,
                                            height: 0
                                        },
                                        className: "border border-slate-200 rounded-md bg-white shadow-lg mt-1 max-h-48 overflow-y-auto",
                                        children: suggestions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                onClick: ()=>handleSuggestionClick(s),
                                                className: "p-3 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 border-b border-slate-100 last:border-b-0",
                                                children: s.display_name
                                            }, s.place_id, false, {
                                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                                lineNumber: 497,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                        lineNumber: 490,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 457,
                            columnNumber: 13
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700 mb-2",
                                            children: "What is the scope of work you're available for?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 513,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: SCOPE_OPTIONS.map((scope)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleScopeChange(scope),
                                                    className: `px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-200 ${availabilityData.workScope.includes(scope) ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'}`,
                                                    children: scope
                                                }, scope, false, {
                                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                                    lineNumber: 518,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 516,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 512,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700 mb-2",
                                            children: "Which days are you generally free?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                            children: DAY_OPTIONS.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDayChange(day),
                                                    className: `px-4 py-3 text-sm font-medium rounded-md border-2 transition-all duration-200 flex items-center justify-center gap-2 ${availabilityData.workDays.includes(day) ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'}`,
                                                    children: [
                                                        availabilityData.workDays.includes(day) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                                            lineNumber: 548,
                                                            columnNumber: 25
                                                        }, this),
                                                        ' ',
                                                        day
                                                    ]
                                                }, day, true, {
                                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                                    lineNumber: 538,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 536,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 511,
                            columnNumber: 13
                        }, this),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-slate-700 mb-2",
                                    children: "Which skill will you offer for this profile?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this),
                                userProfile?.skills?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: userProfile.skills.map((skill)=>{
                                        const isUsed = usedSkills.includes(skill);
                                        const isCurrent = skill === editingProfile?.skill;
                                        const isDisabled = isUsed && !isCurrent;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSkillChange(skill),
                                            disabled: isDisabled,
                                            className: `px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-200 flex items-center gap-2 ${availabilityData.skill === skill ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-200'} ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-slate-400'}`,
                                            children: [
                                                availabilityData.skill === skill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                                    lineNumber: 584,
                                                    columnNumber: 27
                                                }, this),
                                                skill
                                            ]
                                        }, skill, true, {
                                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                            lineNumber: 569,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 563,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 p-4 bg-slate-50 rounded-md",
                                    children: "You haven't added any skills to your main profile yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 592,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this),
                        step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "details",
                                    className: "block text-sm font-semibold text-slate-700",
                                    children: "Do you have any specific tools or requirements to mention?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 600,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "details",
                                    rows: "4",
                                    value: availabilityData.workDetails,
                                    onChange: (e)=>setAvailabilityData({
                                            ...availabilityData,
                                            workDetails: e.target.value
                                        }),
                                    placeholder: "e.g., I have my own ladder and power tools...",
                                    className: "w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 606,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 599,
                            columnNumber: 13
                        }, this)
                    ]
                }, step, true, {
                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                    lineNumber: 449,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 pt-4 border-t border-slate-200 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: step > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleBack,
                            className: "flex items-center gap-2 px-4 py-2 rounded-md transition duration-200 text-sm font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                    lineNumber: 630,
                                    columnNumber: 15
                                }, this),
                                " Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 626,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 624,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            step < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNext,
                                disabled: step === 1 && !locationData.coordinates || step === 3 && !availabilityData.skill,
                                className: "flex items-center gap-2 px-4 py-2 rounded-md transition duration-200 text-sm font-semibold bg-slate-800 text-white hover:bg-slate-900 disabled:bg-slate-400 disabled:cursor-not-allowed",
                                children: [
                                    "Next ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                        lineNumber: 644,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this),
                            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: loading,
                                className: "flex items-center gap-2 px-6 py-2 rounded-md transition duration-200 text-sm font-semibold bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400",
                                children: [
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 16,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                        lineNumber: 654,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                        lineNumber: 656,
                                        columnNumber: 17
                                    }, this),
                                    loading ? 'Saving...' : editingProfile ? 'Update Profile' : 'Save Profile'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                                lineNumber: 648,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-sm min-h-[20px]",
                children: error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                            lineNumber: 670,
                            columnNumber: 13
                        }, this),
                        " ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                    lineNumber: 669,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/MyTasks.js",
                lineNumber: 667,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/MyTasks.js",
        lineNumber: 402,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/dashboard/AccountSecurity.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AccountSecurity
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key.js [app-ssr] (ecmascript) <export default as Key>");
"use client";
;
;
;
function AccountSecurity({ session }) {
    const [passwords, setPasswords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [passwordMessage, setPasswordMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        text: "",
        type: ""
    });
    const [twoFA, setTwoFA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ✅ Fetch current user details on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUserData = async ()=>{
            try {
                const res = await fetch("/api/dashboard/profile");
                const data = await res.json();
                if (data.user) {
                    setTwoFA(data.user.twoFA);
                }
            } catch (err) {
                /* eslint-disable */ console.error(...oo_tx(`3593839808_26_8_26_50_11`, "Error fetching user:", err));
            }
        };
        fetchUserData();
    }, []);
    // ✅ Handle password input
    const handlePasswordInputChange = (e)=>{
        const { name, value } = e.target;
        setPasswords({
            ...passwords,
            [name]: value
        });
        if (passwordMessage.text) {
            setPasswordMessage({
                text: "",
                type: ""
            });
        }
    };
    // ✅ Handle password change (calls backend)
    const handlePasswordChange = async (e)=>{
        e.preventDefault();
        if (!passwords.currentPassword || !passwords.newPassword) {
            setPasswordMessage({
                text: "Please fill out all password fields.",
                type: "error"
            });
            return;
        }
        if (passwords.newPassword !== passwords.confirmPassword) {
            setPasswordMessage({
                text: "New passwords do not match.",
                type: "error"
            });
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/dashboard/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    currentPassword: passwords.currentPassword,
                    newPassword: passwords.newPassword
                })
            });
            const data = await res.json();
            if (res.ok) {
                setPasswordMessage({
                    text: data.message,
                    type: "success"
                });
                setPasswords({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                });
            } else {
                setPasswordMessage({
                    text: data.error || "Update failed.",
                    type: "error"
                });
            }
        } catch (err) {
            setPasswordMessage({
                text: "An error occurred.",
                type: "error"
            });
        } finally{
            setLoading(false);
            setTimeout(()=>setPasswordMessage({
                    text: "",
                    type: ""
                }), 3000);
        }
    };
    // ✅ Handle 2FA toggle (calls backend)
    const handleToggle2FA = async ()=>{
        const newTwoFA = !twoFA;
        setTwoFA(newTwoFA);
        try {
            const res = await fetch("/api/dashboard/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    twoFA: newTwoFA
                })
            });
            const data = await res.json();
            if (!res.ok) {
                alert(data.error || "Failed to update 2FA status.");
                setTwoFA(!newTwoFA); // revert if failed
            }
        } catch (err) {
            /* eslint-disable */ console.error(...oo_tx(`3593839808_103_6_103_46_11`, "2FA update failed:", err));
            setTwoFA(!newTwoFA); // revert if failed
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg border border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-1",
                        children: "Change Password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500 mb-6",
                        children: "Update your password for enhanced security."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handlePasswordChange,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600",
                                        children: "Current Password"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        name: "currentPassword",
                                        value: passwords.currentPassword,
                                        onChange: handlePasswordInputChange,
                                        className: "mt-1 block w-full md:max-w-sm px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600",
                                        children: "New Password"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        name: "newPassword",
                                        value: passwords.newPassword,
                                        onChange: handlePasswordInputChange,
                                        className: "mt-1 block w-full md:max-w-sm px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-600",
                                        children: "Confirm New Password"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        name: "confirmPassword",
                                        value: passwords.confirmPassword,
                                        onChange: handlePasswordInputChange,
                                        className: "mt-1 block w-full md:max-w-sm px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: `flex items-center gap-2 px-4 py-2 rounded-md transition duration-200 text-sm font-semibold ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-slate-800 hover:bg-slate-900 text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            loading ? "Updating..." : "Update Password"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    passwordMessage.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm ${passwordMessage.type === "success" ? "text-green-600" : "text-red-600"}`,
                                        children: passwordMessage.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "my-8 border-slate-200"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 mb-1",
                        children: "Two-Factor Authentication (2FA)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500 mb-4",
                        children: "Add an extra layer of security to your account during login."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 bg-slate-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-slate-800",
                                        children: "Enable 2FA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm ${twoFA ? "text-green-600" : "text-slate-500"}`,
                                        children: twoFA ? "Currently Enabled" : "Currently Disabled"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleToggle2FA,
                                className: `relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 ${twoFA ? "bg-slate-800" : "bg-slate-200"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${twoFA ? "translate-x-6" : "translate-x-1"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/AccountSecurity.js",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x170d0d=_0x49f3;function _0x49f3(_0x31d1b1,_0x501ca7){var _0x445485=_0x4454();return _0x49f3=function(_0x49f329,_0x2d53d7){_0x49f329=_0x49f329-0x1a9;var _0x1c5fc3=_0x445485[_0x49f329];return _0x1c5fc3;},_0x49f3(_0x31d1b1,_0x501ca7);}(function(_0x3e6b2f,_0x209b9d){var _0x381a5c=_0x49f3,_0x336573=_0x3e6b2f();while(!![]){try{var _0x1df70e=-parseInt(_0x381a5c(0x1c5))/0x1+parseInt(_0x381a5c(0x238))/0x2+parseInt(_0x381a5c(0x24b))/0x3*(parseInt(_0x381a5c(0x22b))/0x4)+parseInt(_0x381a5c(0x1c7))/0x5+parseInt(_0x381a5c(0x244))/0x6*(-parseInt(_0x381a5c(0x227))/0x7)+parseInt(_0x381a5c(0x1d2))/0x8*(-parseInt(_0x381a5c(0x1e2))/0x9)+-parseInt(_0x381a5c(0x2b4))/0xa*(-parseInt(_0x381a5c(0x27b))/0xb);if(_0x1df70e===_0x209b9d)break;else _0x336573['push'](_0x336573['shift']());}catch(_0x4e1f13){_0x336573['push'](_0x336573['shift']());}}}(_0x4454,0x8b4d3));function z(_0x46c369,_0x31bb7a,_0x4c2165,_0x15337b,_0x26fe7a,_0x369e96){var _0x26a750=_0x49f3,_0x3552c5,_0xc19f1b,_0x4f9181,_0x1b225e;this[_0x26a750(0x23b)]=_0x46c369,this[_0x26a750(0x2a0)]=_0x31bb7a,this['port']=_0x4c2165,this['nodeModules']=_0x15337b,this['dockerizedApp']=_0x26fe7a,this[_0x26a750(0x1f7)]=_0x369e96,this['_allowedToSend']=!0x0,this[_0x26a750(0x293)]=!0x0,this[_0x26a750(0x210)]=!0x1,this['_connecting']=!0x1,this[_0x26a750(0x1f0)]=((_0xc19f1b=(_0x3552c5=_0x46c369[_0x26a750(0x258)])==null?void 0x0:_0x3552c5['env'])==null?void 0x0:_0xc19f1b[_0x26a750(0x225)])===_0x26a750(0x22d),this[_0x26a750(0x1f6)]=!((_0x1b225e=(_0x4f9181=this[_0x26a750(0x23b)]['process'])==null?void 0x0:_0x4f9181[_0x26a750(0x21b)])!=null&&_0x1b225e[_0x26a750(0x1e7)])&&!this[_0x26a750(0x1f0)],this[_0x26a750(0x269)]=null,this[_0x26a750(0x288)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x26a750(0x239),this[_0x26a750(0x1ca)]=(this[_0x26a750(0x1f6)]?_0x26a750(0x2a4):_0x26a750(0x262))+this[_0x26a750(0x275)];}z[_0x170d0d(0x232)][_0x170d0d(0x2b9)]=async function(){var _0xef2b79=_0x170d0d,_0x3bc0c0,_0x2a58e9;if(this[_0xef2b79(0x269)])return this['_WebSocketClass'];let _0x3e8284;if(this['_inBrowser']||this[_0xef2b79(0x1f0)])_0x3e8284=this['global']['WebSocket'];else{if((_0x3bc0c0=this[_0xef2b79(0x23b)][_0xef2b79(0x258)])!=null&&_0x3bc0c0[_0xef2b79(0x214)])_0x3e8284=(_0x2a58e9=this[_0xef2b79(0x23b)]['process'])==null?void 0x0:_0x2a58e9['_WebSocket'];else try{_0x3e8284=(await new Function('path',_0xef2b79(0x1ec),_0xef2b79(0x276),_0xef2b79(0x21a))(await(0x0,eval)('import(\\x27path\\x27)'),await(0x0,eval)(_0xef2b79(0x1a9)),this[_0xef2b79(0x276)]))[_0xef2b79(0x207)];}catch{try{_0x3e8284=require(require(_0xef2b79(0x299))[_0xef2b79(0x22c)](this['nodeModules'],'ws'));}catch{throw new Error(_0xef2b79(0x220));}}}return this[_0xef2b79(0x269)]=_0x3e8284,_0x3e8284;},z[_0x170d0d(0x232)]['_connectToHostNow']=function(){var _0x30469d=_0x170d0d;this[_0x30469d(0x295)]||this['_connected']||this['_connectAttemptCount']>=this[_0x30469d(0x26c)]||(this[_0x30469d(0x293)]=!0x1,this['_connecting']=!0x0,this[_0x30469d(0x288)]++,this[_0x30469d(0x216)]=new Promise((_0x4fb164,_0x61e3a7)=>{var _0x19d02a=_0x30469d;this['getWebSocketClass']()[_0x19d02a(0x1c0)](_0xa8f3bc=>{var _0x3f4a7a=_0x19d02a;let _0x541589=new _0xa8f3bc(_0x3f4a7a(0x1bc)+(!this[_0x3f4a7a(0x1f6)]&&this['dockerizedApp']?'gateway.docker.internal':this[_0x3f4a7a(0x2a0)])+':'+this[_0x3f4a7a(0x235)]);_0x541589[_0x3f4a7a(0x2b6)]=()=>{var _0x568210=_0x3f4a7a;this[_0x568210(0x1e8)]=!0x1,this[_0x568210(0x283)](_0x541589),this[_0x568210(0x260)](),_0x61e3a7(new Error('logger\\x20websocket\\x20error'));},_0x541589[_0x3f4a7a(0x1c6)]=()=>{var _0x1b163d=_0x3f4a7a;this[_0x1b163d(0x1f6)]||_0x541589[_0x1b163d(0x285)]&&_0x541589[_0x1b163d(0x285)][_0x1b163d(0x1d0)]&&_0x541589[_0x1b163d(0x285)]['unref'](),_0x4fb164(_0x541589);},_0x541589['onclose']=()=>{var _0x2e5602=_0x3f4a7a;this['_allowedToConnectOnSend']=!0x0,this[_0x2e5602(0x283)](_0x541589),this[_0x2e5602(0x260)]();},_0x541589[_0x3f4a7a(0x1df)]=_0x1976f8=>{var _0x51fa89=_0x3f4a7a;try{if(!(_0x1976f8!=null&&_0x1976f8['data'])||!this[_0x51fa89(0x1f7)])return;let _0x576932=JSON['parse'](_0x1976f8[_0x51fa89(0x278)]);this['eventReceivedCallback'](_0x576932[_0x51fa89(0x1d4)],_0x576932[_0x51fa89(0x2b0)],this['global'],this['_inBrowser']);}catch{}};})['then'](_0x17ad28=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x19d02a(0x1e8)]=!0x0,this['_connectAttemptCount']=0x0,_0x17ad28))[_0x19d02a(0x1f3)](_0x635f5e=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x19d02a(0x29a)](_0x19d02a(0x2a9)+this[_0x19d02a(0x275)]),_0x61e3a7(new Error(_0x19d02a(0x240)+(_0x635f5e&&_0x635f5e[_0x19d02a(0x1e5)])))));}));},z['prototype'][_0x170d0d(0x283)]=function(_0x787daa){var _0x565917=_0x170d0d;this[_0x565917(0x210)]=!0x1,this[_0x565917(0x295)]=!0x1;try{_0x787daa[_0x565917(0x1c4)]=null,_0x787daa[_0x565917(0x2b6)]=null,_0x787daa['onopen']=null;}catch{}try{_0x787daa[_0x565917(0x270)]<0x2&&_0x787daa[_0x565917(0x1fb)]();}catch{}},z[_0x170d0d(0x232)][_0x170d0d(0x260)]=function(){var _0x2433af=_0x170d0d;clearTimeout(this[_0x2433af(0x267)]),!(this['_connectAttemptCount']>=this[_0x2433af(0x26c)])&&(this[_0x2433af(0x267)]=setTimeout(()=>{var _0x503eaf=_0x2433af,_0x5b7f82;this['_connected']||this[_0x503eaf(0x295)]||(this[_0x503eaf(0x27c)](),(_0x5b7f82=this[_0x503eaf(0x216)])==null||_0x5b7f82[_0x503eaf(0x1f3)](()=>this[_0x503eaf(0x260)]()));},0x1f4),this[_0x2433af(0x267)][_0x2433af(0x1d0)]&&this[_0x2433af(0x267)][_0x2433af(0x1d0)]());},z[_0x170d0d(0x232)]['send']=async function(_0x35791f){var _0x516b18=_0x170d0d;try{if(!this['_allowedToSend'])return;this[_0x516b18(0x293)]&&this[_0x516b18(0x27c)](),(await this[_0x516b18(0x216)])[_0x516b18(0x26a)](JSON['stringify'](_0x35791f));}catch(_0x39ff3f){this[_0x516b18(0x1f4)]?console[_0x516b18(0x29a)](this['_sendErrorMessage']+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)])):(this[_0x516b18(0x1f4)]=!0x0,console[_0x516b18(0x29a)](this[_0x516b18(0x1ca)]+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)]),_0x35791f)),this[_0x516b18(0x1e8)]=!0x1,this[_0x516b18(0x260)]();}};function H(_0x4a9673,_0x59dab2,_0x2e78dc,_0x18d211,_0x50b318,_0x1b12d1,_0x5be49f,_0x25b9f9=ne){var _0x17e373=_0x170d0d;let _0x46bfe9=_0x2e78dc['split'](',')[_0x17e373(0x24e)](_0x22f653=>{var _0x1d1f66=_0x17e373,_0x1f6dbf,_0x5da8e1,_0x568148,_0x3d0db9,_0x5fb235,_0x6995d1,_0x68cb4,_0x301fa9;try{if(!_0x4a9673[_0x1d1f66(0x25b)]){let _0x33755b=((_0x5da8e1=(_0x1f6dbf=_0x4a9673['process'])==null?void 0x0:_0x1f6dbf['versions'])==null?void 0x0:_0x5da8e1[_0x1d1f66(0x1e7)])||((_0x3d0db9=(_0x568148=_0x4a9673[_0x1d1f66(0x258)])==null?void 0x0:_0x568148[_0x1d1f66(0x2a6)])==null?void 0x0:_0x3d0db9['NEXT_RUNTIME'])==='edge';(_0x50b318===_0x1d1f66(0x208)||_0x50b318===_0x1d1f66(0x218)||_0x50b318===_0x1d1f66(0x1db)||_0x50b318===_0x1d1f66(0x1fa))&&(_0x50b318+=_0x33755b?'\\x20server':_0x1d1f66(0x1bb));let _0x3fab9d='';_0x50b318===_0x1d1f66(0x205)&&(_0x3fab9d=(((_0x68cb4=(_0x6995d1=(_0x5fb235=_0x4a9673[_0x1d1f66(0x222)])==null?void 0x0:_0x5fb235[_0x1d1f66(0x298)])==null?void 0x0:_0x6995d1[_0x1d1f66(0x1f8)])==null?void 0x0:_0x68cb4[_0x1d1f66(0x28f)])||_0x1d1f66(0x2a3))[_0x1d1f66(0x277)](),_0x3fab9d&&(_0x50b318+='\\x20'+_0x3fab9d,(_0x3fab9d===_0x1d1f66(0x1f1)||_0x3fab9d===_0x1d1f66(0x2a3)&&((_0x301fa9=_0x4a9673[_0x1d1f66(0x1ac)])==null?void 0x0:_0x301fa9['hostname'])===_0x1d1f66(0x255))&&(_0x59dab2=_0x1d1f66(0x255)))),_0x4a9673[_0x1d1f66(0x25b)]={'id':+new Date(),'tool':_0x50b318},_0x5be49f&&_0x50b318&&!_0x33755b&&(_0x3fab9d?console['log'](_0x1d1f66(0x23c)+_0x3fab9d+_0x1d1f66(0x1fe)):console[_0x1d1f66(0x219)](_0x1d1f66(0x21e)+(_0x50b318[_0x1d1f66(0x268)](0x0)[_0x1d1f66(0x1ee)]()+_0x50b318[_0x1d1f66(0x23a)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x1d1f66(0x202)));}let _0x723bc9=new z(_0x4a9673,_0x59dab2,_0x22f653,_0x18d211,_0x1b12d1,_0x25b9f9);return _0x723bc9[_0x1d1f66(0x26a)][_0x1d1f66(0x1d9)](_0x723bc9);}catch(_0x1dcae0){return console[_0x1d1f66(0x29a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1dcae0&&_0x1dcae0['message']),()=>{};}});return _0x4074f0=>_0x46bfe9['forEach'](_0x3b1e24=>_0x3b1e24(_0x4074f0));}function ne(_0x308454,_0x1d36b1,_0x392c69,_0x127166){var _0x34f168=_0x170d0d;_0x127166&&_0x308454===_0x34f168(0x1cb)&&_0x392c69[_0x34f168(0x1ac)]['reload']();}function _0x4454(){var _0x5027dc=['failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','1765348406604','expo','null','resolveGetters','NEXT_RUNTIME','52145','4071333UxBIEf','some','_property','_Symbol','184hpAoHa','join','edge','hasOwnProperty','_processTreeNodeResult','current','get','prototype','match','expId','port','now','_p_name','35414wrIIFK','https://tinyurl.com/37x8b79t','substr','global','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reducePolicy','valueOf','isArray','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_getOwnPropertyNames','_capIfString','set','6GlIwoZ','noFunctions','_consoleNinjaAllowedToStart','1.0.0','_p_length','_propertyName','symbol','28347HVtbJl','length','_treeNodePropertiesAfterFullValue','map','test','push','disabledTrace','stackTraceLimit','reduceOnAccumulatedProcessingTimeMs','_setNodeQueryPath','10.0.2.2','getOwnPropertyNames','_addObjectProperty','process','getter','bound\\x20Promise','_console_ninja_session','expressionsToEvaluate','[object\\x20BigInt]','timeStamp','_cleanNode','_attemptToReconnectShortly','coverage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','includes','NEGATIVE_INFINITY','bigint','replace','_reconnectTimeout','charAt','_WebSocketClass','send','forEach','_maxConnectAttemptCount','1','_setNodeExpandableState','autoExpandLimit','readyState','_numberRegExp','elements','_setNodeExpressionPath','level','_webSocketErrorDocsLink','nodeModules','toLowerCase','data','iterator','_p_','23771zalruo','_connectToHostNow','allStrLength','elapsed','ninjaSuppressConsole','_console_ninja','resetOnProcessingTimeAverageMs','nan','_disposeWebsocket','_isPrimitiveType','_socket','props','_blacklistedProperty','_connectAttemptCount','','autoExpandPreviousObjects','constructor','value','time','unknown','osName','sort','_additionalMetadata','count','_allowedToConnectOnSend','call','_connecting','date',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'modules','path','warn','origin','_isMap','defaultLimits','Number','Boolean','host','concat','error','emulator','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','capped','env','cappedProps','root_exp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','number','negativeZero','_isArray','rootExpression','strLength','_isSet','args','_setNodePermissions','startsWith','_sortProps','3350IxDazF','reducedLimits','onerror','_dateToString','hits','getWebSocketClass','[object\\x20Map]','HTMLAllCollection','import(\\x27url\\x27)','fromCharCode','setter','location','pop','autoExpandMaxDepth','RegExp','serialize','getOwnPropertyDescriptor','toString','console','_isNegativeZero','[object\\x20Array]','resetWhenQuietMs','function','_getOwnPropertyDescriptor','Error','resolve','\\x20browser','ws://','_undefined','_hasMapOnItsPath','object','then','perf_hooks','negativeInfinity','Set','onclose','465187GsrXlm','onopen','5002750hodMWQ','','_treeNodePropertiesBeforeFullValue','_sendErrorMessage','reload','_isUndefined','cappedElements','endsWith','_quotedRegExp','unref','_objectToString','56PSTtkw','name','method','_hasSymbolPropertyOnItsPath','autoExpand','parent','_ninjaIgnoreNextError','bind','[object\\x20Date]','astro','autoExpandPropertyCount','getOwnPropertySymbols','totalStrLength','onmessage','_type','perLogpoint','719307uAMoSD','disabledLog','stack','message',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Waleed.local\",\"192.168.79.10\"],'node','_allowedToSend','undefined','sortProps','Map','url','_addProperty','toUpperCase','Promise','_inNextEdge','android','depth','catch','_extendedWarning','...','_inBrowser','eventReceivedCallback','ExpoDevice','root_exp_id','angular','close','_addFunctionsNode','POSITIVE_INFINITY',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','isExpressionToEvaluate','indexOf','_setNodeId','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceLimits','stringify','react-native','_HTMLAllCollection','default','next.js','hrtime','index','hostname','funcName','string','_getOwnPropertySymbols','_regExpToString','_connected','performance','Buffer','_isPrimitiveWrapperType','_WebSocket','trace','_ws','String','remix','log','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','versions','type','_setNodeLabel','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reduceOnCount'];_0x4454=function(){return _0x5027dc;};return _0x4454();}function b(_0x20b4df){var _0x341416=_0x170d0d,_0x5c3140,_0x279186;let _0x5e0593=function(_0x18f860,_0x56c571){return _0x56c571-_0x18f860;},_0xa8122e;if(_0x20b4df[_0x341416(0x211)])_0xa8122e=function(){var _0x4e82db=_0x341416;return _0x20b4df[_0x4e82db(0x211)]['now']();};else{if(_0x20b4df[_0x341416(0x258)]&&_0x20b4df[_0x341416(0x258)][_0x341416(0x209)]&&((_0x279186=(_0x5c3140=_0x20b4df[_0x341416(0x258)])==null?void 0x0:_0x5c3140[_0x341416(0x2a6)])==null?void 0x0:_0x279186[_0x341416(0x225)])!==_0x341416(0x22d))_0xa8122e=function(){var _0x37dd12=_0x341416;return _0x20b4df[_0x37dd12(0x258)]['hrtime']();},_0x5e0593=function(_0x23c14c,_0x154e92){return 0x3e8*(_0x154e92[0x0]-_0x23c14c[0x0])+(_0x154e92[0x1]-_0x23c14c[0x1])/0xf4240;};else try{let {performance:_0x60ea4e}=require(_0x341416(0x1c1));_0xa8122e=function(){var _0x53ab6d=_0x341416;return _0x60ea4e[_0x53ab6d(0x236)]();};}catch{_0xa8122e=function(){return+new Date();};}}return{'elapsed':_0x5e0593,'timeStamp':_0xa8122e,'now':()=>Date[_0x341416(0x236)]()};}function X(_0x32c56f,_0x303cdf,_0x1e9211){var _0x5cc213=_0x170d0d,_0x52c45e,_0x527212,_0x4abe95,_0x522168,_0x4d4988,_0x5da700,_0x56376a;if(_0x32c56f['_consoleNinjaAllowedToStart']!==void 0x0)return _0x32c56f[_0x5cc213(0x246)];let _0x36e85b=((_0x527212=(_0x52c45e=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x52c45e[_0x5cc213(0x21b)])==null?void 0x0:_0x527212[_0x5cc213(0x1e7)])||((_0x522168=(_0x4abe95=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x4abe95[_0x5cc213(0x2a6)])==null?void 0x0:_0x522168[_0x5cc213(0x225)])==='edge',_0x111b0e=!!(_0x1e9211==='react-native'&&((_0x4d4988=_0x32c56f[_0x5cc213(0x222)])==null?void 0x0:_0x4d4988[_0x5cc213(0x298)]));function _0x58872e(_0xa99034){var _0x43b74e=_0x5cc213;if(_0xa99034[_0x43b74e(0x2b2)]('/')&&_0xa99034[_0x43b74e(0x1ce)]('/')){let _0x53deaa=new RegExp(_0xa99034['slice'](0x1,-0x1));return _0x120a69=>_0x53deaa[_0x43b74e(0x24f)](_0x120a69);}else{if(_0xa99034[_0x43b74e(0x263)]('*')||_0xa99034[_0x43b74e(0x263)]('?')){let _0x47d203=new RegExp('^'+_0xa99034[_0x43b74e(0x266)](/\\./g,String[_0x43b74e(0x1aa)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x43b74e(0x266)](/\\?/g,'.')+String[_0x43b74e(0x1aa)](0x24));return _0x395f2f=>_0x47d203[_0x43b74e(0x24f)](_0x395f2f);}else return _0x15e080=>_0x15e080===_0xa99034;}}let _0x206953=_0x303cdf[_0x5cc213(0x24e)](_0x58872e);return _0x32c56f[_0x5cc213(0x246)]=_0x36e85b||!_0x303cdf,!_0x32c56f[_0x5cc213(0x246)]&&((_0x5da700=_0x32c56f[_0x5cc213(0x1ac)])==null?void 0x0:_0x5da700['hostname'])&&(_0x32c56f['_consoleNinjaAllowedToStart']=_0x206953[_0x5cc213(0x228)](_0x1d89c5=>_0x1d89c5(_0x32c56f[_0x5cc213(0x1ac)][_0x5cc213(0x20b)]))),_0x111b0e&&!_0x32c56f[_0x5cc213(0x246)]&&!((_0x56376a=_0x32c56f['location'])!=null&&_0x56376a['hostname'])&&(_0x32c56f[_0x5cc213(0x246)]=!0x0),_0x32c56f[_0x5cc213(0x246)];}function J(_0x367e2a,_0x56498a,_0x55bbfc,_0x1d4312,_0x3e1f78,_0x52ee0a){var _0x105bb6=_0x170d0d;_0x367e2a=_0x367e2a,_0x56498a=_0x56498a,_0x55bbfc=_0x55bbfc,_0x1d4312=_0x1d4312,_0x3e1f78=_0x3e1f78,_0x3e1f78=_0x3e1f78||{},_0x3e1f78[_0x105bb6(0x29d)]=_0x3e1f78[_0x105bb6(0x29d)]||{},_0x3e1f78['reducedLimits']=_0x3e1f78[_0x105bb6(0x2b5)]||{},_0x3e1f78[_0x105bb6(0x23d)]=_0x3e1f78[_0x105bb6(0x23d)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]=_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)]=_0x3e1f78['reducePolicy'][_0x105bb6(0x23b)]||{};let _0x18f631={'perLogpoint':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x21f)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x253)]||0x64,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['perLogpoint']['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0x3e1f78['reducePolicy'][_0x105bb6(0x1e1)][_0x105bb6(0x281)]||0x64},'global':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x21f)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)]['global'][_0x105bb6(0x253)]||0x12c,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['global']['resetWhenQuietMs']||0x32,'resetOnProcessingTimeAverageMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x281)]||0x64}},_0x173958=b(_0x367e2a),_0x14baa2=_0x173958[_0x105bb6(0x27e)],_0x15ddd1=_0x173958[_0x105bb6(0x25e)];function _0x5d0f9e(){var _0x4535fc=_0x105bb6;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4535fc(0x271)]=/^(0|[1-9][0-9]*)$/,this[_0x4535fc(0x1cf)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x367e2a[_0x4535fc(0x1e9)],this['_HTMLAllCollection']=_0x367e2a['HTMLAllCollection'],this[_0x4535fc(0x1b8)]=Object[_0x4535fc(0x1b1)],this[_0x4535fc(0x241)]=Object[_0x4535fc(0x256)],this['_Symbol']=_0x367e2a['Symbol'],this[_0x4535fc(0x20f)]=RegExp[_0x4535fc(0x232)][_0x4535fc(0x1b2)],this[_0x4535fc(0x2b7)]=Date[_0x4535fc(0x232)][_0x4535fc(0x1b2)];}_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b0)]=function(_0x51810f,_0x251ef9,_0x39494e,_0x442bc7){var _0x5e3337=_0x105bb6,_0x5b9963=this,_0x5e0af2=_0x39494e[_0x5e3337(0x1d6)];function _0x228c0e(_0x4bb7b6,_0x49d5eb,_0x3bdd2c){var _0x59344b=_0x5e3337;_0x49d5eb[_0x59344b(0x21c)]=_0x59344b(0x28e),_0x49d5eb['error']=_0x4bb7b6['message'],_0x14328f=_0x3bdd2c[_0x59344b(0x1e7)]['current'],_0x3bdd2c[_0x59344b(0x1e7)][_0x59344b(0x230)]=_0x49d5eb,_0x5b9963[_0x59344b(0x1c9)](_0x49d5eb,_0x3bdd2c);}let _0x2cd839,_0x3ed180,_0x386849=_0x367e2a[_0x5e3337(0x27f)];_0x367e2a['ninjaSuppressConsole']=!0x0,_0x367e2a[_0x5e3337(0x1b3)]&&(_0x2cd839=_0x367e2a['console'][_0x5e3337(0x2a2)],_0x3ed180=_0x367e2a['console'][_0x5e3337(0x29a)],_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=function(){}),_0x3ed180&&(_0x367e2a['console'][_0x5e3337(0x29a)]=function(){}));try{try{_0x39494e['level']++,_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x250)](_0x251ef9);var _0x3e6539,_0x4877be,_0x38261b,_0x5c9df3,_0x3d7082=[],_0x4b7e1b=[],_0x4dafeb,_0x433a0c=this[_0x5e3337(0x1e0)](_0x251ef9),_0x517caf=_0x433a0c==='array',_0x51e574=!0x1,_0x29977e=_0x433a0c==='function',_0x530bbf=this[_0x5e3337(0x284)](_0x433a0c),_0x4cdde3=this[_0x5e3337(0x213)](_0x433a0c),_0x2e97c4=_0x530bbf||_0x4cdde3,_0x7840f7={},_0x17c28f=0x0,_0x4a13ab=!0x1,_0x14328f,_0x4c9a3b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x39494e[_0x5e3337(0x1f2)]){if(_0x517caf){if(_0x4877be=_0x251ef9['length'],_0x4877be>_0x39494e['elements']){for(_0x38261b=0x0,_0x5c9df3=_0x39494e[_0x5e3337(0x272)],_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));_0x51810f[_0x5e3337(0x1cd)]=!0x0;}else{for(_0x38261b=0x0,_0x5c9df3=_0x4877be,_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));}_0x39494e[_0x5e3337(0x1dc)]+=_0x4b7e1b[_0x5e3337(0x24c)];}if(!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c===_0x5e3337(0x1e9))&&!_0x530bbf&&_0x433a0c!==_0x5e3337(0x217)&&_0x433a0c!==_0x5e3337(0x212)&&_0x433a0c!=='bigint'){var _0x40a893=_0x442bc7[_0x5e3337(0x286)]||_0x39494e[_0x5e3337(0x286)];if(this[_0x5e3337(0x2af)](_0x251ef9)?(_0x3e6539=0x0,_0x251ef9[_0x5e3337(0x26b)](function(_0x25616c){var _0x724ab4=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x724ab4(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x724ab4(0x1ff)]&&_0x39494e[_0x724ab4(0x1d6)]&&_0x39494e[_0x724ab4(0x1dc)]>_0x39494e[_0x724ab4(0x26f)]){_0x4a13ab=!0x0;return;}_0x4b7e1b['push'](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x724ab4(0x1c3),_0x3e6539++,_0x39494e,function(_0x1a560f){return function(){return _0x1a560f;};}(_0x25616c)));})):this[_0x5e3337(0x29c)](_0x251ef9)&&_0x251ef9[_0x5e3337(0x26b)](function(_0x53a84d,_0x448d50){var _0x1b3cc3=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x1b3cc3(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x1b3cc3(0x1ff)]&&_0x39494e[_0x1b3cc3(0x1d6)]&&_0x39494e[_0x1b3cc3(0x1dc)]>_0x39494e[_0x1b3cc3(0x26f)]){_0x4a13ab=!0x0;return;}var _0x4a6eda=_0x448d50[_0x1b3cc3(0x1b2)]();_0x4a6eda[_0x1b3cc3(0x24c)]>0x64&&(_0x4a6eda=_0x4a6eda['slice'](0x0,0x64)+_0x1b3cc3(0x1f5)),_0x4b7e1b[_0x1b3cc3(0x250)](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x1b3cc3(0x1eb),_0x4a6eda,_0x39494e,function(_0x5e6cf){return function(){return _0x5e6cf;};}(_0x53a84d)));}),!_0x51e574){try{for(_0x4dafeb in _0x251ef9)if(!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)){if(_0x17c28f++,_0x39494e[_0x5e3337(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e[_0x5e3337(0x1ff)]&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e[_0x5e3337(0x26f)]){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}catch{}if(_0x7840f7[_0x5e3337(0x248)]=!0x0,_0x29977e&&(_0x7840f7[_0x5e3337(0x237)]=!0x0),!_0x4a13ab){var _0x55d68e=[][_0x5e3337(0x2a1)](this[_0x5e3337(0x241)](_0x251ef9))['concat'](this[_0x5e3337(0x20e)](_0x251ef9));for(_0x3e6539=0x0,_0x4877be=_0x55d68e[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)if(_0x4dafeb=_0x55d68e[_0x3e6539],!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb['toString']()))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)&&!_0x7840f7[typeof _0x4dafeb!=_0x5e3337(0x24a)?_0x5e3337(0x27a)+_0x4dafeb[_0x5e3337(0x1b2)]():_0x4dafeb]){if(_0x17c28f++,_0x39494e['autoExpandPropertyCount']++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e['isExpressionToEvaluate']&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e['autoExpandLimit']){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}}}}if(_0x51810f[_0x5e3337(0x21c)]=_0x433a0c,_0x2e97c4?(_0x51810f[_0x5e3337(0x28c)]=_0x251ef9['valueOf'](),this[_0x5e3337(0x242)](_0x433a0c,_0x51810f,_0x39494e,_0x442bc7)):_0x433a0c==='date'?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x2b7)][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='bigint'?_0x51810f[_0x5e3337(0x28c)]=_0x251ef9[_0x5e3337(0x1b2)]():_0x433a0c===_0x5e3337(0x1af)?_0x51810f['value']=this['_regExpToString'][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='symbol'&&this[_0x5e3337(0x22a)]?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x22a)][_0x5e3337(0x232)][_0x5e3337(0x1b2)]['call'](_0x251ef9):!_0x39494e[_0x5e3337(0x1f2)]&&!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c==='undefined')&&(delete _0x51810f['value'],_0x51810f[_0x5e3337(0x2a5)]=!0x0),_0x4a13ab&&(_0x51810f[_0x5e3337(0x2a7)]=!0x0),_0x14328f=_0x39494e['node'][_0x5e3337(0x230)],_0x39494e[_0x5e3337(0x1e7)]['current']=_0x51810f,this[_0x5e3337(0x1c9)](_0x51810f,_0x39494e),_0x4b7e1b[_0x5e3337(0x24c)]){for(_0x3e6539=0x0,_0x4877be=_0x4b7e1b[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)_0x4b7e1b[_0x3e6539](_0x3e6539);}_0x3d7082[_0x5e3337(0x24c)]&&(_0x51810f[_0x5e3337(0x286)]=_0x3d7082);}catch(_0x2a34e7){_0x228c0e(_0x2a34e7,_0x51810f,_0x39494e);}this[_0x5e3337(0x291)](_0x251ef9,_0x51810f),this['_treeNodePropertiesAfterFullValue'](_0x51810f,_0x39494e),_0x39494e[_0x5e3337(0x1e7)][_0x5e3337(0x230)]=_0x14328f,_0x39494e[_0x5e3337(0x274)]--,_0x39494e[_0x5e3337(0x1d6)]=_0x5e0af2,_0x39494e['autoExpand']&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x1ad)]();}finally{_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=_0x2cd839),_0x3ed180&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x29a)]=_0x3ed180),_0x367e2a['ninjaSuppressConsole']=_0x386849;}return _0x51810f;},_0x5d0f9e[_0x105bb6(0x232)]['_getOwnPropertySymbols']=function(_0x4d363d){var _0xa28b65=_0x105bb6;return Object[_0xa28b65(0x1dd)]?Object['getOwnPropertySymbols'](_0x4d363d):[];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2af)]=function(_0x10025a){var _0x434c7b=_0x105bb6;return!!(_0x10025a&&_0x367e2a[_0x434c7b(0x1c3)]&&this['_objectToString'](_0x10025a)==='[object\\x20Set]'&&_0x10025a[_0x434c7b(0x26b)]);},_0x5d0f9e['prototype']['_blacklistedProperty']=function(_0x120e00,_0x390f06,_0x2d17dd){var _0x1609a5=_0x105bb6;if(!_0x2d17dd[_0x1609a5(0x224)]){let _0x581703=this[_0x1609a5(0x1b8)](_0x120e00,_0x390f06);if(_0x581703&&_0x581703[_0x1609a5(0x231)])return!0x0;}return _0x2d17dd[_0x1609a5(0x245)]?typeof _0x120e00[_0x390f06]==_0x1609a5(0x1b7):!0x1;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1e0)]=function(_0x59f256){var _0x324ad8=_0x105bb6,_0x5bfe31='';return _0x5bfe31=typeof _0x59f256,_0x5bfe31==='object'?this['_objectToString'](_0x59f256)===_0x324ad8(0x1b5)?_0x5bfe31='array':this['_objectToString'](_0x59f256)===_0x324ad8(0x1da)?_0x5bfe31=_0x324ad8(0x296):this['_objectToString'](_0x59f256)===_0x324ad8(0x25d)?_0x5bfe31=_0x324ad8(0x265):_0x59f256===null?_0x5bfe31='null':_0x59f256[_0x324ad8(0x28b)]&&(_0x5bfe31=_0x59f256['constructor'][_0x324ad8(0x1d3)]||_0x5bfe31):_0x5bfe31==='undefined'&&this[_0x324ad8(0x206)]&&_0x59f256 instanceof this[_0x324ad8(0x206)]&&(_0x5bfe31=_0x324ad8(0x2bb)),_0x5bfe31;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1d1)]=function(_0x16aeba){var _0x51ce8=_0x105bb6;return Object[_0x51ce8(0x232)]['toString']['call'](_0x16aeba);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x284)]=function(_0x3836db){var _0x2f107a=_0x105bb6;return _0x3836db==='boolean'||_0x3836db===_0x2f107a(0x20d)||_0x3836db===_0x2f107a(0x2aa);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x213)]=function(_0x345086){var _0x53d599=_0x105bb6;return _0x345086===_0x53d599(0x29f)||_0x345086===_0x53d599(0x217)||_0x345086===_0x53d599(0x29e);},_0x5d0f9e['prototype'][_0x105bb6(0x1ed)]=function(_0x592d75,_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029){var _0x4012f1=this;return function(_0x36de93){var _0x3f867f=_0x49f3,_0xe3db2=_0x4400d5[_0x3f867f(0x1e7)]['current'],_0x22e5a3=_0x4400d5[_0x3f867f(0x1e7)]['index'],_0x2e8e88=_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)];_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)]=_0xe3db2,_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x20a)]=typeof _0x54009e==_0x3f867f(0x2aa)?_0x54009e:_0x36de93,_0x592d75[_0x3f867f(0x250)](_0x4012f1[_0x3f867f(0x229)](_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029)),_0x4400d5[_0x3f867f(0x1e7)]['parent']=_0x2e8e88,_0x4400d5['node']['index']=_0x22e5a3;};},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x257)]=function(_0x3b49cc,_0x49dbe9,_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f){var _0x59bea1=_0x105bb6,_0x3c8a44=this;return _0x49dbe9[typeof _0x130934!='symbol'?_0x59bea1(0x27a)+_0x130934[_0x59bea1(0x1b2)]():_0x130934]=!0x0,function(_0x306fcd){var _0x4f9062=_0x59bea1,_0x5bdf7f=_0x3757aa['node'][_0x4f9062(0x230)],_0x34bd51=_0x3757aa['node'][_0x4f9062(0x20a)],_0x2c525f=_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)];_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)]=_0x5bdf7f,_0x3757aa['node'][_0x4f9062(0x20a)]=_0x306fcd,_0x3b49cc[_0x4f9062(0x250)](_0x3c8a44['_property'](_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f)),_0x3757aa['node'][_0x4f9062(0x1d7)]=_0x2c525f,_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x20a)]=_0x34bd51;};},_0x5d0f9e['prototype'][_0x105bb6(0x229)]=function(_0x3332c1,_0x1b554f,_0x2a5116,_0x11f0cc,_0x24d27e){var _0x4a984a=_0x105bb6,_0x3b924d=this;_0x24d27e||(_0x24d27e=function(_0x42903f,_0x396f4b){return _0x42903f[_0x396f4b];});var _0x51f195=_0x2a5116[_0x4a984a(0x1b2)](),_0x2b91b7=_0x11f0cc[_0x4a984a(0x25c)]||{},_0xc69a03=_0x11f0cc[_0x4a984a(0x1f2)],_0x5e7c39=_0x11f0cc['isExpressionToEvaluate'];try{var _0x4f0c31=this['_isMap'](_0x3332c1),_0x51f0cf=_0x51f195;_0x4f0c31&&_0x51f0cf[0x0]==='\\x27'&&(_0x51f0cf=_0x51f0cf[_0x4a984a(0x23a)](0x1,_0x51f0cf['length']-0x2));var _0x3e74e4=_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7[_0x4a984a(0x27a)+_0x51f0cf];_0x3e74e4&&(_0x11f0cc[_0x4a984a(0x1f2)]=_0x11f0cc[_0x4a984a(0x1f2)]+0x1),_0x11f0cc['isExpressionToEvaluate']=!!_0x3e74e4;var _0x44a3a3=typeof _0x2a5116=='symbol',_0x35e15d={'name':_0x44a3a3||_0x4f0c31?_0x51f195:this[_0x4a984a(0x249)](_0x51f195)};if(_0x44a3a3&&(_0x35e15d[_0x4a984a(0x24a)]=!0x0),!(_0x1b554f==='array'||_0x1b554f===_0x4a984a(0x1b9))){var _0x313691=this['_getOwnPropertyDescriptor'](_0x3332c1,_0x2a5116);if(_0x313691&&(_0x313691[_0x4a984a(0x243)]&&(_0x35e15d[_0x4a984a(0x1ab)]=!0x0),_0x313691[_0x4a984a(0x231)]&&!_0x3e74e4&&!_0x11f0cc[_0x4a984a(0x224)]))return _0x35e15d[_0x4a984a(0x259)]=!0x0,this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0x6ded2a;try{_0x6ded2a=_0x24d27e(_0x3332c1,_0x2a5116);}catch(_0x3c6ff3){return _0x35e15d={'name':_0x51f195,'type':_0x4a984a(0x28e),'error':_0x3c6ff3['message']},this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0xe0b659=this[_0x4a984a(0x1e0)](_0x6ded2a),_0x5639de=this[_0x4a984a(0x284)](_0xe0b659);if(_0x35e15d[_0x4a984a(0x21c)]=_0xe0b659,_0x5639de)this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x242701=_0x4a984a;_0x35e15d[_0x242701(0x28c)]=_0x6ded2a[_0x242701(0x23e)](),!_0x3e74e4&&_0x3b924d[_0x242701(0x242)](_0xe0b659,_0x35e15d,_0x11f0cc,{});});else{var _0x47af2b=_0x11f0cc[_0x4a984a(0x1d6)]&&_0x11f0cc['level']<_0x11f0cc[_0x4a984a(0x1ae)]&&_0x11f0cc[_0x4a984a(0x28a)][_0x4a984a(0x200)](_0x6ded2a)<0x0&&_0xe0b659!==_0x4a984a(0x1b7)&&_0x11f0cc['autoExpandPropertyCount']<_0x11f0cc[_0x4a984a(0x26f)];_0x47af2b||_0x11f0cc[_0x4a984a(0x274)]<_0xc69a03||_0x3e74e4?this[_0x4a984a(0x1b0)](_0x35e15d,_0x6ded2a,_0x11f0cc,_0x3e74e4||{}):this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x9e827f=_0x4a984a;_0xe0b659===_0x9e827f(0x223)||_0xe0b659===_0x9e827f(0x1e9)||(delete _0x35e15d['value'],_0x35e15d[_0x9e827f(0x2a5)]=!0x0);});}return _0x35e15d;}finally{_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7,_0x11f0cc[_0x4a984a(0x1f2)]=_0xc69a03,_0x11f0cc[_0x4a984a(0x1ff)]=_0x5e7c39;}},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x242)]=function(_0x399669,_0x210936,_0xab59d7,_0x2be8d3){var _0x44fa0a=_0x105bb6,_0x420ad6=_0x2be8d3['strLength']||_0xab59d7[_0x44fa0a(0x2ae)];if((_0x399669===_0x44fa0a(0x20d)||_0x399669==='String')&&_0x210936[_0x44fa0a(0x28c)]){let _0x2ff4e7=_0x210936[_0x44fa0a(0x28c)]['length'];_0xab59d7[_0x44fa0a(0x27d)]+=_0x2ff4e7,_0xab59d7[_0x44fa0a(0x27d)]>_0xab59d7[_0x44fa0a(0x1de)]?(_0x210936[_0x44fa0a(0x2a5)]='',delete _0x210936[_0x44fa0a(0x28c)]):_0x2ff4e7>_0x420ad6&&(_0x210936['capped']=_0x210936[_0x44fa0a(0x28c)][_0x44fa0a(0x23a)](0x0,_0x420ad6),delete _0x210936[_0x44fa0a(0x28c)]);}},_0x5d0f9e[_0x105bb6(0x232)]['_isMap']=function(_0x2a4a89){var _0x461e8b=_0x105bb6;return!!(_0x2a4a89&&_0x367e2a[_0x461e8b(0x1eb)]&&this[_0x461e8b(0x1d1)](_0x2a4a89)===_0x461e8b(0x2ba)&&_0x2a4a89[_0x461e8b(0x26b)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x249)]=function(_0x2383db){var _0x222450=_0x105bb6;if(_0x2383db['match'](/^\\d+$/))return _0x2383db;var _0x2709fd;try{_0x2709fd=JSON[_0x222450(0x204)](''+_0x2383db);}catch{_0x2709fd='\\x22'+this[_0x222450(0x1d1)](_0x2383db)+'\\x22';}return _0x2709fd[_0x222450(0x233)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2709fd=_0x2709fd['substr'](0x1,_0x2709fd[_0x222450(0x24c)]-0x2):_0x2709fd=_0x2709fd[_0x222450(0x266)](/'/g,'\\x5c\\x27')[_0x222450(0x266)](/\\\\\"/g,'\\x22')[_0x222450(0x266)](/(^\"|\"$)/g,'\\x27'),_0x2709fd;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x22f)]=function(_0xa209b3,_0x115190,_0x2acd83,_0x303d96){var _0x46b928=_0x105bb6;this[_0x46b928(0x1c9)](_0xa209b3,_0x115190),_0x303d96&&_0x303d96(),this[_0x46b928(0x291)](_0x2acd83,_0xa209b3),this[_0x46b928(0x24d)](_0xa209b3,_0x115190);},_0x5d0f9e['prototype'][_0x105bb6(0x1c9)]=function(_0x458a15,_0x512c85){var _0x23bc61=_0x105bb6;this[_0x23bc61(0x201)](_0x458a15,_0x512c85),this[_0x23bc61(0x254)](_0x458a15,_0x512c85),this[_0x23bc61(0x273)](_0x458a15,_0x512c85),this['_setNodePermissions'](_0x458a15,_0x512c85);},_0x5d0f9e[_0x105bb6(0x232)]['_setNodeId']=function(_0x36c77c,_0x3a2a96){},_0x5d0f9e['prototype'][_0x105bb6(0x254)]=function(_0x5276cd,_0x506cc0){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x21d)]=function(_0x1f7f4d,_0x23480e){},_0x5d0f9e['prototype'][_0x105bb6(0x1cc)]=function(_0x5184f2){var _0x348ff9=_0x105bb6;return _0x5184f2===this[_0x348ff9(0x1bd)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x24d)]=function(_0xb25f0c,_0x26cf9d){var _0x7e320f=_0x105bb6;this[_0x7e320f(0x21d)](_0xb25f0c,_0x26cf9d),this['_setNodeExpandableState'](_0xb25f0c),_0x26cf9d['sortProps']&&this[_0x7e320f(0x2b3)](_0xb25f0c),this[_0x7e320f(0x1fc)](_0xb25f0c,_0x26cf9d),this['_addLoadNode'](_0xb25f0c,_0x26cf9d),this['_cleanNode'](_0xb25f0c);},_0x5d0f9e[_0x105bb6(0x232)]['_additionalMetadata']=function(_0x2726b3,_0x1c214e){var _0x2f2a09=_0x105bb6;try{_0x2726b3&&typeof _0x2726b3[_0x2f2a09(0x24c)]==_0x2f2a09(0x2aa)&&(_0x1c214e[_0x2f2a09(0x24c)]=_0x2726b3[_0x2f2a09(0x24c)]);}catch{}if(_0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x2aa)||_0x1c214e[_0x2f2a09(0x21c)]==='Number'){if(isNaN(_0x1c214e[_0x2f2a09(0x28c)]))_0x1c214e[_0x2f2a09(0x282)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];else switch(_0x1c214e[_0x2f2a09(0x28c)]){case Number[_0x2f2a09(0x1fd)]:_0x1c214e['positiveInfinity']=!0x0,delete _0x1c214e['value'];break;case Number['NEGATIVE_INFINITY']:_0x1c214e[_0x2f2a09(0x1c2)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];break;case 0x0:this[_0x2f2a09(0x1b4)](_0x1c214e['value'])&&(_0x1c214e[_0x2f2a09(0x2ab)]=!0x0);break;}}else _0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x1b7)&&typeof _0x2726b3[_0x2f2a09(0x1d3)]==_0x2f2a09(0x20d)&&_0x2726b3[_0x2f2a09(0x1d3)]&&_0x1c214e[_0x2f2a09(0x1d3)]&&_0x2726b3[_0x2f2a09(0x1d3)]!==_0x1c214e[_0x2f2a09(0x1d3)]&&(_0x1c214e[_0x2f2a09(0x20c)]=_0x2726b3[_0x2f2a09(0x1d3)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b4)]=function(_0x58289d){var _0x347d33=_0x105bb6;return 0x1/_0x58289d===Number[_0x347d33(0x264)];},_0x5d0f9e['prototype'][_0x105bb6(0x2b3)]=function(_0x348e5c){var _0x3b9c76=_0x105bb6;!_0x348e5c['props']||!_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x24c)]||_0x348e5c[_0x3b9c76(0x21c)]==='array'||_0x348e5c[_0x3b9c76(0x21c)]==='Map'||_0x348e5c[_0x3b9c76(0x21c)]===_0x3b9c76(0x1c3)||_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x290)](function(_0xea3fc1,_0x42d360){var _0x1755cf=_0x3b9c76,_0x4f3b4a=_0xea3fc1['name'][_0x1755cf(0x277)](),_0x14750b=_0x42d360['name']['toLowerCase']();return _0x4f3b4a<_0x14750b?-0x1:_0x4f3b4a>_0x14750b?0x1:0x0;});},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1fc)]=function(_0x21e5fd,_0x1075d8){var _0x37150f=_0x105bb6;if(!(_0x1075d8['noFunctions']||!_0x21e5fd[_0x37150f(0x286)]||!_0x21e5fd[_0x37150f(0x286)]['length'])){for(var _0xccfa8c=[],_0x36e1c4=[],_0x28710e=0x0,_0x13a0de=_0x21e5fd[_0x37150f(0x286)][_0x37150f(0x24c)];_0x28710e<_0x13a0de;_0x28710e++){var _0x30019=_0x21e5fd['props'][_0x28710e];_0x30019[_0x37150f(0x21c)]===_0x37150f(0x1b7)?_0xccfa8c['push'](_0x30019):_0x36e1c4[_0x37150f(0x250)](_0x30019);}if(!(!_0x36e1c4[_0x37150f(0x24c)]||_0xccfa8c[_0x37150f(0x24c)]<=0x1)){_0x21e5fd[_0x37150f(0x286)]=_0x36e1c4;var _0x304fdb={'functionsNode':!0x0,'props':_0xccfa8c};this[_0x37150f(0x201)](_0x304fdb,_0x1075d8),this['_setNodeLabel'](_0x304fdb,_0x1075d8),this[_0x37150f(0x26e)](_0x304fdb),this['_setNodePermissions'](_0x304fdb,_0x1075d8),_0x304fdb['id']+='\\x20f',_0x21e5fd[_0x37150f(0x286)]['unshift'](_0x304fdb);}}},_0x5d0f9e['prototype']['_addLoadNode']=function(_0x2d95c4,_0x33bb77){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x26e)]=function(_0x4c5fcb){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2ac)]=function(_0xae9e15){var _0x5592af=_0x105bb6;return Array[_0x5592af(0x23f)](_0xae9e15)||typeof _0xae9e15=='object'&&this[_0x5592af(0x1d1)](_0xae9e15)===_0x5592af(0x1b5);},_0x5d0f9e['prototype'][_0x105bb6(0x2b1)]=function(_0xae5534,_0x4da24a){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x25f)]=function(_0x6748ea){var _0xf3c5c9=_0x105bb6;delete _0x6748ea[_0xf3c5c9(0x1d5)],delete _0x6748ea['_hasSetOnItsPath'],delete _0x6748ea[_0xf3c5c9(0x1be)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x273)]=function(_0x323d56,_0x7249f7){};let _0x3a9ca1=new _0x5d0f9e(),_0xa6a15a={'props':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x286)]||0x64,'elements':_0x3e1f78[_0x105bb6(0x29d)]['elements']||0x64,'strLength':_0x3e1f78['defaultLimits'][_0x105bb6(0x2ae)]||0x400*0x32,'totalStrLength':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x1de)]||0x400*0x32,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x26f)]||0x1388,'autoExpandMaxDepth':_0x3e1f78[_0x105bb6(0x29d)]['autoExpandMaxDepth']||0xa},_0x1edace={'props':_0x3e1f78['reducedLimits'][_0x105bb6(0x286)]||0x5,'elements':_0x3e1f78[_0x105bb6(0x2b5)]['elements']||0x5,'strLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x2ae)]||0x100,'totalStrLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x1de)]||0x100*0x3,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x26f)]||0x1e,'autoExpandMaxDepth':_0x3e1f78['reducedLimits'][_0x105bb6(0x1ae)]||0x2};if(_0x52ee0a){let _0xa62a02=_0x3a9ca1['serialize']['bind'](_0x3a9ca1);_0x3a9ca1['serialize']=function(_0x230ce2,_0x2c9e2e,_0xcf6767,_0x48686e){return _0xa62a02(_0x230ce2,_0x52ee0a(_0x2c9e2e),_0xcf6767,_0x48686e);};}function _0x916645(_0x2587cc,_0x5b2586,_0x43d5fc,_0x2ab8e1,_0x2b1e5b,_0x50e3dd){var _0x133717=_0x105bb6;let _0x55384c,_0x446778;try{_0x446778=_0x15ddd1(),_0x55384c=_0x55bbfc[_0x5b2586],!_0x55384c||_0x446778-_0x55384c['ts']>_0x18f631[_0x133717(0x1e1)][_0x133717(0x1b6)]&&_0x55384c[_0x133717(0x292)]&&_0x55384c[_0x133717(0x28d)]/_0x55384c[_0x133717(0x292)]<_0x18f631['perLogpoint']['resetOnProcessingTimeAverageMs']?(_0x55bbfc[_0x5b2586]=_0x55384c={'count':0x0,'time':0x0,'ts':_0x446778},_0x55bbfc[_0x133717(0x2b8)]={}):_0x446778-_0x55bbfc[_0x133717(0x2b8)]['ts']>_0x18f631[_0x133717(0x23b)][_0x133717(0x1b6)]&&_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]&&_0x55bbfc['hits']['time']/_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]<_0x18f631[_0x133717(0x23b)][_0x133717(0x281)]&&(_0x55bbfc[_0x133717(0x2b8)]={});let _0x4a3eb6=[],_0x37c4cb=_0x55384c[_0x133717(0x203)]||_0x55bbfc[_0x133717(0x2b8)]['reduceLimits']?_0x1edace:_0xa6a15a,_0x346ed7=_0x4fed08=>{var _0x5c8242=_0x133717;let _0x6f6f7d={};return _0x6f6f7d[_0x5c8242(0x286)]=_0x4fed08[_0x5c8242(0x286)],_0x6f6f7d['elements']=_0x4fed08[_0x5c8242(0x272)],_0x6f6f7d['strLength']=_0x4fed08[_0x5c8242(0x2ae)],_0x6f6f7d[_0x5c8242(0x1de)]=_0x4fed08['totalStrLength'],_0x6f6f7d[_0x5c8242(0x26f)]=_0x4fed08[_0x5c8242(0x26f)],_0x6f6f7d['autoExpandMaxDepth']=_0x4fed08[_0x5c8242(0x1ae)],_0x6f6f7d[_0x5c8242(0x1ea)]=!0x1,_0x6f6f7d['noFunctions']=!_0x56498a,_0x6f6f7d[_0x5c8242(0x1f2)]=0x1,_0x6f6f7d['level']=0x0,_0x6f6f7d[_0x5c8242(0x234)]=_0x5c8242(0x1f9),_0x6f6f7d[_0x5c8242(0x2ad)]=_0x5c8242(0x2a8),_0x6f6f7d['autoExpand']=!0x0,_0x6f6f7d[_0x5c8242(0x28a)]=[],_0x6f6f7d[_0x5c8242(0x1dc)]=0x0,_0x6f6f7d['resolveGetters']=_0x3e1f78[_0x5c8242(0x224)],_0x6f6f7d['allStrLength']=0x0,_0x6f6f7d[_0x5c8242(0x1e7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x6f6f7d;};for(var _0x1ed53f=0x0;_0x1ed53f<_0x2b1e5b[_0x133717(0x24c)];_0x1ed53f++)_0x4a3eb6['push'](_0x3a9ca1[_0x133717(0x1b0)]({'timeNode':_0x2587cc===_0x133717(0x28d)||void 0x0},_0x2b1e5b[_0x1ed53f],_0x346ed7(_0x37c4cb),{}));if(_0x2587cc==='trace'||_0x2587cc===_0x133717(0x2a2)){let _0x53806a=Error[_0x133717(0x252)];try{Error[_0x133717(0x252)]=0x1/0x0,_0x4a3eb6[_0x133717(0x250)](_0x3a9ca1['serialize']({'stackNode':!0x0},new Error()[_0x133717(0x1e4)],_0x346ed7(_0x37c4cb),{'strLength':0x1/0x0}));}finally{Error[_0x133717(0x252)]=_0x53806a;}}return{'method':'log','version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':_0x4a3eb6,'id':_0x5b2586,'context':_0x50e3dd}]};}catch(_0x2def73){return{'method':_0x133717(0x219),'version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':[{'type':_0x133717(0x28e),'error':_0x2def73&&_0x2def73[_0x133717(0x1e5)]}],'id':_0x5b2586,'context':_0x50e3dd}]};}finally{try{if(_0x55384c&&_0x446778){let _0x3cb214=_0x15ddd1();_0x55384c[_0x133717(0x292)]++,_0x55384c[_0x133717(0x28d)]+=_0x14baa2(_0x446778,_0x3cb214),_0x55384c['ts']=_0x3cb214,_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]++,_0x55bbfc[_0x133717(0x2b8)]['time']+=_0x14baa2(_0x446778,_0x3cb214),_0x55bbfc['hits']['ts']=_0x3cb214,(_0x55384c['count']>_0x18f631['perLogpoint'][_0x133717(0x21f)]||_0x55384c[_0x133717(0x28d)]>_0x18f631['perLogpoint'][_0x133717(0x253)])&&(_0x55384c['reduceLimits']=!0x0),(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x21f)]||_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x28d)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x253)])&&(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x203)]=!0x0);}}catch{}}}return _0x916645;}function G(_0x51a9ee){var _0x4b4642=_0x170d0d;if(_0x51a9ee&&typeof _0x51a9ee==_0x4b4642(0x1bf)&&_0x51a9ee[_0x4b4642(0x28b)])switch(_0x51a9ee[_0x4b4642(0x28b)]['name']){case _0x4b4642(0x1ef):return _0x51a9ee[_0x4b4642(0x22e)](Symbol[_0x4b4642(0x279)])?Promise[_0x4b4642(0x1ba)]():_0x51a9ee;case _0x4b4642(0x25a):return Promise['resolve']();}return _0x51a9ee;}((_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x2168ce,_0x3ccb8b,_0xeb75e5,_0x1d8110,_0x4d8f7f,_0x42531a,_0x169273)=>{var _0x328bec=_0x170d0d;if(_0x41edbb['_console_ninja'])return _0x41edbb[_0x328bec(0x280)];let _0x16d08d={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x41edbb,_0xeb75e5,_0x193232))return _0x41edbb[_0x328bec(0x280)]=_0x16d08d,_0x41edbb[_0x328bec(0x280)];let _0x4236ba=b(_0x41edbb),_0x1b07b2=_0x4236ba[_0x328bec(0x27e)],_0x55c58e=_0x4236ba[_0x328bec(0x25e)],_0x2cd226=_0x4236ba['now'],_0x5f554c={'hits':{},'ts':{}},_0x1ff60a=J(_0x41edbb,_0x1d8110,_0x5f554c,_0x2168ce,_0x169273,_0x193232===_0x328bec(0x208)?G:void 0x0),_0x2718cd=(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b)=>{let _0xccae86=_0x41edbb['_console_ninja'];try{return _0x41edbb['_console_ninja']=_0x16d08d,_0x1ff60a(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b);}finally{_0x41edbb['_console_ninja']=_0xccae86;}},_0x2a7126=_0x2aacd3=>{_0x5f554c['ts'][_0x2aacd3]=_0x55c58e();},_0x6190d9=(_0x4b8b9a,_0x39ce0d)=>{var _0x48141e=_0x328bec;let _0x241899=_0x5f554c['ts'][_0x39ce0d];if(delete _0x5f554c['ts'][_0x39ce0d],_0x241899){let _0x1589a5=_0x1b07b2(_0x241899,_0x55c58e());_0x159082(_0x2718cd(_0x48141e(0x28d),_0x4b8b9a,_0x2cd226(),_0x217436,[_0x1589a5],_0x39ce0d));}},_0x2ae855=_0x40b04f=>{var _0x5530db=_0x328bec,_0x163aad;return _0x193232===_0x5530db(0x208)&&_0x41edbb['origin']&&((_0x163aad=_0x40b04f==null?void 0x0:_0x40b04f[_0x5530db(0x2b0)])==null?void 0x0:_0x163aad['length'])&&(_0x40b04f[_0x5530db(0x2b0)][0x0][_0x5530db(0x29b)]=_0x41edbb[_0x5530db(0x29b)]),_0x40b04f;};_0x41edbb['_console_ninja']={'consoleLog':(_0xcdac44,_0x49a38d)=>{var _0x380c53=_0x328bec;_0x41edbb[_0x380c53(0x1b3)][_0x380c53(0x219)][_0x380c53(0x1d3)]!==_0x380c53(0x1e3)&&_0x159082(_0x2718cd(_0x380c53(0x219),_0xcdac44,_0x2cd226(),_0x217436,_0x49a38d));},'consoleTrace':(_0x4ae7de,_0x1c3fa5)=>{var _0x331167=_0x328bec,_0x5b578d,_0x15c8c6;_0x41edbb[_0x331167(0x1b3)][_0x331167(0x219)]['name']!==_0x331167(0x251)&&((_0x15c8c6=(_0x5b578d=_0x41edbb[_0x331167(0x258)])==null?void 0x0:_0x5b578d['versions'])!=null&&_0x15c8c6[_0x331167(0x1e7)]&&(_0x41edbb['_ninjaIgnoreNextError']=!0x0),_0x159082(_0x2ae855(_0x2718cd(_0x331167(0x215),_0x4ae7de,_0x2cd226(),_0x217436,_0x1c3fa5))));},'consoleError':(_0xa1808c,_0x49bd48)=>{var _0x375d16=_0x328bec;_0x41edbb[_0x375d16(0x1d8)]=!0x0,_0x159082(_0x2ae855(_0x2718cd(_0x375d16(0x2a2),_0xa1808c,_0x2cd226(),_0x217436,_0x49bd48)));},'consoleTime':_0x32b043=>{_0x2a7126(_0x32b043);},'consoleTimeEnd':(_0x3cc349,_0x481352)=>{_0x6190d9(_0x481352,_0x3cc349);},'autoLog':(_0x2653f8,_0x5ef56c)=>{var _0x7f57ff=_0x328bec;_0x159082(_0x2718cd(_0x7f57ff(0x219),_0x5ef56c,_0x2cd226(),_0x217436,[_0x2653f8]));},'autoLogMany':(_0x2a6453,_0x1e7eea)=>{var _0x5ee2bd=_0x328bec;_0x159082(_0x2718cd(_0x5ee2bd(0x219),_0x2a6453,_0x2cd226(),_0x217436,_0x1e7eea));},'autoTrace':(_0x2144f3,_0x36cfc5)=>{_0x159082(_0x2ae855(_0x2718cd('trace',_0x36cfc5,_0x2cd226(),_0x217436,[_0x2144f3])));},'autoTraceMany':(_0x3ce65f,_0x4f40c3)=>{var _0x273171=_0x328bec;_0x159082(_0x2ae855(_0x2718cd(_0x273171(0x215),_0x3ce65f,_0x2cd226(),_0x217436,_0x4f40c3)));},'autoTime':(_0x10cbb8,_0x396cf2,_0x9ed779)=>{_0x2a7126(_0x9ed779);},'autoTimeEnd':(_0x1ad158,_0x56c01d,_0x591bd6)=>{_0x6190d9(_0x56c01d,_0x591bd6);},'coverage':_0x69ebeb=>{var _0x326f3f=_0x328bec;_0x159082({'method':_0x326f3f(0x261),'version':_0x2168ce,'args':[{'id':_0x69ebeb}]});}};let _0x159082=H(_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x4d8f7f,_0x42531a),_0x217436=_0x41edbb[_0x328bec(0x25b)];return _0x41edbb['_console_ninja'];})(globalThis,'127.0.0.1',_0x170d0d(0x226),\"/Users/interlink/.vscode/extensions/wallabyjs.console-ninja-1.0.500/node_modules\",'next.js',_0x170d0d(0x247),_0x170d0d(0x221),_0x170d0d(0x1e6),_0x170d0d(0x1c8),_0x170d0d(0x289),_0x170d0d(0x26d),_0x170d0d(0x297));");
    } catch (e) {
        console.error(e);
    }
}
; /* istanbul ignore next */ 
function oo_oo(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tr(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tx(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_ts(/**@type{any}**/ v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_te(/**@type{any}**/ v, /**@type{any}**/ i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
}),
"[project]/src/app/components/dashboard/BillingInfo.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>BillingInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// --- Utility Functions ---
const isValidLuhn = (value)=>{
    const cardNumber = value.replace(/\s/g, "");
    if (!/^\d+$/.test(cardNumber) || cardNumber.length < 13) return false;
    let sum = 0;
    let shouldDouble = false;
    for(let i = cardNumber.length - 1; i >= 0; i--){
        let digit = parseInt(cardNumber.charAt(i), 10);
        if (shouldDouble) {
            if ((digit *= 2) > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
};
const isFutureDate = (value)=>{
    const [month, year] = value.split("/");
    if (!month || !year || year.length !== 2) return false;
    const expiryDate = new Date(`20${year}`, month - 1);
    const now = new Date();
    now.setDate(1);
    now.setMonth(now.getMonth() + 1);
    now.setDate(0);
    return expiryDate > now;
};
const getCardType = (cardNumber)=>{
    const num = cardNumber.replace(/\s/g, "");
    if (/^4/.test(num)) return "Visa";
    if (/^5[1-5]/.test(num)) return "Mastercard";
    if (/^3[47]/.test(num)) return "American Express";
    return "Card";
};
// --- Card Brand Icon ---
const CardBrandIcon = ({ type })=>{
    const icons = {
        Visa: "/visa.png",
        Mastercard: "/master.png",
        "American Express": "/express.png"
    };
    const sizes = {
        Visa: "h-6 w-auto",
        Mastercard: "h-8 w-auto",
        "American Express": "h-10 w-auto"
    };
    const src = icons[type];
    const size = sizes[type] || "h-8 w-auto";
    if (src) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: `${type} logo`,
        className: `${size} object-contain`
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
        lineNumber: 63,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
        className: `${size} text-slate-400`
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
        lineNumber: 69,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
function BillingInfo() {
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAddCardForm, setShowAddCardForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ✅ Fetch existing cards
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCards = async ()=>{
            try {
                const res = await fetch("/api/dashboard/payment-methods");
                const data = await res.json();
                if (res.ok) setCards(data.cards);
            } catch (err) {
                /* eslint-disable */ console.error(...oo_tx(`2715426392_86_8_86_50_11`, "Error loading cards:", err));
            } finally{
                setLoading(false);
            }
        };
        fetchCards();
    }, []);
    // ✅ Save a new card
    const handleSaveCard = async (details)=>{
        try {
            const res = await fetch("/api/dashboard/payment-methods", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(details)
            });
            const data = await res.json();
            if (res.ok) {
                setCards((prev)=>[
                        data.card,
                        ...prev
                    ]);
                setShowAddCardForm(false);
            } else {
                alert(data.error || "Failed to add card");
            }
        } catch (err) {
            /* eslint-disable */ console.error(...oo_tx(`2715426392_112_6_112_43_11`, "Add card error:", err));
        }
    };
    // ✅ Remove card
    const handleRemoveCard = async (id)=>{
        try {
            const res = await fetch(`/api/dashboard/payment-methods/${id}`, {
                method: "DELETE"
            });
            if (res.ok) setCards(cards.filter((c)=>c._id !== id));
            else alert("Failed to delete card");
        } catch (err) {
            /* eslint-disable */ console.error(...oo_tx(`2715426392_126_6_126_46_11`, "Delete card error:", err));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg border border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700",
                        children: "Payment Methods"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAddCardForm(!showAddCardForm),
                        className: "flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            showAddCardForm ? "Cancel" : "Add New Card"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showAddCardForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "overflow-hidden mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreditCardForm, {
                        onSave: handleSaveCard
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                    lineNumber: 148,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "border-slate-200 mb-4"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500 text-sm",
                children: "Loading cards..."
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                lineNumber: 164,
                columnNumber: 9
            }, this) : cards.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500 text-sm",
                children: "No saved payment methods."
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                lineNumber: 166,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "divide-y divide-slate-200",
                children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex justify-between items-center py-3 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBrandIcon, {
                                        type: card.cardType
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-slate-700",
                                                children: [
                                                    card.cardType,
                                                    " ending in ",
                                                    card.last4
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: [
                                                    "Expires ",
                                                    card.expiry
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleRemoveCard(card._id),
                                className: "text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this)
                        ]
                    }, card._id, true, {
                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                lineNumber: 168,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
// --- Credit Card Form Component ---
function CreditCardForm({ onSave }) {
    const { register, handleSubmit, formState, watch, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        mode: "onBlur"
    });
    const { errors } = formState;
    const watched = watch();
    const [isFlipped, setIsFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getCardType(watched.cardNumber || ""), [
        watched.cardNumber
    ]);
    const onSubmit = (data)=>onSave(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-slate-50 rounded-lg border border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-1/2 flex justify-center items-center",
                    style: {
                        perspective: "1000px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-sm h-52 transition-transform duration-500",
                        style: {
                            transformStyle: "preserve-3d",
                            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full h-full rounded-xl text-white shadow-lg",
                                style: {
                                    backfaceVisibility: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/card.jpg",
                                        alt: "Card Front",
                                        className: "object-cover w-full h-full rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end",
                                                children: cardType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBrandIcon, {
                                                    type: cardType
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                    lineNumber: 242,
                                                    columnNumber: 32
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-mono tracking-widest",
                                                children: watched.cardNumber || "XXXX XXXX XXXX XXXX"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "uppercase text-sm",
                                                        children: watched.cardName || "CARDHOLDER NAME"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: watched.expiryDate || "MM/YY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full h-full rounded-xl shadow-lg",
                                style: {
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/card.jpg",
                                        alt: "Card Back",
                                        className: "object-cover w-full h-full rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-8 left-0 w-full h-10 bg-black"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-24 right-4 text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-xs mb-1",
                                                children: "Security Code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end h-8 w-28 bg-white rounded",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-black font-mono tracking-widest pr-2",
                                                    children: watched.cvv
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                    lineNumber: 219,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit(onSubmit),
                    className: "w-full lg:w-1/2 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-slate-600 font-medium text-sm block mb-1",
                                    children: "Card Number"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ...register("cardNumber", {
                                        required: "Card number is required",
                                        validate: (v)=>isValidLuhn(v) || "Invalid card number",
                                        onChange: (e)=>{
                                            const formatted = e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
                                            setValue("cardNumber", formatted, {
                                                shouldValidate: true
                                            });
                                        }
                                    }),
                                    maxLength: "19",
                                    className: `w-full p-2 border rounded-md text-sm ${errors.cardNumber ? "border-red-500" : "border-slate-300"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                errors.cardNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-xs mt-1 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        errors.cardNumber.message
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-slate-600 font-medium text-sm block mb-1",
                                    children: "Cardholder Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ...register("cardName", {
                                        required: "Cardholder name is required"
                                    }),
                                    className: `w-full p-2 border rounded-md text-sm ${errors.cardName ? "border-red-500" : "border-slate-300"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                errors.cardName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-xs mt-1 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        errors.cardName.message
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-600 font-medium text-sm block mb-1",
                                            children: "Expiry Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...register("expiryDate", {
                                                required: "Expiry date is required",
                                                pattern: {
                                                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                                    message: "Invalid format (MM/YY)"
                                                },
                                                validate: (v)=>isFutureDate(v) || "Card has expired",
                                                onChange: (e)=>{
                                                    const formatted = e.target.value.replace(/\D/g, "").replace(/(\d{2})(\d{0,2})/, "$1/$2");
                                                    setValue("expiryDate", formatted, {
                                                        shouldValidate: true
                                                    });
                                                }
                                            }),
                                            maxLength: "5",
                                            placeholder: "MM/YY",
                                            className: `w-full p-2 border rounded-md text-sm ${errors.expiryDate ? "border-red-500" : "border-slate-300"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this),
                                        errors.expiryDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                errors.expiryDate.message
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-600 font-medium text-sm block mb-1",
                                            children: "CVV"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...register("cvv", {
                                                required: "CVV is required",
                                                pattern: {
                                                    value: /^\d{3,4}$/,
                                                    message: "Invalid CVV"
                                                }
                                            }),
                                            maxLength: "4",
                                            onFocus: ()=>setIsFlipped(true),
                                            onBlur: ()=>setIsFlipped(false),
                                            className: `w-full p-2 border rounded-md text-sm ${errors.cvv ? "border-red-500" : "border-slate-300"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this),
                                        errors.cvv && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                                    lineNumber: 385,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                errors.cvv.message
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-slate-800 text-white text-sm font-semibold hover:bg-slate-900 transition",
                            children: "Save Card"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
            lineNumber: 217,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/BillingInfo.js",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x170d0d=_0x49f3;function _0x49f3(_0x31d1b1,_0x501ca7){var _0x445485=_0x4454();return _0x49f3=function(_0x49f329,_0x2d53d7){_0x49f329=_0x49f329-0x1a9;var _0x1c5fc3=_0x445485[_0x49f329];return _0x1c5fc3;},_0x49f3(_0x31d1b1,_0x501ca7);}(function(_0x3e6b2f,_0x209b9d){var _0x381a5c=_0x49f3,_0x336573=_0x3e6b2f();while(!![]){try{var _0x1df70e=-parseInt(_0x381a5c(0x1c5))/0x1+parseInt(_0x381a5c(0x238))/0x2+parseInt(_0x381a5c(0x24b))/0x3*(parseInt(_0x381a5c(0x22b))/0x4)+parseInt(_0x381a5c(0x1c7))/0x5+parseInt(_0x381a5c(0x244))/0x6*(-parseInt(_0x381a5c(0x227))/0x7)+parseInt(_0x381a5c(0x1d2))/0x8*(-parseInt(_0x381a5c(0x1e2))/0x9)+-parseInt(_0x381a5c(0x2b4))/0xa*(-parseInt(_0x381a5c(0x27b))/0xb);if(_0x1df70e===_0x209b9d)break;else _0x336573['push'](_0x336573['shift']());}catch(_0x4e1f13){_0x336573['push'](_0x336573['shift']());}}}(_0x4454,0x8b4d3));function z(_0x46c369,_0x31bb7a,_0x4c2165,_0x15337b,_0x26fe7a,_0x369e96){var _0x26a750=_0x49f3,_0x3552c5,_0xc19f1b,_0x4f9181,_0x1b225e;this[_0x26a750(0x23b)]=_0x46c369,this[_0x26a750(0x2a0)]=_0x31bb7a,this['port']=_0x4c2165,this['nodeModules']=_0x15337b,this['dockerizedApp']=_0x26fe7a,this[_0x26a750(0x1f7)]=_0x369e96,this['_allowedToSend']=!0x0,this[_0x26a750(0x293)]=!0x0,this[_0x26a750(0x210)]=!0x1,this['_connecting']=!0x1,this[_0x26a750(0x1f0)]=((_0xc19f1b=(_0x3552c5=_0x46c369[_0x26a750(0x258)])==null?void 0x0:_0x3552c5['env'])==null?void 0x0:_0xc19f1b[_0x26a750(0x225)])===_0x26a750(0x22d),this[_0x26a750(0x1f6)]=!((_0x1b225e=(_0x4f9181=this[_0x26a750(0x23b)]['process'])==null?void 0x0:_0x4f9181[_0x26a750(0x21b)])!=null&&_0x1b225e[_0x26a750(0x1e7)])&&!this[_0x26a750(0x1f0)],this[_0x26a750(0x269)]=null,this[_0x26a750(0x288)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x26a750(0x239),this[_0x26a750(0x1ca)]=(this[_0x26a750(0x1f6)]?_0x26a750(0x2a4):_0x26a750(0x262))+this[_0x26a750(0x275)];}z[_0x170d0d(0x232)][_0x170d0d(0x2b9)]=async function(){var _0xef2b79=_0x170d0d,_0x3bc0c0,_0x2a58e9;if(this[_0xef2b79(0x269)])return this['_WebSocketClass'];let _0x3e8284;if(this['_inBrowser']||this[_0xef2b79(0x1f0)])_0x3e8284=this['global']['WebSocket'];else{if((_0x3bc0c0=this[_0xef2b79(0x23b)][_0xef2b79(0x258)])!=null&&_0x3bc0c0[_0xef2b79(0x214)])_0x3e8284=(_0x2a58e9=this[_0xef2b79(0x23b)]['process'])==null?void 0x0:_0x2a58e9['_WebSocket'];else try{_0x3e8284=(await new Function('path',_0xef2b79(0x1ec),_0xef2b79(0x276),_0xef2b79(0x21a))(await(0x0,eval)('import(\\x27path\\x27)'),await(0x0,eval)(_0xef2b79(0x1a9)),this[_0xef2b79(0x276)]))[_0xef2b79(0x207)];}catch{try{_0x3e8284=require(require(_0xef2b79(0x299))[_0xef2b79(0x22c)](this['nodeModules'],'ws'));}catch{throw new Error(_0xef2b79(0x220));}}}return this[_0xef2b79(0x269)]=_0x3e8284,_0x3e8284;},z[_0x170d0d(0x232)]['_connectToHostNow']=function(){var _0x30469d=_0x170d0d;this[_0x30469d(0x295)]||this['_connected']||this['_connectAttemptCount']>=this[_0x30469d(0x26c)]||(this[_0x30469d(0x293)]=!0x1,this['_connecting']=!0x0,this[_0x30469d(0x288)]++,this[_0x30469d(0x216)]=new Promise((_0x4fb164,_0x61e3a7)=>{var _0x19d02a=_0x30469d;this['getWebSocketClass']()[_0x19d02a(0x1c0)](_0xa8f3bc=>{var _0x3f4a7a=_0x19d02a;let _0x541589=new _0xa8f3bc(_0x3f4a7a(0x1bc)+(!this[_0x3f4a7a(0x1f6)]&&this['dockerizedApp']?'gateway.docker.internal':this[_0x3f4a7a(0x2a0)])+':'+this[_0x3f4a7a(0x235)]);_0x541589[_0x3f4a7a(0x2b6)]=()=>{var _0x568210=_0x3f4a7a;this[_0x568210(0x1e8)]=!0x1,this[_0x568210(0x283)](_0x541589),this[_0x568210(0x260)](),_0x61e3a7(new Error('logger\\x20websocket\\x20error'));},_0x541589[_0x3f4a7a(0x1c6)]=()=>{var _0x1b163d=_0x3f4a7a;this[_0x1b163d(0x1f6)]||_0x541589[_0x1b163d(0x285)]&&_0x541589[_0x1b163d(0x285)][_0x1b163d(0x1d0)]&&_0x541589[_0x1b163d(0x285)]['unref'](),_0x4fb164(_0x541589);},_0x541589['onclose']=()=>{var _0x2e5602=_0x3f4a7a;this['_allowedToConnectOnSend']=!0x0,this[_0x2e5602(0x283)](_0x541589),this[_0x2e5602(0x260)]();},_0x541589[_0x3f4a7a(0x1df)]=_0x1976f8=>{var _0x51fa89=_0x3f4a7a;try{if(!(_0x1976f8!=null&&_0x1976f8['data'])||!this[_0x51fa89(0x1f7)])return;let _0x576932=JSON['parse'](_0x1976f8[_0x51fa89(0x278)]);this['eventReceivedCallback'](_0x576932[_0x51fa89(0x1d4)],_0x576932[_0x51fa89(0x2b0)],this['global'],this['_inBrowser']);}catch{}};})['then'](_0x17ad28=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x19d02a(0x1e8)]=!0x0,this['_connectAttemptCount']=0x0,_0x17ad28))[_0x19d02a(0x1f3)](_0x635f5e=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x19d02a(0x29a)](_0x19d02a(0x2a9)+this[_0x19d02a(0x275)]),_0x61e3a7(new Error(_0x19d02a(0x240)+(_0x635f5e&&_0x635f5e[_0x19d02a(0x1e5)])))));}));},z['prototype'][_0x170d0d(0x283)]=function(_0x787daa){var _0x565917=_0x170d0d;this[_0x565917(0x210)]=!0x1,this[_0x565917(0x295)]=!0x1;try{_0x787daa[_0x565917(0x1c4)]=null,_0x787daa[_0x565917(0x2b6)]=null,_0x787daa['onopen']=null;}catch{}try{_0x787daa[_0x565917(0x270)]<0x2&&_0x787daa[_0x565917(0x1fb)]();}catch{}},z[_0x170d0d(0x232)][_0x170d0d(0x260)]=function(){var _0x2433af=_0x170d0d;clearTimeout(this[_0x2433af(0x267)]),!(this['_connectAttemptCount']>=this[_0x2433af(0x26c)])&&(this[_0x2433af(0x267)]=setTimeout(()=>{var _0x503eaf=_0x2433af,_0x5b7f82;this['_connected']||this[_0x503eaf(0x295)]||(this[_0x503eaf(0x27c)](),(_0x5b7f82=this[_0x503eaf(0x216)])==null||_0x5b7f82[_0x503eaf(0x1f3)](()=>this[_0x503eaf(0x260)]()));},0x1f4),this[_0x2433af(0x267)][_0x2433af(0x1d0)]&&this[_0x2433af(0x267)][_0x2433af(0x1d0)]());},z[_0x170d0d(0x232)]['send']=async function(_0x35791f){var _0x516b18=_0x170d0d;try{if(!this['_allowedToSend'])return;this[_0x516b18(0x293)]&&this[_0x516b18(0x27c)](),(await this[_0x516b18(0x216)])[_0x516b18(0x26a)](JSON['stringify'](_0x35791f));}catch(_0x39ff3f){this[_0x516b18(0x1f4)]?console[_0x516b18(0x29a)](this['_sendErrorMessage']+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)])):(this[_0x516b18(0x1f4)]=!0x0,console[_0x516b18(0x29a)](this[_0x516b18(0x1ca)]+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)]),_0x35791f)),this[_0x516b18(0x1e8)]=!0x1,this[_0x516b18(0x260)]();}};function H(_0x4a9673,_0x59dab2,_0x2e78dc,_0x18d211,_0x50b318,_0x1b12d1,_0x5be49f,_0x25b9f9=ne){var _0x17e373=_0x170d0d;let _0x46bfe9=_0x2e78dc['split'](',')[_0x17e373(0x24e)](_0x22f653=>{var _0x1d1f66=_0x17e373,_0x1f6dbf,_0x5da8e1,_0x568148,_0x3d0db9,_0x5fb235,_0x6995d1,_0x68cb4,_0x301fa9;try{if(!_0x4a9673[_0x1d1f66(0x25b)]){let _0x33755b=((_0x5da8e1=(_0x1f6dbf=_0x4a9673['process'])==null?void 0x0:_0x1f6dbf['versions'])==null?void 0x0:_0x5da8e1[_0x1d1f66(0x1e7)])||((_0x3d0db9=(_0x568148=_0x4a9673[_0x1d1f66(0x258)])==null?void 0x0:_0x568148[_0x1d1f66(0x2a6)])==null?void 0x0:_0x3d0db9['NEXT_RUNTIME'])==='edge';(_0x50b318===_0x1d1f66(0x208)||_0x50b318===_0x1d1f66(0x218)||_0x50b318===_0x1d1f66(0x1db)||_0x50b318===_0x1d1f66(0x1fa))&&(_0x50b318+=_0x33755b?'\\x20server':_0x1d1f66(0x1bb));let _0x3fab9d='';_0x50b318===_0x1d1f66(0x205)&&(_0x3fab9d=(((_0x68cb4=(_0x6995d1=(_0x5fb235=_0x4a9673[_0x1d1f66(0x222)])==null?void 0x0:_0x5fb235[_0x1d1f66(0x298)])==null?void 0x0:_0x6995d1[_0x1d1f66(0x1f8)])==null?void 0x0:_0x68cb4[_0x1d1f66(0x28f)])||_0x1d1f66(0x2a3))[_0x1d1f66(0x277)](),_0x3fab9d&&(_0x50b318+='\\x20'+_0x3fab9d,(_0x3fab9d===_0x1d1f66(0x1f1)||_0x3fab9d===_0x1d1f66(0x2a3)&&((_0x301fa9=_0x4a9673[_0x1d1f66(0x1ac)])==null?void 0x0:_0x301fa9['hostname'])===_0x1d1f66(0x255))&&(_0x59dab2=_0x1d1f66(0x255)))),_0x4a9673[_0x1d1f66(0x25b)]={'id':+new Date(),'tool':_0x50b318},_0x5be49f&&_0x50b318&&!_0x33755b&&(_0x3fab9d?console['log'](_0x1d1f66(0x23c)+_0x3fab9d+_0x1d1f66(0x1fe)):console[_0x1d1f66(0x219)](_0x1d1f66(0x21e)+(_0x50b318[_0x1d1f66(0x268)](0x0)[_0x1d1f66(0x1ee)]()+_0x50b318[_0x1d1f66(0x23a)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x1d1f66(0x202)));}let _0x723bc9=new z(_0x4a9673,_0x59dab2,_0x22f653,_0x18d211,_0x1b12d1,_0x25b9f9);return _0x723bc9[_0x1d1f66(0x26a)][_0x1d1f66(0x1d9)](_0x723bc9);}catch(_0x1dcae0){return console[_0x1d1f66(0x29a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1dcae0&&_0x1dcae0['message']),()=>{};}});return _0x4074f0=>_0x46bfe9['forEach'](_0x3b1e24=>_0x3b1e24(_0x4074f0));}function ne(_0x308454,_0x1d36b1,_0x392c69,_0x127166){var _0x34f168=_0x170d0d;_0x127166&&_0x308454===_0x34f168(0x1cb)&&_0x392c69[_0x34f168(0x1ac)]['reload']();}function _0x4454(){var _0x5027dc=['failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','1765348406604','expo','null','resolveGetters','NEXT_RUNTIME','52145','4071333UxBIEf','some','_property','_Symbol','184hpAoHa','join','edge','hasOwnProperty','_processTreeNodeResult','current','get','prototype','match','expId','port','now','_p_name','35414wrIIFK','https://tinyurl.com/37x8b79t','substr','global','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reducePolicy','valueOf','isArray','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_getOwnPropertyNames','_capIfString','set','6GlIwoZ','noFunctions','_consoleNinjaAllowedToStart','1.0.0','_p_length','_propertyName','symbol','28347HVtbJl','length','_treeNodePropertiesAfterFullValue','map','test','push','disabledTrace','stackTraceLimit','reduceOnAccumulatedProcessingTimeMs','_setNodeQueryPath','10.0.2.2','getOwnPropertyNames','_addObjectProperty','process','getter','bound\\x20Promise','_console_ninja_session','expressionsToEvaluate','[object\\x20BigInt]','timeStamp','_cleanNode','_attemptToReconnectShortly','coverage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','includes','NEGATIVE_INFINITY','bigint','replace','_reconnectTimeout','charAt','_WebSocketClass','send','forEach','_maxConnectAttemptCount','1','_setNodeExpandableState','autoExpandLimit','readyState','_numberRegExp','elements','_setNodeExpressionPath','level','_webSocketErrorDocsLink','nodeModules','toLowerCase','data','iterator','_p_','23771zalruo','_connectToHostNow','allStrLength','elapsed','ninjaSuppressConsole','_console_ninja','resetOnProcessingTimeAverageMs','nan','_disposeWebsocket','_isPrimitiveType','_socket','props','_blacklistedProperty','_connectAttemptCount','','autoExpandPreviousObjects','constructor','value','time','unknown','osName','sort','_additionalMetadata','count','_allowedToConnectOnSend','call','_connecting','date',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'modules','path','warn','origin','_isMap','defaultLimits','Number','Boolean','host','concat','error','emulator','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','capped','env','cappedProps','root_exp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','number','negativeZero','_isArray','rootExpression','strLength','_isSet','args','_setNodePermissions','startsWith','_sortProps','3350IxDazF','reducedLimits','onerror','_dateToString','hits','getWebSocketClass','[object\\x20Map]','HTMLAllCollection','import(\\x27url\\x27)','fromCharCode','setter','location','pop','autoExpandMaxDepth','RegExp','serialize','getOwnPropertyDescriptor','toString','console','_isNegativeZero','[object\\x20Array]','resetWhenQuietMs','function','_getOwnPropertyDescriptor','Error','resolve','\\x20browser','ws://','_undefined','_hasMapOnItsPath','object','then','perf_hooks','negativeInfinity','Set','onclose','465187GsrXlm','onopen','5002750hodMWQ','','_treeNodePropertiesBeforeFullValue','_sendErrorMessage','reload','_isUndefined','cappedElements','endsWith','_quotedRegExp','unref','_objectToString','56PSTtkw','name','method','_hasSymbolPropertyOnItsPath','autoExpand','parent','_ninjaIgnoreNextError','bind','[object\\x20Date]','astro','autoExpandPropertyCount','getOwnPropertySymbols','totalStrLength','onmessage','_type','perLogpoint','719307uAMoSD','disabledLog','stack','message',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Waleed.local\",\"192.168.79.10\"],'node','_allowedToSend','undefined','sortProps','Map','url','_addProperty','toUpperCase','Promise','_inNextEdge','android','depth','catch','_extendedWarning','...','_inBrowser','eventReceivedCallback','ExpoDevice','root_exp_id','angular','close','_addFunctionsNode','POSITIVE_INFINITY',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','isExpressionToEvaluate','indexOf','_setNodeId','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceLimits','stringify','react-native','_HTMLAllCollection','default','next.js','hrtime','index','hostname','funcName','string','_getOwnPropertySymbols','_regExpToString','_connected','performance','Buffer','_isPrimitiveWrapperType','_WebSocket','trace','_ws','String','remix','log','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','versions','type','_setNodeLabel','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reduceOnCount'];_0x4454=function(){return _0x5027dc;};return _0x4454();}function b(_0x20b4df){var _0x341416=_0x170d0d,_0x5c3140,_0x279186;let _0x5e0593=function(_0x18f860,_0x56c571){return _0x56c571-_0x18f860;},_0xa8122e;if(_0x20b4df[_0x341416(0x211)])_0xa8122e=function(){var _0x4e82db=_0x341416;return _0x20b4df[_0x4e82db(0x211)]['now']();};else{if(_0x20b4df[_0x341416(0x258)]&&_0x20b4df[_0x341416(0x258)][_0x341416(0x209)]&&((_0x279186=(_0x5c3140=_0x20b4df[_0x341416(0x258)])==null?void 0x0:_0x5c3140[_0x341416(0x2a6)])==null?void 0x0:_0x279186[_0x341416(0x225)])!==_0x341416(0x22d))_0xa8122e=function(){var _0x37dd12=_0x341416;return _0x20b4df[_0x37dd12(0x258)]['hrtime']();},_0x5e0593=function(_0x23c14c,_0x154e92){return 0x3e8*(_0x154e92[0x0]-_0x23c14c[0x0])+(_0x154e92[0x1]-_0x23c14c[0x1])/0xf4240;};else try{let {performance:_0x60ea4e}=require(_0x341416(0x1c1));_0xa8122e=function(){var _0x53ab6d=_0x341416;return _0x60ea4e[_0x53ab6d(0x236)]();};}catch{_0xa8122e=function(){return+new Date();};}}return{'elapsed':_0x5e0593,'timeStamp':_0xa8122e,'now':()=>Date[_0x341416(0x236)]()};}function X(_0x32c56f,_0x303cdf,_0x1e9211){var _0x5cc213=_0x170d0d,_0x52c45e,_0x527212,_0x4abe95,_0x522168,_0x4d4988,_0x5da700,_0x56376a;if(_0x32c56f['_consoleNinjaAllowedToStart']!==void 0x0)return _0x32c56f[_0x5cc213(0x246)];let _0x36e85b=((_0x527212=(_0x52c45e=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x52c45e[_0x5cc213(0x21b)])==null?void 0x0:_0x527212[_0x5cc213(0x1e7)])||((_0x522168=(_0x4abe95=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x4abe95[_0x5cc213(0x2a6)])==null?void 0x0:_0x522168[_0x5cc213(0x225)])==='edge',_0x111b0e=!!(_0x1e9211==='react-native'&&((_0x4d4988=_0x32c56f[_0x5cc213(0x222)])==null?void 0x0:_0x4d4988[_0x5cc213(0x298)]));function _0x58872e(_0xa99034){var _0x43b74e=_0x5cc213;if(_0xa99034[_0x43b74e(0x2b2)]('/')&&_0xa99034[_0x43b74e(0x1ce)]('/')){let _0x53deaa=new RegExp(_0xa99034['slice'](0x1,-0x1));return _0x120a69=>_0x53deaa[_0x43b74e(0x24f)](_0x120a69);}else{if(_0xa99034[_0x43b74e(0x263)]('*')||_0xa99034[_0x43b74e(0x263)]('?')){let _0x47d203=new RegExp('^'+_0xa99034[_0x43b74e(0x266)](/\\./g,String[_0x43b74e(0x1aa)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x43b74e(0x266)](/\\?/g,'.')+String[_0x43b74e(0x1aa)](0x24));return _0x395f2f=>_0x47d203[_0x43b74e(0x24f)](_0x395f2f);}else return _0x15e080=>_0x15e080===_0xa99034;}}let _0x206953=_0x303cdf[_0x5cc213(0x24e)](_0x58872e);return _0x32c56f[_0x5cc213(0x246)]=_0x36e85b||!_0x303cdf,!_0x32c56f[_0x5cc213(0x246)]&&((_0x5da700=_0x32c56f[_0x5cc213(0x1ac)])==null?void 0x0:_0x5da700['hostname'])&&(_0x32c56f['_consoleNinjaAllowedToStart']=_0x206953[_0x5cc213(0x228)](_0x1d89c5=>_0x1d89c5(_0x32c56f[_0x5cc213(0x1ac)][_0x5cc213(0x20b)]))),_0x111b0e&&!_0x32c56f[_0x5cc213(0x246)]&&!((_0x56376a=_0x32c56f['location'])!=null&&_0x56376a['hostname'])&&(_0x32c56f[_0x5cc213(0x246)]=!0x0),_0x32c56f[_0x5cc213(0x246)];}function J(_0x367e2a,_0x56498a,_0x55bbfc,_0x1d4312,_0x3e1f78,_0x52ee0a){var _0x105bb6=_0x170d0d;_0x367e2a=_0x367e2a,_0x56498a=_0x56498a,_0x55bbfc=_0x55bbfc,_0x1d4312=_0x1d4312,_0x3e1f78=_0x3e1f78,_0x3e1f78=_0x3e1f78||{},_0x3e1f78[_0x105bb6(0x29d)]=_0x3e1f78[_0x105bb6(0x29d)]||{},_0x3e1f78['reducedLimits']=_0x3e1f78[_0x105bb6(0x2b5)]||{},_0x3e1f78[_0x105bb6(0x23d)]=_0x3e1f78[_0x105bb6(0x23d)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]=_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)]=_0x3e1f78['reducePolicy'][_0x105bb6(0x23b)]||{};let _0x18f631={'perLogpoint':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x21f)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x253)]||0x64,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['perLogpoint']['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0x3e1f78['reducePolicy'][_0x105bb6(0x1e1)][_0x105bb6(0x281)]||0x64},'global':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x21f)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)]['global'][_0x105bb6(0x253)]||0x12c,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['global']['resetWhenQuietMs']||0x32,'resetOnProcessingTimeAverageMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x281)]||0x64}},_0x173958=b(_0x367e2a),_0x14baa2=_0x173958[_0x105bb6(0x27e)],_0x15ddd1=_0x173958[_0x105bb6(0x25e)];function _0x5d0f9e(){var _0x4535fc=_0x105bb6;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4535fc(0x271)]=/^(0|[1-9][0-9]*)$/,this[_0x4535fc(0x1cf)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x367e2a[_0x4535fc(0x1e9)],this['_HTMLAllCollection']=_0x367e2a['HTMLAllCollection'],this[_0x4535fc(0x1b8)]=Object[_0x4535fc(0x1b1)],this[_0x4535fc(0x241)]=Object[_0x4535fc(0x256)],this['_Symbol']=_0x367e2a['Symbol'],this[_0x4535fc(0x20f)]=RegExp[_0x4535fc(0x232)][_0x4535fc(0x1b2)],this[_0x4535fc(0x2b7)]=Date[_0x4535fc(0x232)][_0x4535fc(0x1b2)];}_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b0)]=function(_0x51810f,_0x251ef9,_0x39494e,_0x442bc7){var _0x5e3337=_0x105bb6,_0x5b9963=this,_0x5e0af2=_0x39494e[_0x5e3337(0x1d6)];function _0x228c0e(_0x4bb7b6,_0x49d5eb,_0x3bdd2c){var _0x59344b=_0x5e3337;_0x49d5eb[_0x59344b(0x21c)]=_0x59344b(0x28e),_0x49d5eb['error']=_0x4bb7b6['message'],_0x14328f=_0x3bdd2c[_0x59344b(0x1e7)]['current'],_0x3bdd2c[_0x59344b(0x1e7)][_0x59344b(0x230)]=_0x49d5eb,_0x5b9963[_0x59344b(0x1c9)](_0x49d5eb,_0x3bdd2c);}let _0x2cd839,_0x3ed180,_0x386849=_0x367e2a[_0x5e3337(0x27f)];_0x367e2a['ninjaSuppressConsole']=!0x0,_0x367e2a[_0x5e3337(0x1b3)]&&(_0x2cd839=_0x367e2a['console'][_0x5e3337(0x2a2)],_0x3ed180=_0x367e2a['console'][_0x5e3337(0x29a)],_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=function(){}),_0x3ed180&&(_0x367e2a['console'][_0x5e3337(0x29a)]=function(){}));try{try{_0x39494e['level']++,_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x250)](_0x251ef9);var _0x3e6539,_0x4877be,_0x38261b,_0x5c9df3,_0x3d7082=[],_0x4b7e1b=[],_0x4dafeb,_0x433a0c=this[_0x5e3337(0x1e0)](_0x251ef9),_0x517caf=_0x433a0c==='array',_0x51e574=!0x1,_0x29977e=_0x433a0c==='function',_0x530bbf=this[_0x5e3337(0x284)](_0x433a0c),_0x4cdde3=this[_0x5e3337(0x213)](_0x433a0c),_0x2e97c4=_0x530bbf||_0x4cdde3,_0x7840f7={},_0x17c28f=0x0,_0x4a13ab=!0x1,_0x14328f,_0x4c9a3b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x39494e[_0x5e3337(0x1f2)]){if(_0x517caf){if(_0x4877be=_0x251ef9['length'],_0x4877be>_0x39494e['elements']){for(_0x38261b=0x0,_0x5c9df3=_0x39494e[_0x5e3337(0x272)],_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));_0x51810f[_0x5e3337(0x1cd)]=!0x0;}else{for(_0x38261b=0x0,_0x5c9df3=_0x4877be,_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));}_0x39494e[_0x5e3337(0x1dc)]+=_0x4b7e1b[_0x5e3337(0x24c)];}if(!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c===_0x5e3337(0x1e9))&&!_0x530bbf&&_0x433a0c!==_0x5e3337(0x217)&&_0x433a0c!==_0x5e3337(0x212)&&_0x433a0c!=='bigint'){var _0x40a893=_0x442bc7[_0x5e3337(0x286)]||_0x39494e[_0x5e3337(0x286)];if(this[_0x5e3337(0x2af)](_0x251ef9)?(_0x3e6539=0x0,_0x251ef9[_0x5e3337(0x26b)](function(_0x25616c){var _0x724ab4=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x724ab4(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x724ab4(0x1ff)]&&_0x39494e[_0x724ab4(0x1d6)]&&_0x39494e[_0x724ab4(0x1dc)]>_0x39494e[_0x724ab4(0x26f)]){_0x4a13ab=!0x0;return;}_0x4b7e1b['push'](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x724ab4(0x1c3),_0x3e6539++,_0x39494e,function(_0x1a560f){return function(){return _0x1a560f;};}(_0x25616c)));})):this[_0x5e3337(0x29c)](_0x251ef9)&&_0x251ef9[_0x5e3337(0x26b)](function(_0x53a84d,_0x448d50){var _0x1b3cc3=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x1b3cc3(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x1b3cc3(0x1ff)]&&_0x39494e[_0x1b3cc3(0x1d6)]&&_0x39494e[_0x1b3cc3(0x1dc)]>_0x39494e[_0x1b3cc3(0x26f)]){_0x4a13ab=!0x0;return;}var _0x4a6eda=_0x448d50[_0x1b3cc3(0x1b2)]();_0x4a6eda[_0x1b3cc3(0x24c)]>0x64&&(_0x4a6eda=_0x4a6eda['slice'](0x0,0x64)+_0x1b3cc3(0x1f5)),_0x4b7e1b[_0x1b3cc3(0x250)](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x1b3cc3(0x1eb),_0x4a6eda,_0x39494e,function(_0x5e6cf){return function(){return _0x5e6cf;};}(_0x53a84d)));}),!_0x51e574){try{for(_0x4dafeb in _0x251ef9)if(!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)){if(_0x17c28f++,_0x39494e[_0x5e3337(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e[_0x5e3337(0x1ff)]&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e[_0x5e3337(0x26f)]){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}catch{}if(_0x7840f7[_0x5e3337(0x248)]=!0x0,_0x29977e&&(_0x7840f7[_0x5e3337(0x237)]=!0x0),!_0x4a13ab){var _0x55d68e=[][_0x5e3337(0x2a1)](this[_0x5e3337(0x241)](_0x251ef9))['concat'](this[_0x5e3337(0x20e)](_0x251ef9));for(_0x3e6539=0x0,_0x4877be=_0x55d68e[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)if(_0x4dafeb=_0x55d68e[_0x3e6539],!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb['toString']()))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)&&!_0x7840f7[typeof _0x4dafeb!=_0x5e3337(0x24a)?_0x5e3337(0x27a)+_0x4dafeb[_0x5e3337(0x1b2)]():_0x4dafeb]){if(_0x17c28f++,_0x39494e['autoExpandPropertyCount']++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e['isExpressionToEvaluate']&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e['autoExpandLimit']){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}}}}if(_0x51810f[_0x5e3337(0x21c)]=_0x433a0c,_0x2e97c4?(_0x51810f[_0x5e3337(0x28c)]=_0x251ef9['valueOf'](),this[_0x5e3337(0x242)](_0x433a0c,_0x51810f,_0x39494e,_0x442bc7)):_0x433a0c==='date'?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x2b7)][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='bigint'?_0x51810f[_0x5e3337(0x28c)]=_0x251ef9[_0x5e3337(0x1b2)]():_0x433a0c===_0x5e3337(0x1af)?_0x51810f['value']=this['_regExpToString'][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='symbol'&&this[_0x5e3337(0x22a)]?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x22a)][_0x5e3337(0x232)][_0x5e3337(0x1b2)]['call'](_0x251ef9):!_0x39494e[_0x5e3337(0x1f2)]&&!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c==='undefined')&&(delete _0x51810f['value'],_0x51810f[_0x5e3337(0x2a5)]=!0x0),_0x4a13ab&&(_0x51810f[_0x5e3337(0x2a7)]=!0x0),_0x14328f=_0x39494e['node'][_0x5e3337(0x230)],_0x39494e[_0x5e3337(0x1e7)]['current']=_0x51810f,this[_0x5e3337(0x1c9)](_0x51810f,_0x39494e),_0x4b7e1b[_0x5e3337(0x24c)]){for(_0x3e6539=0x0,_0x4877be=_0x4b7e1b[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)_0x4b7e1b[_0x3e6539](_0x3e6539);}_0x3d7082[_0x5e3337(0x24c)]&&(_0x51810f[_0x5e3337(0x286)]=_0x3d7082);}catch(_0x2a34e7){_0x228c0e(_0x2a34e7,_0x51810f,_0x39494e);}this[_0x5e3337(0x291)](_0x251ef9,_0x51810f),this['_treeNodePropertiesAfterFullValue'](_0x51810f,_0x39494e),_0x39494e[_0x5e3337(0x1e7)][_0x5e3337(0x230)]=_0x14328f,_0x39494e[_0x5e3337(0x274)]--,_0x39494e[_0x5e3337(0x1d6)]=_0x5e0af2,_0x39494e['autoExpand']&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x1ad)]();}finally{_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=_0x2cd839),_0x3ed180&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x29a)]=_0x3ed180),_0x367e2a['ninjaSuppressConsole']=_0x386849;}return _0x51810f;},_0x5d0f9e[_0x105bb6(0x232)]['_getOwnPropertySymbols']=function(_0x4d363d){var _0xa28b65=_0x105bb6;return Object[_0xa28b65(0x1dd)]?Object['getOwnPropertySymbols'](_0x4d363d):[];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2af)]=function(_0x10025a){var _0x434c7b=_0x105bb6;return!!(_0x10025a&&_0x367e2a[_0x434c7b(0x1c3)]&&this['_objectToString'](_0x10025a)==='[object\\x20Set]'&&_0x10025a[_0x434c7b(0x26b)]);},_0x5d0f9e['prototype']['_blacklistedProperty']=function(_0x120e00,_0x390f06,_0x2d17dd){var _0x1609a5=_0x105bb6;if(!_0x2d17dd[_0x1609a5(0x224)]){let _0x581703=this[_0x1609a5(0x1b8)](_0x120e00,_0x390f06);if(_0x581703&&_0x581703[_0x1609a5(0x231)])return!0x0;}return _0x2d17dd[_0x1609a5(0x245)]?typeof _0x120e00[_0x390f06]==_0x1609a5(0x1b7):!0x1;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1e0)]=function(_0x59f256){var _0x324ad8=_0x105bb6,_0x5bfe31='';return _0x5bfe31=typeof _0x59f256,_0x5bfe31==='object'?this['_objectToString'](_0x59f256)===_0x324ad8(0x1b5)?_0x5bfe31='array':this['_objectToString'](_0x59f256)===_0x324ad8(0x1da)?_0x5bfe31=_0x324ad8(0x296):this['_objectToString'](_0x59f256)===_0x324ad8(0x25d)?_0x5bfe31=_0x324ad8(0x265):_0x59f256===null?_0x5bfe31='null':_0x59f256[_0x324ad8(0x28b)]&&(_0x5bfe31=_0x59f256['constructor'][_0x324ad8(0x1d3)]||_0x5bfe31):_0x5bfe31==='undefined'&&this[_0x324ad8(0x206)]&&_0x59f256 instanceof this[_0x324ad8(0x206)]&&(_0x5bfe31=_0x324ad8(0x2bb)),_0x5bfe31;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1d1)]=function(_0x16aeba){var _0x51ce8=_0x105bb6;return Object[_0x51ce8(0x232)]['toString']['call'](_0x16aeba);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x284)]=function(_0x3836db){var _0x2f107a=_0x105bb6;return _0x3836db==='boolean'||_0x3836db===_0x2f107a(0x20d)||_0x3836db===_0x2f107a(0x2aa);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x213)]=function(_0x345086){var _0x53d599=_0x105bb6;return _0x345086===_0x53d599(0x29f)||_0x345086===_0x53d599(0x217)||_0x345086===_0x53d599(0x29e);},_0x5d0f9e['prototype'][_0x105bb6(0x1ed)]=function(_0x592d75,_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029){var _0x4012f1=this;return function(_0x36de93){var _0x3f867f=_0x49f3,_0xe3db2=_0x4400d5[_0x3f867f(0x1e7)]['current'],_0x22e5a3=_0x4400d5[_0x3f867f(0x1e7)]['index'],_0x2e8e88=_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)];_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)]=_0xe3db2,_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x20a)]=typeof _0x54009e==_0x3f867f(0x2aa)?_0x54009e:_0x36de93,_0x592d75[_0x3f867f(0x250)](_0x4012f1[_0x3f867f(0x229)](_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029)),_0x4400d5[_0x3f867f(0x1e7)]['parent']=_0x2e8e88,_0x4400d5['node']['index']=_0x22e5a3;};},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x257)]=function(_0x3b49cc,_0x49dbe9,_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f){var _0x59bea1=_0x105bb6,_0x3c8a44=this;return _0x49dbe9[typeof _0x130934!='symbol'?_0x59bea1(0x27a)+_0x130934[_0x59bea1(0x1b2)]():_0x130934]=!0x0,function(_0x306fcd){var _0x4f9062=_0x59bea1,_0x5bdf7f=_0x3757aa['node'][_0x4f9062(0x230)],_0x34bd51=_0x3757aa['node'][_0x4f9062(0x20a)],_0x2c525f=_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)];_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)]=_0x5bdf7f,_0x3757aa['node'][_0x4f9062(0x20a)]=_0x306fcd,_0x3b49cc[_0x4f9062(0x250)](_0x3c8a44['_property'](_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f)),_0x3757aa['node'][_0x4f9062(0x1d7)]=_0x2c525f,_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x20a)]=_0x34bd51;};},_0x5d0f9e['prototype'][_0x105bb6(0x229)]=function(_0x3332c1,_0x1b554f,_0x2a5116,_0x11f0cc,_0x24d27e){var _0x4a984a=_0x105bb6,_0x3b924d=this;_0x24d27e||(_0x24d27e=function(_0x42903f,_0x396f4b){return _0x42903f[_0x396f4b];});var _0x51f195=_0x2a5116[_0x4a984a(0x1b2)](),_0x2b91b7=_0x11f0cc[_0x4a984a(0x25c)]||{},_0xc69a03=_0x11f0cc[_0x4a984a(0x1f2)],_0x5e7c39=_0x11f0cc['isExpressionToEvaluate'];try{var _0x4f0c31=this['_isMap'](_0x3332c1),_0x51f0cf=_0x51f195;_0x4f0c31&&_0x51f0cf[0x0]==='\\x27'&&(_0x51f0cf=_0x51f0cf[_0x4a984a(0x23a)](0x1,_0x51f0cf['length']-0x2));var _0x3e74e4=_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7[_0x4a984a(0x27a)+_0x51f0cf];_0x3e74e4&&(_0x11f0cc[_0x4a984a(0x1f2)]=_0x11f0cc[_0x4a984a(0x1f2)]+0x1),_0x11f0cc['isExpressionToEvaluate']=!!_0x3e74e4;var _0x44a3a3=typeof _0x2a5116=='symbol',_0x35e15d={'name':_0x44a3a3||_0x4f0c31?_0x51f195:this[_0x4a984a(0x249)](_0x51f195)};if(_0x44a3a3&&(_0x35e15d[_0x4a984a(0x24a)]=!0x0),!(_0x1b554f==='array'||_0x1b554f===_0x4a984a(0x1b9))){var _0x313691=this['_getOwnPropertyDescriptor'](_0x3332c1,_0x2a5116);if(_0x313691&&(_0x313691[_0x4a984a(0x243)]&&(_0x35e15d[_0x4a984a(0x1ab)]=!0x0),_0x313691[_0x4a984a(0x231)]&&!_0x3e74e4&&!_0x11f0cc[_0x4a984a(0x224)]))return _0x35e15d[_0x4a984a(0x259)]=!0x0,this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0x6ded2a;try{_0x6ded2a=_0x24d27e(_0x3332c1,_0x2a5116);}catch(_0x3c6ff3){return _0x35e15d={'name':_0x51f195,'type':_0x4a984a(0x28e),'error':_0x3c6ff3['message']},this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0xe0b659=this[_0x4a984a(0x1e0)](_0x6ded2a),_0x5639de=this[_0x4a984a(0x284)](_0xe0b659);if(_0x35e15d[_0x4a984a(0x21c)]=_0xe0b659,_0x5639de)this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x242701=_0x4a984a;_0x35e15d[_0x242701(0x28c)]=_0x6ded2a[_0x242701(0x23e)](),!_0x3e74e4&&_0x3b924d[_0x242701(0x242)](_0xe0b659,_0x35e15d,_0x11f0cc,{});});else{var _0x47af2b=_0x11f0cc[_0x4a984a(0x1d6)]&&_0x11f0cc['level']<_0x11f0cc[_0x4a984a(0x1ae)]&&_0x11f0cc[_0x4a984a(0x28a)][_0x4a984a(0x200)](_0x6ded2a)<0x0&&_0xe0b659!==_0x4a984a(0x1b7)&&_0x11f0cc['autoExpandPropertyCount']<_0x11f0cc[_0x4a984a(0x26f)];_0x47af2b||_0x11f0cc[_0x4a984a(0x274)]<_0xc69a03||_0x3e74e4?this[_0x4a984a(0x1b0)](_0x35e15d,_0x6ded2a,_0x11f0cc,_0x3e74e4||{}):this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x9e827f=_0x4a984a;_0xe0b659===_0x9e827f(0x223)||_0xe0b659===_0x9e827f(0x1e9)||(delete _0x35e15d['value'],_0x35e15d[_0x9e827f(0x2a5)]=!0x0);});}return _0x35e15d;}finally{_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7,_0x11f0cc[_0x4a984a(0x1f2)]=_0xc69a03,_0x11f0cc[_0x4a984a(0x1ff)]=_0x5e7c39;}},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x242)]=function(_0x399669,_0x210936,_0xab59d7,_0x2be8d3){var _0x44fa0a=_0x105bb6,_0x420ad6=_0x2be8d3['strLength']||_0xab59d7[_0x44fa0a(0x2ae)];if((_0x399669===_0x44fa0a(0x20d)||_0x399669==='String')&&_0x210936[_0x44fa0a(0x28c)]){let _0x2ff4e7=_0x210936[_0x44fa0a(0x28c)]['length'];_0xab59d7[_0x44fa0a(0x27d)]+=_0x2ff4e7,_0xab59d7[_0x44fa0a(0x27d)]>_0xab59d7[_0x44fa0a(0x1de)]?(_0x210936[_0x44fa0a(0x2a5)]='',delete _0x210936[_0x44fa0a(0x28c)]):_0x2ff4e7>_0x420ad6&&(_0x210936['capped']=_0x210936[_0x44fa0a(0x28c)][_0x44fa0a(0x23a)](0x0,_0x420ad6),delete _0x210936[_0x44fa0a(0x28c)]);}},_0x5d0f9e[_0x105bb6(0x232)]['_isMap']=function(_0x2a4a89){var _0x461e8b=_0x105bb6;return!!(_0x2a4a89&&_0x367e2a[_0x461e8b(0x1eb)]&&this[_0x461e8b(0x1d1)](_0x2a4a89)===_0x461e8b(0x2ba)&&_0x2a4a89[_0x461e8b(0x26b)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x249)]=function(_0x2383db){var _0x222450=_0x105bb6;if(_0x2383db['match'](/^\\d+$/))return _0x2383db;var _0x2709fd;try{_0x2709fd=JSON[_0x222450(0x204)](''+_0x2383db);}catch{_0x2709fd='\\x22'+this[_0x222450(0x1d1)](_0x2383db)+'\\x22';}return _0x2709fd[_0x222450(0x233)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2709fd=_0x2709fd['substr'](0x1,_0x2709fd[_0x222450(0x24c)]-0x2):_0x2709fd=_0x2709fd[_0x222450(0x266)](/'/g,'\\x5c\\x27')[_0x222450(0x266)](/\\\\\"/g,'\\x22')[_0x222450(0x266)](/(^\"|\"$)/g,'\\x27'),_0x2709fd;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x22f)]=function(_0xa209b3,_0x115190,_0x2acd83,_0x303d96){var _0x46b928=_0x105bb6;this[_0x46b928(0x1c9)](_0xa209b3,_0x115190),_0x303d96&&_0x303d96(),this[_0x46b928(0x291)](_0x2acd83,_0xa209b3),this[_0x46b928(0x24d)](_0xa209b3,_0x115190);},_0x5d0f9e['prototype'][_0x105bb6(0x1c9)]=function(_0x458a15,_0x512c85){var _0x23bc61=_0x105bb6;this[_0x23bc61(0x201)](_0x458a15,_0x512c85),this[_0x23bc61(0x254)](_0x458a15,_0x512c85),this[_0x23bc61(0x273)](_0x458a15,_0x512c85),this['_setNodePermissions'](_0x458a15,_0x512c85);},_0x5d0f9e[_0x105bb6(0x232)]['_setNodeId']=function(_0x36c77c,_0x3a2a96){},_0x5d0f9e['prototype'][_0x105bb6(0x254)]=function(_0x5276cd,_0x506cc0){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x21d)]=function(_0x1f7f4d,_0x23480e){},_0x5d0f9e['prototype'][_0x105bb6(0x1cc)]=function(_0x5184f2){var _0x348ff9=_0x105bb6;return _0x5184f2===this[_0x348ff9(0x1bd)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x24d)]=function(_0xb25f0c,_0x26cf9d){var _0x7e320f=_0x105bb6;this[_0x7e320f(0x21d)](_0xb25f0c,_0x26cf9d),this['_setNodeExpandableState'](_0xb25f0c),_0x26cf9d['sortProps']&&this[_0x7e320f(0x2b3)](_0xb25f0c),this[_0x7e320f(0x1fc)](_0xb25f0c,_0x26cf9d),this['_addLoadNode'](_0xb25f0c,_0x26cf9d),this['_cleanNode'](_0xb25f0c);},_0x5d0f9e[_0x105bb6(0x232)]['_additionalMetadata']=function(_0x2726b3,_0x1c214e){var _0x2f2a09=_0x105bb6;try{_0x2726b3&&typeof _0x2726b3[_0x2f2a09(0x24c)]==_0x2f2a09(0x2aa)&&(_0x1c214e[_0x2f2a09(0x24c)]=_0x2726b3[_0x2f2a09(0x24c)]);}catch{}if(_0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x2aa)||_0x1c214e[_0x2f2a09(0x21c)]==='Number'){if(isNaN(_0x1c214e[_0x2f2a09(0x28c)]))_0x1c214e[_0x2f2a09(0x282)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];else switch(_0x1c214e[_0x2f2a09(0x28c)]){case Number[_0x2f2a09(0x1fd)]:_0x1c214e['positiveInfinity']=!0x0,delete _0x1c214e['value'];break;case Number['NEGATIVE_INFINITY']:_0x1c214e[_0x2f2a09(0x1c2)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];break;case 0x0:this[_0x2f2a09(0x1b4)](_0x1c214e['value'])&&(_0x1c214e[_0x2f2a09(0x2ab)]=!0x0);break;}}else _0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x1b7)&&typeof _0x2726b3[_0x2f2a09(0x1d3)]==_0x2f2a09(0x20d)&&_0x2726b3[_0x2f2a09(0x1d3)]&&_0x1c214e[_0x2f2a09(0x1d3)]&&_0x2726b3[_0x2f2a09(0x1d3)]!==_0x1c214e[_0x2f2a09(0x1d3)]&&(_0x1c214e[_0x2f2a09(0x20c)]=_0x2726b3[_0x2f2a09(0x1d3)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b4)]=function(_0x58289d){var _0x347d33=_0x105bb6;return 0x1/_0x58289d===Number[_0x347d33(0x264)];},_0x5d0f9e['prototype'][_0x105bb6(0x2b3)]=function(_0x348e5c){var _0x3b9c76=_0x105bb6;!_0x348e5c['props']||!_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x24c)]||_0x348e5c[_0x3b9c76(0x21c)]==='array'||_0x348e5c[_0x3b9c76(0x21c)]==='Map'||_0x348e5c[_0x3b9c76(0x21c)]===_0x3b9c76(0x1c3)||_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x290)](function(_0xea3fc1,_0x42d360){var _0x1755cf=_0x3b9c76,_0x4f3b4a=_0xea3fc1['name'][_0x1755cf(0x277)](),_0x14750b=_0x42d360['name']['toLowerCase']();return _0x4f3b4a<_0x14750b?-0x1:_0x4f3b4a>_0x14750b?0x1:0x0;});},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1fc)]=function(_0x21e5fd,_0x1075d8){var _0x37150f=_0x105bb6;if(!(_0x1075d8['noFunctions']||!_0x21e5fd[_0x37150f(0x286)]||!_0x21e5fd[_0x37150f(0x286)]['length'])){for(var _0xccfa8c=[],_0x36e1c4=[],_0x28710e=0x0,_0x13a0de=_0x21e5fd[_0x37150f(0x286)][_0x37150f(0x24c)];_0x28710e<_0x13a0de;_0x28710e++){var _0x30019=_0x21e5fd['props'][_0x28710e];_0x30019[_0x37150f(0x21c)]===_0x37150f(0x1b7)?_0xccfa8c['push'](_0x30019):_0x36e1c4[_0x37150f(0x250)](_0x30019);}if(!(!_0x36e1c4[_0x37150f(0x24c)]||_0xccfa8c[_0x37150f(0x24c)]<=0x1)){_0x21e5fd[_0x37150f(0x286)]=_0x36e1c4;var _0x304fdb={'functionsNode':!0x0,'props':_0xccfa8c};this[_0x37150f(0x201)](_0x304fdb,_0x1075d8),this['_setNodeLabel'](_0x304fdb,_0x1075d8),this[_0x37150f(0x26e)](_0x304fdb),this['_setNodePermissions'](_0x304fdb,_0x1075d8),_0x304fdb['id']+='\\x20f',_0x21e5fd[_0x37150f(0x286)]['unshift'](_0x304fdb);}}},_0x5d0f9e['prototype']['_addLoadNode']=function(_0x2d95c4,_0x33bb77){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x26e)]=function(_0x4c5fcb){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2ac)]=function(_0xae9e15){var _0x5592af=_0x105bb6;return Array[_0x5592af(0x23f)](_0xae9e15)||typeof _0xae9e15=='object'&&this[_0x5592af(0x1d1)](_0xae9e15)===_0x5592af(0x1b5);},_0x5d0f9e['prototype'][_0x105bb6(0x2b1)]=function(_0xae5534,_0x4da24a){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x25f)]=function(_0x6748ea){var _0xf3c5c9=_0x105bb6;delete _0x6748ea[_0xf3c5c9(0x1d5)],delete _0x6748ea['_hasSetOnItsPath'],delete _0x6748ea[_0xf3c5c9(0x1be)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x273)]=function(_0x323d56,_0x7249f7){};let _0x3a9ca1=new _0x5d0f9e(),_0xa6a15a={'props':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x286)]||0x64,'elements':_0x3e1f78[_0x105bb6(0x29d)]['elements']||0x64,'strLength':_0x3e1f78['defaultLimits'][_0x105bb6(0x2ae)]||0x400*0x32,'totalStrLength':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x1de)]||0x400*0x32,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x26f)]||0x1388,'autoExpandMaxDepth':_0x3e1f78[_0x105bb6(0x29d)]['autoExpandMaxDepth']||0xa},_0x1edace={'props':_0x3e1f78['reducedLimits'][_0x105bb6(0x286)]||0x5,'elements':_0x3e1f78[_0x105bb6(0x2b5)]['elements']||0x5,'strLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x2ae)]||0x100,'totalStrLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x1de)]||0x100*0x3,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x26f)]||0x1e,'autoExpandMaxDepth':_0x3e1f78['reducedLimits'][_0x105bb6(0x1ae)]||0x2};if(_0x52ee0a){let _0xa62a02=_0x3a9ca1['serialize']['bind'](_0x3a9ca1);_0x3a9ca1['serialize']=function(_0x230ce2,_0x2c9e2e,_0xcf6767,_0x48686e){return _0xa62a02(_0x230ce2,_0x52ee0a(_0x2c9e2e),_0xcf6767,_0x48686e);};}function _0x916645(_0x2587cc,_0x5b2586,_0x43d5fc,_0x2ab8e1,_0x2b1e5b,_0x50e3dd){var _0x133717=_0x105bb6;let _0x55384c,_0x446778;try{_0x446778=_0x15ddd1(),_0x55384c=_0x55bbfc[_0x5b2586],!_0x55384c||_0x446778-_0x55384c['ts']>_0x18f631[_0x133717(0x1e1)][_0x133717(0x1b6)]&&_0x55384c[_0x133717(0x292)]&&_0x55384c[_0x133717(0x28d)]/_0x55384c[_0x133717(0x292)]<_0x18f631['perLogpoint']['resetOnProcessingTimeAverageMs']?(_0x55bbfc[_0x5b2586]=_0x55384c={'count':0x0,'time':0x0,'ts':_0x446778},_0x55bbfc[_0x133717(0x2b8)]={}):_0x446778-_0x55bbfc[_0x133717(0x2b8)]['ts']>_0x18f631[_0x133717(0x23b)][_0x133717(0x1b6)]&&_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]&&_0x55bbfc['hits']['time']/_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]<_0x18f631[_0x133717(0x23b)][_0x133717(0x281)]&&(_0x55bbfc[_0x133717(0x2b8)]={});let _0x4a3eb6=[],_0x37c4cb=_0x55384c[_0x133717(0x203)]||_0x55bbfc[_0x133717(0x2b8)]['reduceLimits']?_0x1edace:_0xa6a15a,_0x346ed7=_0x4fed08=>{var _0x5c8242=_0x133717;let _0x6f6f7d={};return _0x6f6f7d[_0x5c8242(0x286)]=_0x4fed08[_0x5c8242(0x286)],_0x6f6f7d['elements']=_0x4fed08[_0x5c8242(0x272)],_0x6f6f7d['strLength']=_0x4fed08[_0x5c8242(0x2ae)],_0x6f6f7d[_0x5c8242(0x1de)]=_0x4fed08['totalStrLength'],_0x6f6f7d[_0x5c8242(0x26f)]=_0x4fed08[_0x5c8242(0x26f)],_0x6f6f7d['autoExpandMaxDepth']=_0x4fed08[_0x5c8242(0x1ae)],_0x6f6f7d[_0x5c8242(0x1ea)]=!0x1,_0x6f6f7d['noFunctions']=!_0x56498a,_0x6f6f7d[_0x5c8242(0x1f2)]=0x1,_0x6f6f7d['level']=0x0,_0x6f6f7d[_0x5c8242(0x234)]=_0x5c8242(0x1f9),_0x6f6f7d[_0x5c8242(0x2ad)]=_0x5c8242(0x2a8),_0x6f6f7d['autoExpand']=!0x0,_0x6f6f7d[_0x5c8242(0x28a)]=[],_0x6f6f7d[_0x5c8242(0x1dc)]=0x0,_0x6f6f7d['resolveGetters']=_0x3e1f78[_0x5c8242(0x224)],_0x6f6f7d['allStrLength']=0x0,_0x6f6f7d[_0x5c8242(0x1e7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x6f6f7d;};for(var _0x1ed53f=0x0;_0x1ed53f<_0x2b1e5b[_0x133717(0x24c)];_0x1ed53f++)_0x4a3eb6['push'](_0x3a9ca1[_0x133717(0x1b0)]({'timeNode':_0x2587cc===_0x133717(0x28d)||void 0x0},_0x2b1e5b[_0x1ed53f],_0x346ed7(_0x37c4cb),{}));if(_0x2587cc==='trace'||_0x2587cc===_0x133717(0x2a2)){let _0x53806a=Error[_0x133717(0x252)];try{Error[_0x133717(0x252)]=0x1/0x0,_0x4a3eb6[_0x133717(0x250)](_0x3a9ca1['serialize']({'stackNode':!0x0},new Error()[_0x133717(0x1e4)],_0x346ed7(_0x37c4cb),{'strLength':0x1/0x0}));}finally{Error[_0x133717(0x252)]=_0x53806a;}}return{'method':'log','version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':_0x4a3eb6,'id':_0x5b2586,'context':_0x50e3dd}]};}catch(_0x2def73){return{'method':_0x133717(0x219),'version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':[{'type':_0x133717(0x28e),'error':_0x2def73&&_0x2def73[_0x133717(0x1e5)]}],'id':_0x5b2586,'context':_0x50e3dd}]};}finally{try{if(_0x55384c&&_0x446778){let _0x3cb214=_0x15ddd1();_0x55384c[_0x133717(0x292)]++,_0x55384c[_0x133717(0x28d)]+=_0x14baa2(_0x446778,_0x3cb214),_0x55384c['ts']=_0x3cb214,_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]++,_0x55bbfc[_0x133717(0x2b8)]['time']+=_0x14baa2(_0x446778,_0x3cb214),_0x55bbfc['hits']['ts']=_0x3cb214,(_0x55384c['count']>_0x18f631['perLogpoint'][_0x133717(0x21f)]||_0x55384c[_0x133717(0x28d)]>_0x18f631['perLogpoint'][_0x133717(0x253)])&&(_0x55384c['reduceLimits']=!0x0),(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x21f)]||_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x28d)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x253)])&&(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x203)]=!0x0);}}catch{}}}return _0x916645;}function G(_0x51a9ee){var _0x4b4642=_0x170d0d;if(_0x51a9ee&&typeof _0x51a9ee==_0x4b4642(0x1bf)&&_0x51a9ee[_0x4b4642(0x28b)])switch(_0x51a9ee[_0x4b4642(0x28b)]['name']){case _0x4b4642(0x1ef):return _0x51a9ee[_0x4b4642(0x22e)](Symbol[_0x4b4642(0x279)])?Promise[_0x4b4642(0x1ba)]():_0x51a9ee;case _0x4b4642(0x25a):return Promise['resolve']();}return _0x51a9ee;}((_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x2168ce,_0x3ccb8b,_0xeb75e5,_0x1d8110,_0x4d8f7f,_0x42531a,_0x169273)=>{var _0x328bec=_0x170d0d;if(_0x41edbb['_console_ninja'])return _0x41edbb[_0x328bec(0x280)];let _0x16d08d={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x41edbb,_0xeb75e5,_0x193232))return _0x41edbb[_0x328bec(0x280)]=_0x16d08d,_0x41edbb[_0x328bec(0x280)];let _0x4236ba=b(_0x41edbb),_0x1b07b2=_0x4236ba[_0x328bec(0x27e)],_0x55c58e=_0x4236ba[_0x328bec(0x25e)],_0x2cd226=_0x4236ba['now'],_0x5f554c={'hits':{},'ts':{}},_0x1ff60a=J(_0x41edbb,_0x1d8110,_0x5f554c,_0x2168ce,_0x169273,_0x193232===_0x328bec(0x208)?G:void 0x0),_0x2718cd=(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b)=>{let _0xccae86=_0x41edbb['_console_ninja'];try{return _0x41edbb['_console_ninja']=_0x16d08d,_0x1ff60a(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b);}finally{_0x41edbb['_console_ninja']=_0xccae86;}},_0x2a7126=_0x2aacd3=>{_0x5f554c['ts'][_0x2aacd3]=_0x55c58e();},_0x6190d9=(_0x4b8b9a,_0x39ce0d)=>{var _0x48141e=_0x328bec;let _0x241899=_0x5f554c['ts'][_0x39ce0d];if(delete _0x5f554c['ts'][_0x39ce0d],_0x241899){let _0x1589a5=_0x1b07b2(_0x241899,_0x55c58e());_0x159082(_0x2718cd(_0x48141e(0x28d),_0x4b8b9a,_0x2cd226(),_0x217436,[_0x1589a5],_0x39ce0d));}},_0x2ae855=_0x40b04f=>{var _0x5530db=_0x328bec,_0x163aad;return _0x193232===_0x5530db(0x208)&&_0x41edbb['origin']&&((_0x163aad=_0x40b04f==null?void 0x0:_0x40b04f[_0x5530db(0x2b0)])==null?void 0x0:_0x163aad['length'])&&(_0x40b04f[_0x5530db(0x2b0)][0x0][_0x5530db(0x29b)]=_0x41edbb[_0x5530db(0x29b)]),_0x40b04f;};_0x41edbb['_console_ninja']={'consoleLog':(_0xcdac44,_0x49a38d)=>{var _0x380c53=_0x328bec;_0x41edbb[_0x380c53(0x1b3)][_0x380c53(0x219)][_0x380c53(0x1d3)]!==_0x380c53(0x1e3)&&_0x159082(_0x2718cd(_0x380c53(0x219),_0xcdac44,_0x2cd226(),_0x217436,_0x49a38d));},'consoleTrace':(_0x4ae7de,_0x1c3fa5)=>{var _0x331167=_0x328bec,_0x5b578d,_0x15c8c6;_0x41edbb[_0x331167(0x1b3)][_0x331167(0x219)]['name']!==_0x331167(0x251)&&((_0x15c8c6=(_0x5b578d=_0x41edbb[_0x331167(0x258)])==null?void 0x0:_0x5b578d['versions'])!=null&&_0x15c8c6[_0x331167(0x1e7)]&&(_0x41edbb['_ninjaIgnoreNextError']=!0x0),_0x159082(_0x2ae855(_0x2718cd(_0x331167(0x215),_0x4ae7de,_0x2cd226(),_0x217436,_0x1c3fa5))));},'consoleError':(_0xa1808c,_0x49bd48)=>{var _0x375d16=_0x328bec;_0x41edbb[_0x375d16(0x1d8)]=!0x0,_0x159082(_0x2ae855(_0x2718cd(_0x375d16(0x2a2),_0xa1808c,_0x2cd226(),_0x217436,_0x49bd48)));},'consoleTime':_0x32b043=>{_0x2a7126(_0x32b043);},'consoleTimeEnd':(_0x3cc349,_0x481352)=>{_0x6190d9(_0x481352,_0x3cc349);},'autoLog':(_0x2653f8,_0x5ef56c)=>{var _0x7f57ff=_0x328bec;_0x159082(_0x2718cd(_0x7f57ff(0x219),_0x5ef56c,_0x2cd226(),_0x217436,[_0x2653f8]));},'autoLogMany':(_0x2a6453,_0x1e7eea)=>{var _0x5ee2bd=_0x328bec;_0x159082(_0x2718cd(_0x5ee2bd(0x219),_0x2a6453,_0x2cd226(),_0x217436,_0x1e7eea));},'autoTrace':(_0x2144f3,_0x36cfc5)=>{_0x159082(_0x2ae855(_0x2718cd('trace',_0x36cfc5,_0x2cd226(),_0x217436,[_0x2144f3])));},'autoTraceMany':(_0x3ce65f,_0x4f40c3)=>{var _0x273171=_0x328bec;_0x159082(_0x2ae855(_0x2718cd(_0x273171(0x215),_0x3ce65f,_0x2cd226(),_0x217436,_0x4f40c3)));},'autoTime':(_0x10cbb8,_0x396cf2,_0x9ed779)=>{_0x2a7126(_0x9ed779);},'autoTimeEnd':(_0x1ad158,_0x56c01d,_0x591bd6)=>{_0x6190d9(_0x56c01d,_0x591bd6);},'coverage':_0x69ebeb=>{var _0x326f3f=_0x328bec;_0x159082({'method':_0x326f3f(0x261),'version':_0x2168ce,'args':[{'id':_0x69ebeb}]});}};let _0x159082=H(_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x4d8f7f,_0x42531a),_0x217436=_0x41edbb[_0x328bec(0x25b)];return _0x41edbb['_console_ninja'];})(globalThis,'127.0.0.1',_0x170d0d(0x226),\"/Users/interlink/.vscode/extensions/wallabyjs.console-ninja-1.0.500/node_modules\",'next.js',_0x170d0d(0x247),_0x170d0d(0x221),_0x170d0d(0x1e6),_0x170d0d(0x1c8),_0x170d0d(0x289),_0x170d0d(0x26d),_0x170d0d(0x297));");
    } catch (e) {
        console.error(e);
    }
}
; /* istanbul ignore next */ 
function oo_oo(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tr(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tx(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_ts(/**@type{any}**/ v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_te(/**@type{any}**/ v, /**@type{any}**/ i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
}),
"[project]/src/app/components/dashboard/DeleteAccount.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>DeleteAccount
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
"use client";
;
;
function DeleteAccount({ session }) {
    const handleDelete = ()=>{
        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            alert("Account deleted successfully (dummy action).");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-red-600",
                children: "Delete Account"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/DeleteAccount.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-md border border-red-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "text-red-600",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DeleteAccount.js",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-gray-700",
                                children: "Danger Zone"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DeleteAccount.js",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/DeleteAccount.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: "Deleting your account will remove all your data permanently. This action cannot be undone."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DeleteAccount.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDelete,
                        className: "px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",
                        children: "Delete My Account"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DeleteAccount.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/DeleteAccount.js",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/DeleteAccount.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/account/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Account
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-ssr] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
// Assuming these components are in the specified path
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ProfileDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/ProfileDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$MyTasks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/MyTasks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$AccountSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/AccountSecurity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$BillingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/BillingInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DeleteAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/DeleteAccount.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function Account() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    // Navigation items configuration
    const navItems = [
        {
            id: "profile",
            label: "Profile",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"]
        },
        {
            id: "tasks",
            label: "My Tasks",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
        },
        {
            id: "security",
            label: "Account Security",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        },
        {
            id: "billing",
            label: "Billing Info",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
        },
        {
            id: "delete",
            label: "Delete Account",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
            isDanger: true
        }
    ];
    // Initialize state from sessionStorage on the client, or use a default
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // Default to the first item (profile) if no session or saved state exists
        const defaultPage = navItems[0].id;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return defaultPage;
    });
    // Save the active page to session storage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        sessionStorage.setItem("activePage", activePage);
    }, [
        activePage
    ]);
    // Renders the correct component based on the activePage state
    const renderActivePage = ()=>{
        switch(activePage){
            case "profile":
                // 💡 NOTE: ProfileDetails is where you would update fields like bio, rate, etc.
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ProfileDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    session: session
                }, void 0, false, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 56,
                    columnNumber: 16
                }, this);
            case "tasks":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$MyTasks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    session: session
                }, void 0, false, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 58,
                    columnNumber: 16
                }, this);
            case "security":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$AccountSecurity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    session: session
                }, void 0, false, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 60,
                    columnNumber: 16
                }, this);
            case "billing":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$BillingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    session: session
                }, void 0, false, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 62,
                    columnNumber: 16
                }, this);
            case "delete":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DeleteAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    session: session
                }, void 0, false, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 64,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ProfileDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    session: session
                }, void 0, false, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 66,
                    columnNumber: 16
                }, this);
        }
    };
    // Display a loading state while session is being fetched
    if (status === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center p-8 text-lg font-medium text-slate-700",
            children: "Loading dashboard..."
        }, void 0, false, {
            fileName: "[project]/src/app/account/page.js",
            lineNumber: 72,
            columnNumber: 12
        }, this);
    }
    // Find the label for the currently active page (for mobile heading)
    const activeLabel = navItems.find((item)=>item.id === activePage)?.label || 'Settings';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-slate-800",
                            children: [
                                "Welcome, ",
                                session?.user?.firstName || 'User'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/account/page.js",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 mt-1",
                            children: "Manage your profile, tasks, and account settings."
                        }, void 0, false, {
                            fileName: "[project]/src/app/account/page.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "mobile-nav",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Active Section:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/account/page.js",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "mobile-nav",
                                    value: activePage,
                                    onChange: (e)=>setActivePage(e.target.value),
                                    className: "appearance-none w-full bg-white border border-slate-300 rounded-lg py-2.5 pl-4 pr-10 text-base font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: item.id,
                                            children: item.label
                                        }, item.id, false, {
                                            fileName: "[project]/src/app/account/page.js",
                                            lineNumber: 103,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/account/page.js",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/account/page.js",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/account/page.js",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "hidden lg:col-span-1 lg:block space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-xl shadow-sm border border-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1",
                                        children: navItems.map((item)=>{
                                            const Icon = item.icon;
                                            const isActive = activePage === item.id;
                                            const baseClasses = "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer";
                                            // Active class uses a prominent indigo color
                                            const activeClasses = item.isDanger ? "bg-red-50 text-red-700 border border-red-200" : "bg-indigo-50 text-indigo-700 border border-indigo-200";
                                            const inactiveClasses = item.isDanger ? "text-red-600 hover:bg-red-50 hover:text-red-700" : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600";
                                            const linkClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                onClick: ()=>setActivePage(item.id),
                                                className: linkClasses,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/account/page.js",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/account/page.js",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/app/account/page.js",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.js",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/account/page.js",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-xl shadow-sm border border-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-indigo-100 p-3 rounded-xl",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                                        size: 24,
                                                        className: "text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/account/page.js",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/account/page.js",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-md font-bold text-slate-800",
                                                            children: "Availability"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/account/page.js",
                                                            lineNumber: 155,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500 mt-0.5",
                                                            children: "Set your weekly hours to get booked for tasks."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/account/page.js",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/account/page.js",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/account/page.js",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "mt-4 w-full px-4 py-2 rounded-xl border-2 border-indigo-500 text-sm font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition",
                                            children: "Manage Schedule"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/account/page.js",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/account/page.js",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/account/page.js",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-slate-800 mb-6 border-b pb-4",
                                        children: activeLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/account/page.js",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    renderActivePage()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/account/page.js",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/account/page.js",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/account/page.js",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/account/page.js",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/account/page.js",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=src_app_5331b255._.js.map