import {
  BrandsData,
  BtsData,
  CarouselData,
  CreativeHeroImgData,
  CreativeHeroVideoData,
  CreativeWorkData,
  FeaturedReviewData,
  TeamData,
  TestimonialsData,
} from "@/types";

const distributionName = "https://d5st4psppqx3d.cloudfront.net";

// HOME PAGE DATA
export const landingPageData = {
  design: [
    {
      id: "1",
      src: distributionName + "/Landing+Page/Design/cupples_website_ladznn.jpg",
      badge: "Web Design",
      isVideo: false,
    },
    {
      id: "2",
      src: distributionName + "/Landing+Page/Design/3_dISH_1_tp0sxi.mp4",
      thumbnail:
        distributionName + "/Landing+Page/Design/3_dISH_1_tp0sxi_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
    {
      id: "3",
      src:
        distributionName +
        "/Landing+Page/Design/black_pearl_branding_ypwjz5.jpg",
      badge: "Branding",
      isVideo: false,
    },
    {
      id: "4",
      src:
        distributionName +
        "/Landing+Page/Design/Ikaika_Motivational_Reel_k6l7dy.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Design/Ikaika_Motivational_Reel_k6l7dy_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
    {
      id: "5",
      src:
        distributionName + "/Landing+Page/Design/peak_performance_sgqk8g.jpg",
      badge: "Social Media",
      isVideo: false,
    },
    {
      id: "6",
      src:
        distributionName + "/Landing+Page/Design/Shareable_Giveaway_hiz45d.jpg",
      badge: "Social Media",
      isVideo: false,
    },
    {
      id: "7",
      src:
        distributionName +
        "/Landing+Page/Design/Oreo_Reel_super_final_rlocdk.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Design/Oreo_Reel_super_final_rlocdk_THUMBNAIL.jpg",
      badge: "Reels",
      isVideo: true,
    },
  ] as Array<CarouselData>,
  creative: [
    {
      id: "8",
      src: distributionName + "/Landing+Page/Creative/Copy_of_V_mjlm08.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "9",
      src:
        distributionName +
        "/Landing+Page/Creative/Rinse_Content_Final_Version_gk9vl8.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Rinse_Content_Final_Version_gk9vl8_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "10",
      src:
        distributionName +
        "/Landing+Page/Creative/Copy_of_No_Ugly_2_vd5xg1.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "11",
      src:
        distributionName +
        "/Landing+Page/Creative/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/REVISED_Remarkable_Video_Wide_ozrqog_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "12",
      src:
        distributionName + "/Landing+Page/Creative/Copy_of_Jarrah_pujknc.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },

    {
      id: "13",
      src:
        distributionName + "/Landing+Page/Creative/Redbull_Zoomed_gfb6hv.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Redbull_Zoomed_gfb6hv_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "14",
      src:
        distributionName +
        "/Landing+Page/Creative/Greenhill_Seltzers_1_bouwy7.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "15",
      src:
        distributionName + "/Landing+Page/Creative/Kiwiblue_Zoomed_jtmk4o.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Kiwiblue_Zoomed_jtmk4o_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "16",
      src:
        distributionName +
        "/Landing+Page/Creative/NEW_PEAQ_Launch_Video_1_vcfcud.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/NEW_PEAQ_Launch_Video_1_vcfcud_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "17",
      src:
        distributionName +
        "/Landing+Page/Creative/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "18",
      src: distributionName + "/Landing+Page/Creative/Honey_Soy_1x1_zptjyf.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Honey_Soy_1x1_zptjyf_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "19",
      src:
        distributionName +
        "/Landing+Page/Creative/Goju_Content_Reel_dhbmn7.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Goju_Content_Reel_dhbmn7_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "20",
      src:
        distributionName + "/Landing+Page/Creative/Nev_Reel_Final_rdt49z.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Nev_Reel_Final_rdt49z_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
  ] as Array<CarouselData>,
};

// DESIGN PAGE DATA
export const designMarqueeLeftData = [
  {
    id: "1",
    src: "/assets/blockhangs.jpg",
    alt: "Peak Performance",
    isVideo: false,
  },
  {
    id: "2",
    src: "/assets/digitalspark.jpg",
    alt: "LOKL Gym",
    isVideo: false,
  },
  {
    id: "3",
    src: "/assets/dropboxclone.jpg",
    alt: "Philippines Travel Website",
    isVideo: false,
  },
  {
    id: "4",
    src: "/assets/greenhorizon.jpg",
    alt: "Flanzy Branding",
    isVideo: false,
  },
  {
    id: "1",
    src: "/assets/news.jpg",
    alt: "Fire social media",
    isVideo: false,
  },
  {
    id: "2",
    src: "/assets/Best-Software-learning-Institute-in-Rawalpindi-and-Islamabad.png",
    alt: "Fire social media",
    isVideo: false,
  },
  {
    id: "3",
    src: "/assets/Best-ielts-institute-in-Islamabad-ZELA-IELTS.png",
    thumbnail: "",
    alt: "Tonkotsu Ramen on Fire Reel",
    isVideo: false,
  },

  {
    id: "1",
    src: "/assets/blockhangs.jpg",
    alt: "Peak Performance",
    isVideo: false,
  },
  {
    id: "2",
    src: "/assets/digitalspark.jpg",
    alt: "LOKL Gym",
    isVideo: false,
  },
  {
    id: "3",
    src: "/assets/dropboxclone.jpg",
    alt: "Philippines Travel Website",
    isVideo: false,
  },
  {
    id: "4",
    src: "/assets/greenhorizon.jpg",
    alt: "Flanzy Branding",
    isVideo: false,
  },
  {
    id: "1",
    src: "/assets/news.jpg",
    alt: "Fire social media",
    isVideo: false,
  },
] satisfies Array<CarouselData>;

export const designMarqueeRightData = [
  {
    id: "1",
    src: "/assets/news.jpg",
    alt: "Fire social media",
    isVideo: false,
  },
  {
    id: "2",
    src: "/assets/Best-Software-learning-Institute-in-Rawalpindi-and-Islamabad.png",
    alt: "Fire social media",
    isVideo: false,
  },
  {
    id: "3",
    src: "/assets/Best-ielts-institute-in-Islamabad-ZELA-IELTS.png",
    thumbnail: "",
    alt: "Tonkotsu Ramen on Fire Reel",
    isVideo: false,
  },
] satisfies Array<CarouselData>;

export const designCarouselData = [
  {
    id: "1",
    src: "/assets/blockhangs.jpg",
    alt: "Peak Performance",
    isVideo: false,
  },
  {
    id: "2",
    src: "/assets/digitalspark.jpg",
    alt: "LOKL Gym",
    isVideo: false,
  },
  {
    id: "3",
    src: "/assets/dropboxclone.jpg",
    alt: "Philippines Travel Website",
    isVideo: false,
  },
  {
    id: "4",
    src: "/assets/greenhorizon.jpg",
    alt: "Flanzy Branding",
    isVideo: false,
  },
  {
    id: "5",
    src: "/assets/Saman-Dukan.png",
    alt: "saman",
    isVideo: false,
  },
  {
    id: "6",
    src: "/assets/Best-Software-learning-Institute-in-Rawalpindi-and-Islamabad.png",
    alt: "Flanzy Branding",
    isVideo: false,
  },

  {
    id: "7",
    src: "/assets/Best-ielts-institute-in-Islamabad-ZELA-IELTS.png",
    thumbnail: "",
    alt: "Tonkotsu Ramen on Fire Reel",
    isVideo: false,
  },

  {
    id: "10",
    src: "/assets/blockhangs.jpg",
    alt: "Peak Performance",
    isVideo: false,
  },
  {
    id: "11",
    src: "/assets/digitalspark.jpg",
    alt: "LOKL Gym",
    isVideo: false,
  },
  {
    id: "12",
    src: "/assets/dropboxclone.jpg",
    alt: "Philippines Travel Website",
    isVideo: false,
  },
  {
    id: "13",
    src: "/assets/greenhorizon.jpg",
    alt: "Flanzy Branding",
    isVideo: false,
  },
] satisfies Array<CarouselData>;

// CREATIVE PAGE DATA
export const creativeHeroData = {
  video: [
    {
      id: "1",
      src:
        distributionName +
        "/Creative/Hero/video/Eatkinda_Website_Video_dqohbd.mp4",
      thumbnail:
        distributionName + "/Creative/Hero/video/EatKinda_TN_yclerg.jpg",
    },
  ] satisfies Array<CreativeHeroVideoData>,
  images: [
    {
      id: "1",
      src:
        distributionName + "/Creative/Hero/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      alt: "EatKinda Freezer",
    },
    {
      id: "2",
      src:
        distributionName +
        "/Creative/Hero/EatKinda_-_Available_Woowlorths_Final_1.5x_zfnn1v.jpg",
      alt: "EatKinda available at Woolworths",
    },
  ] satisfies Array<CreativeHeroImgData>,
};

export const creativeWorkData = [
  {
    id: "1",
    srcHighQuality:
      distributionName +
      "/Creative/Work/RemarkableCream/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
    src:
      distributionName +
      "/Creative/Work/RemarkableCream/REVISED_Remarkable_Video_Wide_ozrqog_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/RemarkableCream/Remarkable_Cream_TN_ouqltl.jpg",
    size: "large",
    client: "Remarkable Cream",
    campaign: "Crafted by nature, perfected by tradition",
  },
  {
    id: "2",
    srcHighQuality:
      distributionName + "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o.mp4",
    src:
      distributionName +
      "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/KiwiBlue/Kiwi_Blue_NT_qutbbd.jpg",
    size: "small",
    client: "Kiwi Blue",
    campaign: "Out of the blue",
  },
  {
    id: "3",
    srcHighQuality:
      distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
    src:
      distributionName +
      "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    size: "small",
    client: "Goju",
    campaign: "Need some pep in your step?",
  },
  {
    id: "4",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5.mp4",
    src:
      distributionName +
      "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Innerbloom/Innerbloom_TN_r25fo4.jpg",
    size: "small",
    client: "Innerbloom",
    campaign: "My only one",
  },
  {
    id: "5",
    srcHighQuality:
      distributionName +
      "/Creative/Work/PEAQLaunch/NEW_PEAQ_Launch_Video_1_vcfcud.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQLaunch/NEW_PEAQ_Launch_Video_1_vcfcud_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/PEAQLaunch/PEAQ_ROCKET_rqw8an.jpg",
    size: "large",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    id: "6",
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQBobby/Reel_Bobby_jnsrcg.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQBobby/Reel_Bobby_jnsrcg_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/PEAQBobby/Bobby_Reaching_lzw3ry.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    id: "7",
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQAlex/AP_Reel_nhvysa.mp4",
    src: distributionName + "/Creative/Work/PEAQAlex/AP_Reel_nhvysa_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/PEAQAlex/Alex_P_-_Thumbnail_sgrabf.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    id: "8",
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQNeve/Nev_Reel_Final_rdt49z.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQNeve/Nev_Reel_Final_rdt49z_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/PEAQNeve/Neve_-_Website_Thumbnail_o46hwp.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    id: "9",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Eatkinda/Eatkinda_Website_Video_dqohbd.mp4",
    src:
      distributionName +
      "/Creative/Work/Eatkinda/Eatkinda_Website_Video_dqohbd_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Eatkinda/EatKinda_TN_yclerg.jpg",
    size: "large",
    client: "Eatkinda",
    campaign: "Kinda different, totally delicious",
  },

  {
    id: "10",
    srcHighQuality:
      distributionName + "/Creative/Work/HoneySoy/Honey_Soy_1x1_zptjyf.mp4",
    src:
      distributionName +
      "/Creative/Work/HoneySoy/Honey_Soy_1x1_zptjyf_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/HoneySoy/Honey_Soy_TN_kscrr3.jpg",
    size: "medium",
    client: "Black Pearl",
    campaign: "Glazing perfection",
  },
  {
    id: "11",
    srcHighQuality:
      distributionName + "/Creative/Work/SnowyG/Snowy_G_1x1_fxji0j.mp4",
    src:
      distributionName + "/Creative/Work/SnowyG/Snowy_G_1x1_fxji0j_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/SnowyG/Snowy_G_TN_miougx.jpg",
    size: "medium",
    client: "Black Pearl",
    campaign: "It goes beyond the mayo",
  },
  {
    id: "12",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Rinse/Rinse_Content_Final_Version_gk9vl8.mp4",
    src:
      distributionName +
      "/Creative/Work/Rinse/Rinse_Content_Final_Version_gk9vl8_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Rinse/Rinse_TN_nuwajl.jpg",
    size: "large",
    client: "Rinse Vodka",
    campaign: "Because one is not enough",
  },
  {
    id: "13",
    srcHighQuality:
      distributionName + "/Creative/Work/Redbull/Redbull_Zoomed_gfb6hv.mp4",
    src:
      distributionName +
      "/Creative/Work/Redbull/Redbull_Zoomed_gfb6hv_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Redbull/Redbull_TN_eqmilw.jpg",
    size: "small",
    client: "Red Bull",
    campaign: "The new wings in town",
  },
  {
    id: "14",
    srcHighQuality:
      distributionName + "/Creative/Work/Charlies/Charlie_Zoomed_nuafy8.mp4",
    src:
      distributionName +
      "/Creative/Work/Charlies/Charlie_Zoomed_nuafy8_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Charlies/Charlies_TN_xbihz7.jpg",
    size: "small",
    client: "Charlie's",
    campaign: "Shake up the good stuff!",
  },
  {
    id: "15",
    srcHighQuality:
      distributionName + "/Creative/Work/Live/Live_Content_Reel_npbkph.mp4",
    src:
      distributionName +
      "/Creative/Work/Live/Live_Content_Reel_npbkph_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Live/Live_TN_zvkmkn.jpg",
    size: "small",
    client: "Live+",
    campaign: "Electrified living",
  },
  {
    id: "16",
    srcHighQuality:
      distributionName + "/Creative/Work/Kmart/KMART_KWTA_ultgma.mp4",
    src: distributionName + "/Creative/Work/Kmart/KMART_KWTA_ultgma.mp4",
    thumbnail: distributionName + "/Creative/Work/Kmart/KMART_TN_fnsr1v.jpg",
    size: "medium",
    client: "KMart",
    campaign: "Wishing tree appeal",
  },
  {
    id: "17",
    srcHighQuality:
      distributionName + "/Creative/Work/Ball/Ball_Animation_1x1_yp7ku1.mp4",
    src:
      distributionName +
      "/Creative/Work/Ball/Ball_Animation_1x1_yp7ku1_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Ball/3D_Ball_TN_nskugx.jpg",
    size: "medium",
    client: "3D Ball",
    campaign: "Infinite alignment",
  },
] satisfies Array<CreativeWorkData>;

export const testimonialsData = [
  {
    id: "1",
    review:
      "Their professionalism and caring attitude really fits into our core values at Steve's, and they have become an awesome fit for us. They have truly gone above and beyond when it comes to promoting our brand and working with us, to ensure that we push out great content.They have enabled our brand over social media to reach heights that we thought were unachievable.",
    name: "Steven Deans",
    role: "Owner of Steve's Tyre Service & Auto Care",
  },
  {
    id: "2",
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang",
    role: "Director of Formosa Pacific Limited",
  },
  {
    id: "3",
    review:
      "Highly recommend this team of young professionals. You can tell they put their heart and passion into their work - it is just quality. They hit deadlines, communication is very efficient and prompt. Eltezza is extremely responsive to feedback and they go above and beyond to deliver value.",
    name: "Keonimana Shigematsu",
    role: "Director of IKAIKA",
  },
  {
    id: "4",
    review:
      "We are thankful for the splendid content, amazing brand identity, and beautifully interactive website. Eltezza has been with us since day one and we continue to find use for their services on an ongoing basis for video ad campaigns. They truly served all our creative needs. Highly Recommended!",
    name: "Aden Fareh",
    role: "Public Relations at Cutly",
  },
  {
    id: "5",
    review:
      "Great company to deal with. Made everything easy to understand, and worked with us around our busy schedule. Always bright, bubbly, friendly, and willing to lend a hand if we got stuck. Not to mention that they customized our website to develop something that truly reflected what we wanted for our business. We have no hesitations in recommending Eltezza.",
    name: "Sean Cupples",
    role: "Director of Cupples Construction",
  },
  {
    id: "6",
    review:
      "We engaged Eltezza for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas",
    role: "CinemaThom",
  },
] satisfies Array<TestimonialsData>;

// OTHER DATA FOR DESIGN & CREATIVE PAGES
export const featuredReviewData = {
  design: {
    review:
      "Excellent team to deal with. They have collaborated with us on a lot of aspects including social media, ads, and a fresh re-brand, this has enabled us to become more recognizable as we aim to further expand to new locations. Most importantly they enjoy what they do.",
    name: "Paul Leang, Director of Formosa Pacific Limited",
    src: distributionName + "/Design/Feat_Review/Paul_fbfqqr.png",
  } satisfies FeaturedReviewData,
  creative: {
    review:
      "We engaged Eltezza for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas, CinemaThom",
    src: distributionName + "/Creative/Feat_Review/Arielle_hwmabn.png",
  } satisfies FeaturedReviewData,
};

export const brandsData = {
  design: [
    {
      id: "1",
      brand: "Kmart",
      src: "/images/brandImages/Kmart_Australia_logo.svg",
    },
    {
      id: "2",
      brand: "Cutly",
      src: "/images/brandImages/Cutly_logo.svg",
      maxWidth: 110,
      width: "85%",
    },
    {
      id: "3",
      brand: "Juluwarlu",
      src: "/images/brandImages/Juluwarlu_logo.svg",
      maxWidth: 137,
      width: "95%",
    },
    {
      id: "4",
      brand: "Illuminix",
      src: "/images/brandImages/Illuminix_logo.svg",
      maxWidth: 145,
      width: "118%",
    },
    {
      id: "5",
      brand: "Cupples Construction",
      src: "/images/brandImages/Cupples_logo.svg",
      maxWidth: 93,
      width: "73%",
    },
    {
      id: "6",
      brand: "Auckland Museum",
      src: "/images/brandImages/AM_logo.svg",
      maxWidth: 130,
      width: "105%",
    },
    {
      id: "7",
      brand: "Black Pearl Cafe",
      src: "/images/brandImages/BlackPearl_logo.svg",
    },
    {
      id: "8",
      brand: "Bee+",
      src: "/images/brandImages/Bee_logo.svg",
      maxWidth: 91,
      width: "75%",
    },
    {
      id: "9",
      brand: "Constructo",
      src: "/images/brandImages/Constructo_logo.svg",
      maxWidth: 93,
      width: "80%",
    },
    {
      id: "10",
      brand: "Ikaika",
      src: "/images/brandImages/Ikaika_logo.svg",
      maxWidth: 150,
      width: "123%",
    },
    {
      id: "11",
      brand: "Steve's Tyre Service",
      src: "/images/brandImages/Steves_logo.svg",
      maxWidth: 131,
      width: "106%",
    },
    {
      id: "12",
      brand: "Robert Embroideries",
      src: "/images/brandImages/Robert_logo.svg",
      maxWidth: 90,
      width: "75%",
    },
  ] satisfies Array<BrandsData>,

  creative: [
    {
      id: "1",
      brand: "Kmart",
      src: "/images/brandImages/Kmart_Australia_logo.svg",
    },
    {
      id: "2",
      brand: "PEAQ",
      src: "/images/brandImages/Peaq_logo.svg",
      maxWidth: 110,
      width: "83%",
    },
    {
      id: "3",
      brand: "Nibblish",
      src: "/images/brandImages/Nibblish_logo.svg",
      maxWidth: 116,
      width: "95%",
    },
    {
      id: "4",
      brand: "Greenhill Seltzers",
      src: "/images/brandImages/Greenhill_logo.svg",
      maxWidth: 125,
    },
    {
      id: "5",
      brand: "EatKinda",
      src: "/images/brandImages/EatKinda_logo.svg",
      maxWidth: 123,
      width: "93%",
    },
    {
      id: "6",
      brand: "Black Pearl Cafe",
      src: "/images/brandImages/BlackPearl_logo.svg",
      maxWidth: 127,
    },
    {
      id: "7",
      brand: "Rinse",
      src: "/images/brandImages/Rinse_logo.svg",
      maxWidth: 112,
      width: "88%",
    },
    {
      id: "8",
      brand: "Goju",
      src: "/images/brandImages/Goju_logo.svg",
      maxWidth: 72,
      width: "55%",
    },
    {
      id: "9",
      brand: "Remarkable Cream",
      src: "/images/brandImages/RemarkableCream_logo.svg",
      maxWidth: 129,
      width: "105%",
    },
  ] satisfies Array<BrandsData>,
};

export const teamData = {
  design: [
    {
      id: "1",
      name: "HASNAD SATTI",
      src:
       "https://source.boringavatars.com/beam/100/HASNADSATTI?colors=00000,fccc34,fccc34,fccc34,fccc34",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715647107/EZ%20Website%20-%20Design/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      position: "Co Founder",
      email: "teneza@eltezza.com",
    },

    {
      id: "3",
      name: "SHAHRUKH MEHMOOD",
      src:
      "https://source.boringavatars.com/beam/100/SHAHRUKHMEHMOOD?colors=00000,fccc34,fccc34,fccc34,fccc34",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709592/EZ%20Website%20-%20Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      position: "PROJECT MANAGER",
      email: "chhetri@eltezza.com",
    },
    {
      id: "2",
      name: "M. HARIS ABBASI",
      src:
       "https://source.boringavatars.com/beam/100/MHARISABBASI?colors=00000,fccc34,fccc34,fccc34,fccc34",   placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709569/EZ%20Website%20-%20Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      position: "LAMP Stack Lead",
      email: "eltayeb@eltezza.com",
    },
    {
      id: "4",
      name: "SAQIB AZIZ",
      src:
      "https://source.boringavatars.com/beam/100/SAQIBAZIZ?colors=00000,fccc34,fccc34,fccc34,fccc34",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709515/EZ%20Website%20-%20Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      position: "App Development Lead",
      email: "herrera@eltezza.com",
    },
    {
      id: "5",
      name: "ZAID SATTI",
      src:
     "https://source.boringavatars.com/beam/100/ZAIDSATTI?colors=00000,fccc34,fccc34,fccc34,fccc34",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715732923/EZ%20Website%20-%20Design/Team/Elisa_Hickton_-_Content_Producer_mjkeyq.jpg",
      position: "SEO Lead",
      email: "hickton@eltezza.com",
    },
    {
      id: "6",
      name: "MUBASHER SATTI",
      src:
       "https://source.boringavatars.com/beam/100/MUBASHERSATTI?colors=00000,fccc34,fccc34,fccc34,fccc34" ,   placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715919824/EZ%20Website%20-%20Design/Team/Todd_Carlsson_-_Web_Developer_wnk07m.jpg",
      position: "Graphics and Digital Marketing Lead",
      email: "carlsson@eltezza.com",
    },
    {
      id: "7",
      name: "USAMA AHMED",
      src:
       "https://source.boringavatars.com/beam/100/USAMA%20AHMED?colors=00000,fccc34,fccc34,fccc34,fccc34",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709619/EZ%20Website%20-%20Design/Team/Shay_Gillanders_-_Visual_Designer_ap1gci.jpg",
      position: "MERN Stack Lead",
      email: "gillanders@eltezza.com",
    },
  ] satisfies Array<TeamData>,
  creative: [
    {
      id: "1",
      name: "Chris Teneza",
      src:
        distributionName +
        "/Creative/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715647107/EZ%20Website%20-%20Design/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      position: "Creative Director",
      email: "teneza@eltezza.com",
    },
    {
      id: "2",
      name: "Mo Eltayeb",
      src:
        distributionName +
        "/Creative/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709569/EZ%20Website%20-%20Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      position: "Managing Director",
      email: "eltayeb@eltezza.com",
    },
    {
      id: "3",
      name: "Pradeep Chhetri",
      src:
        distributionName +
        "/Creative/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709592/EZ%20Website%20-%20Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      position: "Account Manager",
      email: "chhetri@eltezza.com",
    },
    {
      id: "4",
      name: "Danilo Herrera",
      src:
        distributionName +
        "/Creative/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709515/EZ%20Website%20-%20Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      position: "Business Strategist",
      email: "herrera@eltezza.com",
    },
    {
      id: "5",
      name: "Ilyas Megarbi",
      src:
        distributionName +
        "/Creative/Team/Ilyas_Megarbi_-_Graphic_Designer_agv0jc.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1713331517/EZ%20Website%20-%20Design/Team/Ilyas_Megarbi_-_Graphic_Designer_agv0jc.jpg",
      position: "Graphic Designer",
    },
    {
      id: "6",
      name: "King Raffy",
      src:
        distributionName +
        "/Creative/Team/King_Raffy_-_Visual_Designer_bxau6w.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709685/EZ%20Website%20-%20Creative/Team/King_Raffy_-_Visual_Designer_bxau6w.jpg",
      position: "Visual Designer",
    },
  ] satisfies Array<TeamData>,
};

export const btsData = {
  design: [
    {
      id: "1",
      src: "./assets/imageTwo.jpeg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186772/EZ%20Website%20-%20Design/BTS/Photos/Sharing_our_experience_with_amazing_uni_students_dewbey.jpg",
      alt: "Sharing our experience with amazing uni students!",
      isVideo: false,
    },
    {
      id: "2",
      src: "./assets/imageThree.jpeg",
      alt: "Chris filming food",
      isVideo: true,
    },
    {
      id: "3",
      src: "./assets/imageFour.jpeg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186669/EZ%20Website%20-%20Design/BTS/Photos/Meeting_with_an_industry_veteran_dfxypu.jpg",
      alt: "Meeting with an industry veteran",
      isVideo: false,
    },
    {
      id: "4",
      src: "./assets/imageOne.jpeg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186669/EZ%20Website%20-%20Design/BTS/Photos/Meeting_with_an_industry_veteran_dfxypu.jpg",
      alt: "Meeting with an industry veteran",
      isVideo: false,
    },
    {
      id: "5",
      src: "./assets/imageFive.jpeg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712186669/EZ%20Website%20-%20Design/BTS/Photos/Meeting_with_an_industry_veteran_dfxypu.jpg",
      alt: "Meeting with an industry veteran",
      isVideo: false,
    },
  ] satisfies Array<BtsData>,
};
