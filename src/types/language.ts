export type LanguageTypes = "en" | "ta" | "hi" | "tl" | "ka";

/**
 * Your form object key should match the interface key,
 * For the Validator and unit test to work.
 */
export interface LanguageStringsInterface {
  /**
   * Our News
   */
  OUR_NEWS_HEADING: {
    [K in LanguageTypes]: string;
  };
  OUR_NEWS_CONTENT_PARA_1: {
    [K in LanguageTypes]: string;
  };
  OUR_NEWS_CONTENT_PARA_2: {
    [K in LanguageTypes]: string;
  };
  OUR_NEWS_AUTHOR: {
    [K in LanguageTypes]: string;
  };
  OUR_NEWS_CTA: {
    [K in LanguageTypes]: string;
  };
  OUR_NEWS_PUBLISHED_DATE: {
    [K in LanguageTypes]: string;
  };

  /**
   * App Promotion
   */
  APP_PROMOTION_HEADING: {
    [K in LanguageTypes]: string;
  };
  APP_PROMOTION_SUB_HEADING: {
    [K in LanguageTypes]: string;
  };
  APP_PROMOTION_CONTENT: {
    [K in LanguageTypes]: string;
  };

  /**
   * Footer
   */
  FOOTER_COMPANY_UNIT: {
    [K in LanguageTypes]: string;
  };
  FOOTER_COMPANY_TAGLINE: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_HEADING_COMPANY: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_HEADING_SUPPORT: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_HEADING_REACH_OUT: {
    [K in LanguageTypes]: string;
  };
  // Company
  FOOTER_LIST_ITEM_PRODUCT: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_ITEM_ABOUT_US: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_ITEM_CONTACT_US: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_ITEM_CAREERS: {
    [K in LanguageTypes]: string;
  };
  // Support
  FOOTER_LIST_ITEM_NEWS: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_ITEM_FAQ: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_ITEM_PRIVACY_POLICY: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_ITEM_TERMS_OF_SERVICE: {
    [K in LanguageTypes]: string;
  };
  // Reach Out to Us
  FOOTER_LIST_ITEM_ADDRESS: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_ITEM_EMAIL: {
    [K in LanguageTypes]: string;
  };
  FOOTER_LIST_ITEM_MOBILE: {
    [K in LanguageTypes]: string;
  };
  // CIN
  FOOTER_CIN: {
    [K in LanguageTypes]: string;
  };
  // Follow Us
  FOOTER_FOLLOW_US: {
    [K in LanguageTypes]: string;
  };
  // Credits
  FOOTER_CREDITS: {
    [K in LanguageTypes]: string;
  };
  // Our Education Partners
  OUR_EDUCATION_PARTNERS_HEADING: {
    [K in LanguageTypes]: string;
  };
  // Our Insurance Partners
  OUR_INSURANCE_PARTNERS_HEADING: {
    [K in LanguageTypes]: string;
  };
  // Other Partners
  OTHER_PARTNERS_HEADING: {
    [K in LanguageTypes]: string;
  };
  // What our customers say
  WHAT_OUR_CUSTOMERS_SAY_HEADING: {
    [K in LanguageTypes]: string;
  };
  // Testimonials
  TESTIMONIALS_HEADING: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_SUBHEADING: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_1_CONTENT: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_1_AUTHOR: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_1_AUTHOR_DESIGNATION: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_2_CONTENT: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_2_AUTHOR: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_2_AUTHOR_DESIGNATION: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_3_CONTENT: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_3_AUTHOR: {
    [K in LanguageTypes]: string;
  };
  TESTIMONIALS_3_AUTHOR_DESIGNATION: {
    [K in LanguageTypes]: string;
  };

  /**
   * Edge
   */
  EDGE_HEADING: {
    [K in LanguageTypes]: string;
  };
  EDGE_SUBHEADING: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_HEADING_1: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_1_PARA_1: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_1_PARA_2: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_HEADING_2: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_2_PARA_1: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_2_PARA_2: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_HEADING_3: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_3_PARA_1: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_3_PARA_2: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_HEADING_4: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_4_PARA_1: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_4_PARA_2: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_HEADING_5: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_5_PARA_1: {
    [K in LanguageTypes]: string;
  };
  EDGE_FEATURE_CONTENT_5_PARA_2: {
    [K in LanguageTypes]: string;
  };
  KNOW_MORE: {
    [K in LanguageTypes]: string;
  };

  /**
   * Why Choose Us
   */
  WHY_CHOOSE_US_HEADING: {
    [K in LanguageTypes]: string;
  };
  WHY_CHOOSE_US_SUBHEADING: {
    [K in LanguageTypes]: string;
  };
  WHY_CHOOSE_US_PARENTS: {
    [K in LanguageTypes]: string;
  };
  WHY_CHOOSE_US_INSTITUTES: {
    [K in LanguageTypes]: string;
  };

  /**
   * Fees
   */
  FEES_HEADING: {
    [K in LanguageTypes]: string;
  };
  FEES_SUBHEADING: {
    [K in LanguageTypes]: string;
  };
  FEES_CAROUSEL_TITLE_1: {
    [K in LanguageTypes]: string;
  };
  FEES_CAROUSEL_TITLE_2: {
    [K in LanguageTypes]: string;
  };
  FEES_CAROUSEL_TITLE_3: {
    [K in LanguageTypes]: string;
  };
  FEES_CAROUSEL_SUBTITLE_3: {
    [K in LanguageTypes]: string;
  };
  FEES_CAROUSEL_TITLE_4: {
    [K in LanguageTypes]: string;
  };

  /**
   * Hero
   */
  HERO_CAROUSEL_AND_COUNTING: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_AND_GROWING: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_1_PART_1: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_1_HIGHLIGHT: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_1_PART_2: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_DESCRIPTION_1: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_2_PART_1: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_2_HIGHLIGHT: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_2_PART_2: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_DESCRIPTION_2: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_3_PART_1: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_3_HIGHLIGHT: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_3_PART_2: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_DESCRIPTION_3: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_4_PART_1: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_4_HIGHLIGHT: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_TITLE_4_PART_2: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_DESCRIPTION_4: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_PRIMARY_CTA_CAPTION_1: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_SECONDARY_CTA_CAPTION_1: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_CUSTOMERS_COUNT: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_DISBURSED_AMOUNT_COUNT: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_PARTNERS_COUNT: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_HAPPY_CUSTOMERS: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_DISBURSED_AMOUNT: {
    [K in LanguageTypes]: string;
  };
  HERO_CAROUSEL_PARTNER_TIE_UPS: {
    [K in LanguageTypes]: string;
  };
  OUR_FEE_PRODUCTS: {
    [K in LanguageTypes]: string;
  };
  FEE_FINANCE: {
    [K in LanguageTypes]: string;
  };
  HIGHER_EDUCATION_DOMESTIC: {
    [K in LanguageTypes]: string;
  };
  HIGHER_EDUCATION_ABROAD: {
    [K in LanguageTypes]: string;
  };
  EDUFIN_EDGE_OTHER_PRODUCTS: {
    [K in LanguageTypes]: string;
  };
  PERSONAL_LOAN: {
    [K in LanguageTypes]: string;
  };
  MEDIBUDDY: {
    [K in LanguageTypes]: string;
  };
  CALL_NOW: {
    [K in LanguageTypes]: string;
  };
  HOME: {
    [K in LanguageTypes]: string;
  };
  PRODUCTS: {
    [K in LanguageTypes]: string;
  };
  ABOUT_US: {
    [K in LanguageTypes]: string;
  };
  CONTACT_US: {
    [K in LanguageTypes]: string;
  };
  APPLY_NOW: {
    [K in LanguageTypes]: string;
  };
  HIGHER_EDUCATION_LOANS: {
    [K in LanguageTypes]: string;
  };
  INSURANCE: {
    [K in LanguageTypes]: string;
  };
  INTERACTIVE_FLAT_PANELS: {
    [K in LanguageTypes]: string;
  };
  FEE_FINANCE_1: {
    [K in LanguageTypes]: string;
  };
  FEE_FINANCE_2: {
    [K in LanguageTypes]: string;
  };
  FEE_FINANCE_3: {
    [K in LanguageTypes]: string;
  };
  CONTINUE: {
    [K in LanguageTypes]: string;
  };
  FEE_FINANCE_4: {
    [K in LanguageTypes]: string;
  };
  FEE_FINANCE_5: {
    [K in LanguageTypes]: string;
  };
  HEA_1: {
    [K in LanguageTypes]: string;
  };
  HEA_2: {
    [K in LanguageTypes]: string;
  };
  HEA_3: {
    [K in LanguageTypes]: string;
  };
  CHAT_WITH_AGENT: {
    [K in LanguageTypes]: string;
  };
  HEA_4: {
    [K in LanguageTypes]: string;
  };
  HEA_5: {
    [K in LanguageTypes]: string;
  };
  HEA_6: {
    [K in LanguageTypes]: string;
  };
  FF_7: {
    [K in LanguageTypes]: string;
  };
  FF_8: {
    [K in LanguageTypes]: string;
  };
  FF_9: {
    [K in LanguageTypes]: string;
  };
  FF_10: {
    [K in LanguageTypes]: string;
  };
  FF_11: {
    [K in LanguageTypes]: string;
  };
  FF_12: {
    [K in LanguageTypes]: string;
  };
  FF_13: {
    [K in LanguageTypes]: string;
  };
  FF_14: {
    [K in LanguageTypes]: string;
  };
  FF_15: {
    [K in LanguageTypes]: string;
  };
  LOGIN: {
    [K in LanguageTypes]: string;
  };
  FILL_REQUIRED_DETAILS: {
    [K in LanguageTypes]: string;
  };
  SUBMIT: {
    [K in LanguageTypes]: string;
  };
  QUICK_APPLICATION_FORM: {
    [K in LanguageTypes]: string;
  };
  KYC: {
    [K in LanguageTypes]: string;
  };
  CONFIRM_IDENTITY: {
    [K in LanguageTypes]: string;
  };
  ADVANCE_EMI: {
    [K in LanguageTypes]: string;
  };
  PAY_ADVANCE_EMI: {
    [K in LanguageTypes]: string;
  };
  DISBURSEMENT: {
    [K in LanguageTypes]: string;
  };
  PAYMENT_SENT_TO_INSTITUTE: {
    [K in LanguageTypes]: string;
  };
}
