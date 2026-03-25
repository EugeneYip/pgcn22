"use client";

import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BG = "#FCFAF2";
const PAPER = "#FFFDF8";
const INK = "#24303A";
const SUB = "#5F6B76";
const LINE_SOFT = "#DED7C8";
const ACCENT = "#4C6A6A";
const ACCENT_2 = "#C06C54";
const ACCENT_3 = "#8B9D77";
const ACCENT_4 = "#7B5C6E";
const ACCENT_5 = "#A78B5A";

const ICON_PATHS = {
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  globe:
    "M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 2.7 4 6.1 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.1-4-10s1.5-7.3 4-10zm-9 10h18M4.5 6.5h15M4.5 17.5h15",
  chart: "M4 18h16M7 15l3-4 3 2 4-6",
  stack: "M12 3l8 4-8 4-8-4 8-4zm8 8l-8 4-8-4m16 4l-8 4-8-4",
  file: "M7 3h7l5 5v13H7zM14 3v5h5",
  check: "M5 13l4 4L19 7",
  alert: "M12 3l9 16H3l9-16zm0 5v5m0 3h.01",
  arrow: "M5 12h14M13 6l6 6-6 6",
  down: "M6 9l6 6 6-6",
  spark: "M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2z",
  table: "M4 5h16v14H4zM4 10h16M10 5v14M15 5v14",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zm6-1l3 3",
  home: "M3 11l9-7 9 7v9H3zM9 20v-6h6v6",
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name] || ICON_PATHS.spark} />
    </svg>
  );
}

const COPY = {
  en: {
    name: "English",
    dir: "ltr",
    title: "Procter & Gamble in China, 2022",
    subtitle:
      "A reader-first strategy infrastructure built from the 2022 case, the 2012 case, and the 2012 exhibit file. The English view is the primary version. Evidence and interpretation are kept visibly separate.",
    readTitle: "How to read this page",
    legend: [
      ["Direct fact", "Stated in the case text."],
      [
        "Exhibit-derived",
        "Read directly from an uploaded exhibit or calculated from an exhibit that says it is estimated.",
      ],
      [
        "Interpretation",
        "Analysis grounded in the case rather than a verbatim case statement.",
      ],
    ],
    coverageTitle: "Coverage audit",
    coverageBody:
      "No major strategic omission remains in the core narrative. The only fidelity limit is that chart-only figures without machine-readable source points cannot be rebuilt as exact numeric tables.",
    exactRebuild: "Exact or table-faithful rebuilds",
    figureRefs: "Figure-reference only",
    figureRefsNote:
      "2012 Exhibits 8 and 9 and 2022 Exhibits 8 and 9 are chart-style figures in the uploaded files. They are flagged here as reference figures unless raw underlying points are available.",
    quickVerdictTitle: "Clean judgment",
    quickVerdict:
      "P&G's problem in China was not capability collapse. It was a lag in strategic fit. China moved toward premium demand, digital channels, sharper segmentation, and stronger local resonance faster than P&G's old system expected.",
    metricLabel: "Key metrics",
    oldVsNew: "Old model versus current market",
    oldHeader: "Historical P&G edge",
    newHeader: "What the market now rewards",
    exhibits2022: "2022 exhibits",
    exhibits2012: "2012 exhibits",
    show: "Show",
    hide: "Hide",
    chartOnly: "Chart-style source figure",
    tableExact: "Table-faithful exhibit rebuild",
    sectionTitles: {
      core: "The core issue",
      importance: "Why China mattered",
      build: "How P&G built its original position",
      change: "What changed in China",
      misread: "Where P&G misread the market",
      response: "How P&G responded",
      strength: "What still made P&G strong",
      tension: "Why observers were still uneasy",
      finance: "Financial context that matters",
      judgment: "Final judgment",
    },
    sectionSummaries: {
      core: "This is a fit problem, not a survival problem. By 2022 P&G still had scale, brands, operating strength, and category leadership in China. The unresolved question was whether the system that once made P&G dominant still matched a market that had become more premium, more digital, more fragmented, and more locally demanding.",
      importance:
        "China was not peripheral inside P&G's portfolio. By 2021 Greater China represented about 10% of global sales, and the market had produced about 30% of the company's prior-year sales growth. Because P&G still trailed peers in emerging-market exposure, China carried strategic weight beyond its reported share.",
      build:
        "P&G entered early, built demand before it sold, and helped shape the operating foundations of modern FMCG competition in China. It created categories, educated consumers, built suppliers, trained distributors, expanded deep into lower-tier markets, and turned scale into a real sourcing and distribution advantage.",
      change:
        "China's FMCG market changed structurally. Premiumization accelerated, e-commerce expanded from marginal to central, digital buying became normal across urban households, and lower-tier cities became a growth engine. Competition also became easier for focused brands that could move faster and speak more directly to local consumers.",
      misread:
        "P&G traded down while many Chinese consumers traded up. The diaper category captured the error clearly: premium imported and premium Japanese-style offerings gained traction while P&G had held back because of cost and price assumptions. The company also stayed too tied to supermarket, hypermarket, and TV logic while demand shifted toward e-commerce, specialty retail, social media, and live commerce.",
      response:
        "After 2016 P&G responded seriously. It premiumized parts of the portfolio, pushed harder into e-commerce and specialty channels, increased online and event-led marketing, worked with Chinese KOLs, and revived more localized product ideas such as Oriental Therapy. The response helped restore momentum, but it did not remove the structural pressure of a harder market.",
      strength:
        "P&G still mattered a great deal in China. It remained strong in hair care, personal hygiene, baby personal care, and household penetration. Its reach stayed exceptional, and the company still held assets that many rivals lacked: brands, R&D, manufacturing, distribution, and a broad installed consumer base.",
      tension:
        "The unease in the case comes from one question: does scale still protect incumbents the way it used to? In a digital market, a much smaller brand can buy attention, win shelf presence, and build a niche with less dependence on national offline distribution. That weakens the defensive value of the old middle-of-the-market formula.",
      finance:
        "The global financials support the narrative without proving every causal claim. Revenue was broadly flat over the longer 2009 to 2021 window, profit recovered strongly by 2021, and the exhibit-based Greater China series suggests that China dipped during the period of strategic mismatch and then rebounded materially.",
      judgment:
        "The strongest reading is that P&G remained powerful but less automatically secure. Its challenge in China was to adapt a system built for broad, scaled middle-market dominance to a market where premium demand, digital execution, local relevance, and sharper positioning now mattered more.",
    },
    metricNames: {
      globalSales: "Global sales, 2021",
      greaterChinaShare: "Greater China share of global sales, 2021",
      globalGrowthFromChina:
        "Share of prior-year global sales growth from China",
      brandsGlobal: "Billion-dollar brands, 2021",
      categoriesLed: "Categories led in China at entry era",
      sales2009: "China sales, 2009",
      householdCoverage: "Household coverage, 2009",
      stores: "Stores covered",
      distributionCenters: "Distribution centers by 2010",
      costAdvantage: "Sourcing advantage versus medium Chinese rivals",
      lineCost: "Production line cost reduction",
      fmcgValue: "China FMCG market value, 2020",
      premiumShift:
        "Share of several FMCG categories in top two price tiers by late 2010s",
      ecommerceShift: "E-commerce share of urban FMCG sales",
      digitalFamilies: "Urban families buying FMCG through digital channels",
      tierGrowth: "Tier 3 to 5 FMCG revenue growth",
      diaperDrop: "Pampers diaper share change",
      chinaSales2021: "Greater China sales, FY2021",
      chinaEmployees: "Employees in China",
      plants: "Manufacturing plants in China",
      penetration2021: "Urban household penetration, 2021",
      hairShare: "Hair care share, 2020",
      personalHygiene: "Personal hygiene share, 2020",
      babyCare: "Baby personal care share, 2018",
      ros2021: "Return on Sales, 2021",
      roa2021: "Return on Assets, 2021",
      roe2021: "Return on Equity, 2021",
    },
    nav: [
      "Overview",
      "Dashboard",
      "Timeline",
      "Market shift",
      "Exhibits",
      "Judgment",
    ],
  },
  zhTW: {
    name: "繁體中文",
    dir: "ltr",
    title: "寶僑在中國，2022",
    subtitle:
      "以 2022 個案、2012 個案與 2012 Exhibit 檔案為基礎重建的讀者導向策略基礎設施。英文版為主版本，事實、Exhibit 與分析分層呈現。",
    readTitle: "本頁閱讀方式",
    legend: [
      ["直接事實", "個案本文直接陳述。"],
      ["Exhibit推導", "直接來自上傳 Exhibit，或 Exhibit 已明示為估算值。"],
      ["分析判讀", "根據個案推導出的分析，不是逐字原文。"],
    ],
    coverageTitle: "涵蓋檢查",
    coverageBody:
      "核心戰略敘事已無明顯重大遺漏。唯一的保真限制，是上傳檔案中僅以圖形呈現、未提供可讀數列的 Exhibit，無法重建為完全精確的數值表。",
    exactRebuild: "可精確或表格忠實重建",
    figureRefs: "僅能作為圖形參考",
    figureRefsNote:
      "2012 Exhibit 8、9 與 2022 Exhibit 8、9 在上傳檔案中屬於圖表型 figure，若沒有原始數列，這裡只能標示為參考圖。",
    quickVerdictTitle: "最終判斷",
    quickVerdict:
      "寶僑在中國的問題，不是能力崩解，而是戰略適配落後。中國市場比寶僑舊有體系預期得更快轉向高端化、數位化、精準分眾與在地共鳴。",
    metricLabel: "關鍵指標",
    oldVsNew: "舊體系與新市場的對照",
    oldHeader: "寶僑過去的優勢來源",
    newHeader: "市場現在真正獎勵的能力",
    exhibits2022: "2022 Exhibits",
    exhibits2012: "2012 Exhibits",
    show: "展開",
    hide: "收合",
    chartOnly: "圖形型原始 Exhibit",
    tableExact: "表格忠實重建",
    sectionTitles: {
      core: "核心問題",
      importance: "為何中國如此重要",
      build: "寶僑如何建立原始優勢",
      change: "中國市場到底變了甚麼",
      misread: "寶僑誤判市場的地方",
      response: "寶僑後來如何修正",
      strength: "寶僑仍然強在何處",
      tension: "為何觀察者仍然不安",
      finance: "真正重要的財務脈絡",
      judgment: "最終結論",
    },
    sectionSummaries: {
      core: "這不是生存問題，而是適配問題。到 2022 年，寶僑在中國仍有規模、品牌、營運能力與品類領導地位。真正未解的是，那套曾經讓寶僑成功的系統，是否仍然適合一個更高端、更數位、更碎片化、也更要求在地感的市場。",
      importance:
        "中國不是寶僑全球組合裡的次要市場。到 2021 年，大中華約占全球銷售 10%，且貢獻了前一年度約 30% 的全球銷售成長。再加上寶僑新興市場曝險低於部分主要同業，中國的戰略分量遠高於表面占比。",
      build:
        "寶僑很早就進入，先建立需求，再正式銷售，也實際參與了中國現代 FMCG 競爭基礎的建構。它創造品類、教育消費者、培養供應商、訓練經銷商、深入低線城市，並把規模轉化成真正的採購與配送優勢。",
      change:
        "中國 FMCG 市場是結構性改變，而不是小修小補。高端化加速，電商從邊緣走到核心，數位購買成為都市家庭常態，低線城市成為成長來源。這也讓更聚焦、更快、更懂在地語境的品牌更容易切入。",
      misread:
        "寶僑向下走，但很多中國消費者反而向上走。尿布就是最典型的例子：高端進口與日系高端產品快速上升，但寶僑因成本與價格判斷而沒有及時強推。另一個誤判，是仍過度倚重大賣場、超市與電視，而市場已轉向電商、專門通路、社群媒體與直播。",
      response:
        "2016 年後，寶僑確實做出較嚴肅的修正。它推進高端產品、加大電商與專門通路比重、增加線上與活動型行銷、與中國 KOL 合作，也重啟更在地化的產品方向，例如 Oriental Therapy。這些修正帶來回升，但沒有消除市場結構變難的事實。",
      strength:
        "寶僑在中國仍然很有分量。它在護髮、個人清潔、嬰兒護理與家庭滲透率上仍具優勢，也仍握有許多對手不容易短期複製的資產：品牌、研發、製造、配送，以及龐大的既有消費者基礎。",
      tension:
        "個案真正的不安，來自一個問題：規模是否仍像過去一樣能保護既有龍頭？在數位市場裡，小很多的品牌也能買到注意力、取得陳列位置，並快速做出利基。這會削弱過去那套以中間大眾市場為核心的防禦力。",
      finance:
        "全球財務數據支持這條敘事，但不足以證明每一個因果細節。2009 到 2021 的長期營收大致持平，獲利在 2021 顯著回升，而 Exhibit 推估的大中華銷售序列也顯示，中國業務在戰略錯配期下滑，之後再明顯反彈。",
      judgment:
        "最合理的總結是：寶僑仍然強，但已不再像過去那樣自動穩固。它在中國的真正挑戰，是把一套為大規模中間市場打造的體系，改造成能在高端需求、數位執行、在地相關性與精準定位更重要的市場裡持續領先。",
    },
    metricNames: {
      globalSales: "2021 全球營收",
      greaterChinaShare: "2021 大中華占全球營收比重",
      globalGrowthFromChina: "中國占前一年全球銷售成長比重",
      brandsGlobal: "2021 十億美元品牌數",
      categoriesLed: "早期在中國領先的品類",
      sales2009: "2009 中國銷售額",
      householdCoverage: "2009 家戶覆蓋率",
      stores: "覆蓋門市數",
      distributionCenters: "2010 年前配送中心",
      costAdvantage: "相對中型本土競爭者採購優勢",
      lineCost: "產線成本降幅",
      fmcgValue: "2020 中國 FMCG 市場規模",
      premiumShift: "2010 年代後期若干品類前兩大價位帶占比",
      ecommerceShift: "都市 FMCG 銷售中的電商占比",
      digitalFamilies: "透過數位通路購買 FMCG 的都市家庭",
      tierGrowth: "三至五線城市 FMCG 成長率",
      diaperDrop: "幫寶適尿布市占變化",
      chinaSales2021: "2021 財年大中華銷售",
      chinaEmployees: "中國員工數",
      plants: "中國製造工廠",
      penetration2021: "2021 都市家戶滲透率",
      hairShare: "2020 護髮市占",
      personalHygiene: "2020 個人清潔市占",
      babyCare: "2018 嬰兒護理市占",
      ros2021: "2021 銷售報酬率",
      roa2021: "2021 資產報酬率",
      roe2021: "2021 股東權益報酬率",
    },
    nav: ["總覽", "儀表板", "時間線", "市場轉變", "Exhibits", "結論"],
  },
  vi: {
    name: "Tiếng Việt",
    dir: "ltr",
    title: "Procter & Gamble tại Trung Quốc, 2022",
    subtitle:
      "Bản hạ tầng chiến lược ưu tiên người đọc, dựng lại từ case 2022, case 2012 và file Exhibit 2012. Tiếng Anh là phiên bản chính.",
    readTitle: "Cách đọc trang này",
    legend: [
      ["Direct fact", "Stated in the case text."],
      [
        "Exhibit-derived",
        "Read directly from an uploaded exhibit or calculated from an exhibit that says it is estimated.",
      ],
      [
        "Interpretation",
        "Analysis grounded in the case rather than a verbatim case statement.",
      ],
    ],
    coverageTitle: "Kiểm tra độ bao phủ",
    coverageBody:
      "Phần tường thuật chiến lược cốt lõi không còn thiếu sót lớn. Giới hạn duy nhất là các figure dạng biểu đồ không có dãy số gốc để tái tạo thành bảng số chính xác.",
    exactRebuild: "Tái dựng chính xác hoặc trung thành với bảng",
    figureRefs: "Chỉ tham chiếu theo figure",
    figureRefsNote:
      "Exhibit 8 và 9 của năm 2012, cùng Exhibit 8 và 9 của năm 2022, là figure dạng biểu đồ trong file gốc. Nếu không có điểm dữ liệu nền, chúng chỉ có thể được giữ như figure tham chiếu.",
    quickVerdictTitle: "Kết luận ngắn gọn",
    quickVerdict:
      "Vấn đề của P&G tại Trung Quốc không phải là mất năng lực, mà là chậm thích nghi chiến lược. Thị trường Trung Quốc chuyển sang cao cấp hóa, số hóa, phân mảnh và đòi hỏi tính bản địa nhanh hơn hệ thống cũ của P&G dự đoán.",
    metricLabel: "Chỉ số chính",
    oldVsNew: "Mô hình cũ so với thị trường hiện tại",
    oldHeader: "Lợi thế lịch sử của P&G",
    newHeader: "Điều thị trường hiện nay tưởng thưởng",
    exhibits2022: "Exhibit 2022",
    exhibits2012: "Exhibit 2012",
    show: "Mở",
    hide: "Thu gọn",
    chartOnly: "Figure nguồn dạng biểu đồ",
    tableExact: "Tái dựng trung thành với bảng",
    sectionTitles: {
      core: "Vấn đề cốt lõi",
      importance: "Vì sao Trung Quốc quan trọng",
      build: "P&G đã xây vị thế ban đầu như thế nào",
      change: "Trung Quốc đã thay đổi ra sao",
      misread: "P&G đã đọc sai thị trường ở đâu",
      response: "P&G đã phản ứng như thế nào",
      strength: "Điều gì vẫn làm P&G mạnh",
      tension: "Vì sao người quan sát vẫn còn lo ngại",
      finance: "Bối cảnh tài chính cần chú ý",
      judgment: "Đánh giá cuối cùng",
    },
    sectionSummaries: {
      core: "Đây là vấn đề về độ phù hợp chiến lược, không phải vấn đề sống còn. Đến năm 2022, P&G vẫn có quy mô, thương hiệu, năng lực vận hành và vị thế dẫn đầu ở nhiều ngành hàng tại Trung Quốc. Câu hỏi còn lại là liệu hệ thống từng giúp P&G thống trị có còn phù hợp với một thị trường cao cấp hơn, số hóa hơn, phân mảnh hơn và đòi hỏi bản địa hóa mạnh hơn hay không.",
      importance:
        "Trung Quốc không phải là thị trường phụ trong danh mục toàn cầu của P&G. Đến năm 2021, Đại Trung Hoa chiếm khoảng 10% doanh thu toàn cầu và đóng góp khoảng 30% tăng trưởng doanh thu của năm trước. Vì P&G vẫn có mức hiện diện tại thị trường mới nổi thấp hơn một số đối thủ, Trung Quốc mang ý nghĩa chiến lược vượt xa tỷ trọng báo cáo.",
      build:
        "P&G vào sớm, gây dựng nhu cầu trước khi bán hàng, và tham gia trực tiếp vào việc hình thành nền tảng vận hành của cạnh tranh FMCG hiện đại tại Trung Quốc. Công ty mở ngành hàng, giáo dục người tiêu dùng, phát triển nhà cung ứng, đào tạo nhà phân phối, mở rộng xuống các thành phố cấp thấp hơn và biến quy mô thành lợi thế mua hàng và phân phối thực sự.",
      change:
        "Thị trường FMCG Trung Quốc đã thay đổi về cấu trúc. Cao cấp hóa tăng mạnh, thương mại điện tử đi từ thứ yếu thành trung tâm, mua hàng số trở thành bình thường ở các hộ gia đình đô thị, và các thành phố cấp thấp trở thành nguồn tăng trưởng. Điều này cũng mở cửa cho các thương hiệu tập trung hơn, nhanh hơn và hiểu ngữ cảnh địa phương hơn.",
      misread:
        "P&G đi xuống phân khúc thấp hơn trong khi nhiều người tiêu dùng Trung Quốc lại đi lên phân khúc cao hơn. Tã là ví dụ rõ nhất: hàng nhập cao cấp và sản phẩm kiểu Nhật cao cấp tăng mạnh, còn P&G chậm đẩy mạnh vì giả định về chi phí và giá. Công ty cũng bám quá lâu vào siêu thị, đại siêu thị và TV trong khi nhu cầu chuyển sang thương mại điện tử, kênh chuyên biệt, mạng xã hội và livestream.",
      response:
        "Sau năm 2016, P&G đã phản ứng một cách nghiêm túc. Công ty đẩy cao cấp hóa danh mục, tăng trọng số cho thương mại điện tử và kênh chuyên biệt, tăng tiếp thị trực tuyến và sự kiện, hợp tác với KOL Trung Quốc và phục hồi những ý tưởng sản phẩm bản địa hơn như Oriental Therapy. Điều này giúp phục hồi đà tăng, nhưng không xóa được áp lực cấu trúc của một thị trường khó hơn.",
      strength:
        "P&G vẫn là một thế lực lớn tại Trung Quốc. Công ty còn mạnh trong chăm sóc tóc, vệ sinh cá nhân, chăm sóc em bé và độ phủ hộ gia đình. Công ty cũng vẫn giữ những tài sản mà nhiều đối thủ không dễ sao chép trong ngắn hạn: thương hiệu, R&D, sản xuất, phân phối và một nền người tiêu dùng rất lớn.",
      tension:
        "Sự căng thẳng của case nằm ở câu hỏi: quy mô có còn bảo vệ doanh nghiệp dẫn đầu như trước hay không? Trong môi trường số, một thương hiệu nhỏ hơn nhiều vẫn có thể mua được sự chú ý, giành vị trí hiển thị và xây dựng ngách thị trường mà không cần phụ thuộc quá nhiều vào mạng lưới phân phối ngoại tuyến toàn quốc.",
      finance:
        "Các số liệu tài chính toàn cầu ủng hộ câu chuyện này nhưng không chứng minh mọi quan hệ nhân quả. Doanh thu dài hạn giai đoạn 2009 đến 2021 nhìn chung khá phẳng, lợi nhuận phục hồi mạnh vào năm 2021, và chuỗi doanh số Đại Trung Hoa suy ra từ Exhibit cho thấy hoạt động tại Trung Quốc giảm trong giai đoạn lệch chiến lược rồi bật lại rõ rệt.",
      judgment:
        "Cách đọc mạnh nhất là P&G vẫn rất mạnh nhưng không còn được bảo vệ một cách tự động. Thách thức thực sự tại Trung Quốc là biến một hệ thống được thiết kế cho sự thống trị quy mô lớn ở thị trường trung tâm thành một hệ thống có thể thắng trong bối cảnh nơi cao cấp hóa, thực thi số, tính bản địa và định vị sắc nét quan trọng hơn.",
    },
    metricNames: {
      globalSales: "Global sales, 2021",
      greaterChinaShare: "Greater China share of global sales, 2021",
      globalGrowthFromChina:
        "Share of prior-year global sales growth from China",
      brandsGlobal: "Billion-dollar brands, 2021",
      categoriesLed: "Categories led in China at entry era",
      sales2009: "China sales, 2009",
      householdCoverage: "Household coverage, 2009",
      stores: "Stores covered",
      distributionCenters: "Distribution centers by 2010",
      costAdvantage: "Sourcing advantage versus medium Chinese rivals",
      lineCost: "Production line cost reduction",
      fmcgValue: "China FMCG market value, 2020",
      premiumShift:
        "Share of several FMCG categories in top two price tiers by late 2010s",
      ecommerceShift: "E-commerce share of urban FMCG sales",
      digitalFamilies: "Urban families buying FMCG through digital channels",
      tierGrowth: "Tier 3 to 5 FMCG revenue growth",
      diaperDrop: "Pampers diaper share change",
      chinaSales2021: "Greater China sales, FY2021",
      chinaEmployees: "Employees in China",
      plants: "Manufacturing plants in China",
      penetration2021: "Urban household penetration, 2021",
      hairShare: "Hair care share, 2020",
      personalHygiene: "Personal hygiene share, 2020",
      babyCare: "Baby personal care share, 2018",
      ros2021: "Return on Sales, 2021",
      roa2021: "Return on Assets, 2021",
      roe2021: "Return on Equity, 2021",
    },
    nav: [
      "Tổng quan",
      "Bảng điều khiển",
      "Dòng thời gian",
      "Chuyển dịch thị trường",
      "Exhibit",
      "Kết luận",
    ],
  },
  zhCN: {
    name: "简体中文",
    dir: "ltr",
    title: "宝洁在中国，2022",
    subtitle:
      "基于 2022 个案、2012 个案与 2012 Exhibit 文件重建的读者导向战略基础设施。英文版为主版本，事实、Exhibit 与分析分层呈现。",
    readTitle: "本页阅读方式",
    legend: [
      ["直接事實", "個案本文直接陳述。"],
      ["Exhibit推導", "直接來自上傳 Exhibit，或 Exhibit 已明示為估算值。"],
      ["分析判讀", "根據個案推導出的分析，不是逐字原文。"],
    ],
    coverageTitle: "覆盖检查",
    coverageBody:
      "核心战略叙事已无明显重大遗漏。唯一的保真限制，是上传文件中仅以图形呈现、未提供可读数列的 Exhibit，无法重建为完全精确的数值表。",
    exactRebuild: "可精确或表格忠实重建",
    figureRefs: "仅能作为图形参考",
    figureRefsNote:
      "2012 Exhibit 8、9 与 2022 Exhibit 8、9 在上传文件中属于图表型 figure，若没有原始数列，这里只能标示为参考图。",
    quickVerdictTitle: "最终判断",
    quickVerdict:
      "宝洁在中国的问题，不是能力崩解，而是战略适配落后。中国市场比宝洁旧有体系预期更快转向高端化、数字化、精准分众与在地共鸣。",
    metricLabel: "关键指标",
    oldVsNew: "旧体系与新市场的对照",
    oldHeader: "宝洁过去的优势来源",
    newHeader: "市场现在真正奖励的能力",
    exhibits2022: "2022 Exhibits",
    exhibits2012: "2012 Exhibits",
    show: "展开",
    hide: "收起",
    chartOnly: "圖形型原始 Exhibit",
    tableExact: "表格忠實重建",
    sectionTitles: {
      core: "核心问题",
      importance: "为何中国如此重要",
      build: "宝洁如何建立原始优势",
      change: "中国市场到底变了什么",
      misread: "宝洁误判市场的地方",
      response: "宝洁后来如何修正",
      strength: "宝洁仍然强在何处",
      tension: "为何观察者仍然不安",
      finance: "真正重要的财务脉络",
      judgment: "最终结论",
    },
    sectionSummaries: {
      core: "这不是生存问题，而是适配问题。到 2022 年，宝洁在中国仍有规模、品牌、运营能力与品类领导地位。真正未解的是，那套曾让宝洁成功的系统，是否仍然适合一个更高端、更数字化、更碎片化、也更要求在地感的市场。",
      importance:
        "中国不是宝洁全球组合里的次要市场。到 2021 年，大中华约占全球销售 10%，且贡献了前一年度约 30% 的全球销售增长。再加上宝洁新兴市场暴露低于部分主要同业，中国的战略分量远高于表面占比。",
      build:
        "宝洁很早进入，先建立需求，再正式销售，也实际参与了中国现代 FMCG 竞争基础的建构。它创造品类、教育消费者、培养供应商、训练经销商、深入低线城市，并把规模转化成真正的采购与配送优势。",
      change:
        "中国 FMCG 市场是结构性改变，而不是小修小补。高端化加速，电商从边缘走到核心，数字购买成为都市家庭常态，低线城市成为增长来源。这也让更聚焦、更快、更懂在地语境的品牌更容易切入。",
      misread:
        "宝洁向下走，但很多中国消费者反而向上走。尿布就是最典型的例子：高端进口与日系高端产品快速上升，但宝洁因成本与价格判断而没有及时强推。另一项误判，是仍过度倚重大卖场、超市与电视，而市场已转向电商、专门渠道、社交媒体与直播。",
      response:
        "2016 年后，宝洁确实做出较严肃的修正。它推进高端产品、加大电商与专门渠道比重、增加线上与活动型营销、与中国 KOL 合作，也重启更在地化的产品方向，例如 Oriental Therapy。这些修正带来回升，但没有消除市场结构变难的事实。",
      strength:
        "宝洁在中国仍然很有分量。它在护发、个人清洁、婴儿护理与家庭渗透率上仍具优势，也仍握有许多对手不容易短期复制的资产：品牌、研发、制造、配送，以及庞大的既有消费者基础。",
      tension:
        "个案真正的不安，来自一个问题：规模是否仍像过去一样能保护既有龙头？在数字市场里，小很多的品牌也能买到注意力、取得陈列位置，并快速做出利基。这会削弱过去那套以中间大众市场为核心的防御力。",
      finance:
        "全球财务数据支持这条叙事，但不足以证明每一个因果细节。2009 到 2021 的长期营收大致持平，获利在 2021 显著回升，而 Exhibit 推估的大中华销售序列也显示，中国业务在战略错配期下滑，之后再明显反弹。",
      judgment:
        "最合理的总结是：宝洁仍然强，但已不再像过去那样自动稳固。它在中国的真正挑战，是把一套为大规模中间市场打造的体系，改造成能在高端需求、数字执行、在地相关性与精准定位更重要的市场里持续领先。",
    },
    metricNames: {
      globalSales: "Global sales, 2021",
      greaterChinaShare: "Greater China share of global sales, 2021",
      globalGrowthFromChina:
        "Share of prior-year global sales growth from China",
      brandsGlobal: "Billion-dollar brands, 2021",
      categoriesLed: "Categories led in China at entry era",
      sales2009: "China sales, 2009",
      householdCoverage: "Household coverage, 2009",
      stores: "Stores covered",
      distributionCenters: "Distribution centers by 2010",
      costAdvantage: "Sourcing advantage versus medium Chinese rivals",
      lineCost: "Production line cost reduction",
      fmcgValue: "China FMCG market value, 2020",
      premiumShift:
        "Share of several FMCG categories in top two price tiers by late 2010s",
      ecommerceShift: "E-commerce share of urban FMCG sales",
      digitalFamilies: "Urban families buying FMCG through digital channels",
      tierGrowth: "Tier 3 to 5 FMCG revenue growth",
      diaperDrop: "Pampers diaper share change",
      chinaSales2021: "Greater China sales, FY2021",
      chinaEmployees: "Employees in China",
      plants: "Manufacturing plants in China",
      penetration2021: "Urban household penetration, 2021",
      hairShare: "Hair care share, 2020",
      personalHygiene: "Personal hygiene share, 2020",
      babyCare: "Baby personal care share, 2018",
      ros2021: "Return on Sales, 2021",
      roa2021: "Return on Assets, 2021",
      roe2021: "Return on Equity, 2021",
    },
    nav: ["总览", "仪表板", "时间线", "市场转变", "Exhibit", "结论"],
  },
  ptBR: {
    name: "Português (Brasil)",
    dir: "ltr",
    title: "Procter & Gamble na China, 2022",
    subtitle:
      "Infraestrutura estratégica feita para leitura, reconstruída a partir do caso de 2022, do caso de 2012 e do arquivo de exhibits de 2012. O inglês é a versão principal.",
    readTitle: "Como ler esta página",
    legend: [
      ["Direct fact", "Stated in the case text."],
      [
        "Exhibit-derived",
        "Read directly from an uploaded exhibit or calculated from an exhibit that says it is estimated.",
      ],
      [
        "Interpretation",
        "Analysis grounded in the case rather than a verbatim case statement.",
      ],
    ],
    coverageTitle: "Checagem de cobertura",
    coverageBody:
      "A narrativa estratégica central não tem omissões materiais relevantes. A única limitação de fidelidade está nos figures em formato de gráfico sem série numérica legível no material enviado.",
    exactRebuild: "Reconstruções exatas ou fiéis à tabela",
    figureRefs: "Somente como figure de referência",
    figureRefsNote:
      "Os Exhibits 8 e 9 de 2012 e os Exhibits 8 e 9 de 2022 aparecem como gráficos nas fontes enviadas. Sem os pontos de dados originais, eles ficam aqui como referência visual.",
    quickVerdictTitle: "Julgamento objetivo",
    quickVerdict:
      "O problema da P&G na China não foi colapso de capacidade. Foi atraso de encaixe estratégico. O mercado chinês migrou para premiumização, digitalização, segmentação mais fina e maior exigência de relevância local mais rápido do que o sistema antigo da P&G previa.",
    metricLabel: "Métricas-chave",
    oldVsNew: "Modelo antigo versus mercado atual",
    oldHeader: "Vantagem histórica da P&G",
    newHeader: "O que o mercado premia agora",
    exhibits2022: "2022 exhibits",
    exhibits2012: "2012 exhibits",
    show: "Mostrar",
    hide: "Ocultar",
    chartOnly: "Figure de origem em gráfico",
    tableExact: "Reconstrução fiel à tabela",
    sectionTitles: {
      core: "O problema central",
      importance: "Por que a China importava tanto",
      build: "Como a P&G construiu sua posição original",
      change: "O que mudou na China",
      misread: "Onde a P&G leu o mercado de forma errada",
      response: "Como a P&G reagiu",
      strength: "O que ainda mantinha a P&G forte",
      tension: "Por que ainda havia desconforto",
      finance: "O contexto financeiro que importa",
      judgment: "Julgamento final",
    },
    sectionSummaries: {
      core: "Este é um problema de ajuste estratégico, não de sobrevivência. Em 2022, a P&G ainda tinha escala, marcas, capacidade operacional e liderança de categoria na China. A questão em aberto era se o sistema que a tornou dominante continuava adequado a um mercado mais premium, mais digital, mais fragmentado e mais exigente em termos de adaptação local.",
      importance:
        "A China não era periférica dentro do portfólio global da P&G. Em 2021, Grande China representava cerca de 10% das vendas globais e havia gerado cerca de 30% do crescimento de vendas do ano anterior. Como a exposição da P&G a mercados emergentes ainda era menor do que a de alguns pares, a China tinha peso estratégico acima do número reportado.",
      build:
        "A P&G entrou cedo, criou demanda antes de vender e ajudou a montar a infraestrutura operacional da competição moderna de FMCG na China. Ela criou categorias, educou consumidores, desenvolveu fornecedores, treinou distribuidores, avançou para cidades de menor nível e transformou escala em vantagem real de compras e distribuição.",
      change:
        "O mercado chinês de FMCG mudou de forma estrutural. A premiumização acelerou, o e-commerce saiu da margem para o centro, a compra digital virou hábito nas famílias urbanas e cidades de menor nível passaram a ser motores de crescimento. Isso também abriu espaço para marcas mais focadas, mais rápidas e mais alinhadas ao contexto local.",
      misread:
        "A P&G desceu de faixa enquanto muitos consumidores chineses subiram. Fraldas mostram isso com clareza: produtos premium importados e ofertas premium de estilo japonês ganharam força, enquanto a P&G havia hesitado por pressupostos de custo e preço. A empresa também permaneceu presa demais à lógica de supermercado, hipermercado e TV quando a demanda migrou para e-commerce, canais especializados, redes sociais e live commerce.",
      response:
        "Depois de 2016, a resposta da P&G foi séria. A empresa premiumizou partes do portfólio, reforçou e-commerce e canais especializados, aumentou marketing online e eventos, trabalhou com KOLs chineses e reativou propostas mais localizadas, como Oriental Therapy. Isso ajudou a recuperar tração, mas não eliminou a pressão estrutural de um mercado mais difícil.",
      strength:
        "A P&G seguia muito relevante na China. Permanecia forte em hair care, higiene pessoal, cuidados infantis e penetração domiciliar. Também mantinha ativos que muitos concorrentes não reproduzem com facilidade no curto prazo: marcas, P&D, manufatura, distribuição e uma base consumidora muito ampla.",
      tension:
        "A tensão do caso vem de uma pergunta: escala ainda protege incumbentes como antes? Em um mercado digital, uma marca muito menor também pode comprar atenção, ganhar presença de prateleira e construir um nicho com menor dependência da distribuição física nacional. Isso reduz o valor defensivo da antiga fórmula centrada no meio do mercado.",
      finance:
        "Os dados financeiros globais apoiam a narrativa, mas não provam cada elo causal. A receita ficou relativamente estável no horizonte longo de 2009 a 2021, o lucro se recuperou fortemente em 2021 e a série estimada de Grande China sugere queda no período de desalinhamento estratégico seguida de recuperação material.",
      judgment:
        "A leitura mais forte é que a P&G continuava poderosa, mas menos automaticamente protegida. Seu desafio na China era adaptar um sistema feito para dominar o grande mercado intermediário a um ambiente em que premiumização, execução digital, relevância local e posicionamento mais afiado passaram a importar mais.",
    },
    metricNames: {
      globalSales: "Global sales, 2021",
      greaterChinaShare: "Greater China share of global sales, 2021",
      globalGrowthFromChina:
        "Share of prior-year global sales growth from China",
      brandsGlobal: "Billion-dollar brands, 2021",
      categoriesLed: "Categories led in China at entry era",
      sales2009: "China sales, 2009",
      householdCoverage: "Household coverage, 2009",
      stores: "Stores covered",
      distributionCenters: "Distribution centers by 2010",
      costAdvantage: "Sourcing advantage versus medium Chinese rivals",
      lineCost: "Production line cost reduction",
      fmcgValue: "China FMCG market value, 2020",
      premiumShift:
        "Share of several FMCG categories in top two price tiers by late 2010s",
      ecommerceShift: "E-commerce share of urban FMCG sales",
      digitalFamilies: "Urban families buying FMCG through digital channels",
      tierGrowth: "Tier 3 to 5 FMCG revenue growth",
      diaperDrop: "Pampers diaper share change",
      chinaSales2021: "Greater China sales, FY2021",
      chinaEmployees: "Employees in China",
      plants: "Manufacturing plants in China",
      penetration2021: "Urban household penetration, 2021",
      hairShare: "Hair care share, 2020",
      personalHygiene: "Personal hygiene share, 2020",
      babyCare: "Baby personal care share, 2018",
      ros2021: "Return on Sales, 2021",
      roa2021: "Return on Assets, 2021",
      roe2021: "Return on Equity, 2021",
    },
    nav: [
      "Visão geral",
      "Painel",
      "Linha do tempo",
      "Mudança de mercado",
      "Exhibits",
      "Conclusão",
    ],
  },
  esMX: {
    name: "Español (México)",
    dir: "ltr",
    title: "Procter & Gamble en China, 2022",
    subtitle:
      "Infraestructura estratégica pensada para lectores, reconstruida a partir del caso de 2022, el caso de 2012 y el archivo de exhibits de 2012. El inglés es la versión principal.",
    readTitle: "Cómo leer esta página",
    legend: [
      ["Direct fact", "Stated in the case text."],
      [
        "Exhibit-derived",
        "Read directly from an uploaded exhibit or calculated from an exhibit that says it is estimated.",
      ],
      [
        "Interpretation",
        "Analysis grounded in the case rather than a verbatim case statement.",
      ],
    ],
    coverageTitle: "Revisión de cobertura",
    coverageBody:
      "La narrativa estratégica central ya no tiene omisiones materiales importantes. La única limitación de fidelidad está en los figures tipo gráfica que no traen una serie numérica legible en los archivos cargados.",
    exactRebuild: "Reconstrucciones exactas o fieles a la tabla",
    figureRefs: "Solo como figure de referencia",
    figureRefsNote:
      "Los Exhibits 8 y 9 de 2012 y los Exhibits 8 y 9 de 2022 aparecen como gráficas en los archivos fuente. Sin los datos subyacentes, aquí se mantienen como referencia visual.",
    quickVerdictTitle: "Juicio ejecutivo",
    quickVerdict:
      "El problema de P&G en China no fue un colapso de capacidades. Fue un retraso de ajuste estratégico. El mercado chino se movió hacia premiumización, digitalización, segmentación más fina y mayor resonancia local más rápido de lo que esperaba el sistema histórico de P&G.",
    metricLabel: "Métricas clave",
    oldVsNew: "Modelo anterior contra mercado actual",
    oldHeader: "Ventaja histórica de P&G",
    newHeader: "Lo que hoy premia el mercado",
    exhibits2022: "2022 exhibits",
    exhibits2012: "2012 exhibits",
    show: "Mostrar",
    hide: "Ocultar",
    chartOnly: "Figure fuente tipo gráfica",
    tableExact: "Reconstrucción fiel a tabla",
    sectionTitles: {
      core: "El problema central",
      importance: "Por qué China importaba tanto",
      build: "Cómo P&G construyó su posición original",
      change: "Qué cambió en China",
      misread: "Dónde P&G leyó mal el mercado",
      response: "Cómo respondió P&G",
      strength: "Qué seguía haciendo fuerte a P&G",
      tension: "Por qué seguía habiendo inquietud",
      finance: "El contexto financiero que importa",
      judgment: "Juicio final",
    },
    sectionSummaries: {
      core: "Este es un problema de ajuste estratégico, no de supervivencia. En 2022, P&G todavía tenía escala, marcas, capacidad operativa y liderazgo de categoría en China. La pregunta abierta era si el sistema que la hizo dominante seguía siendo adecuado para un mercado más premium, más digital, más fragmentado y más exigente en términos de relevancia local.",
      importance:
        "China no era un mercado secundario dentro del portafolio global de P&G. En 2021, Gran China representó cerca de 10% de las ventas globales y generó alrededor de 30% del crecimiento de ventas del año previo. Como P&G seguía con menor exposición a mercados emergentes que algunos competidores, China tenía un peso estratégico mayor al que su porcentaje sugiere.",
      build:
        "P&G entró temprano, construyó demanda antes de vender y ayudó a formar la infraestructura operativa de la competencia moderna de FMCG en China. Creó categorías, educó consumidores, desarrolló proveedores, capacitó distribuidores, se expandió hacia ciudades de menor nivel y convirtió la escala en una ventaja real de abasto y distribución.",
      change:
        "El mercado chino de FMCG cambió de forma estructural. La premiumización se aceleró, el comercio electrónico pasó de marginal a central, la compra digital se volvió normal en los hogares urbanos y las ciudades de menor nivel se convirtieron en motor de crecimiento. Eso también abrió espacio para marcas más enfocadas, más rápidas y más cercanas al contexto local.",
      misread:
        "P&G bajó de nivel mientras muchos consumidores chinos subían. Los pañales muestran el error con claridad: los productos premium importados y las ofertas premium de estilo japonés ganaron terreno, mientras P&G había frenado por supuestos de costo y precio. La empresa también siguió demasiado atada a supermercados, hipermercados y TV cuando la demanda migró a e-commerce, canales especializados, redes sociales y livestreaming.",
      response:
        "Después de 2016, la respuesta de P&G fue seria. La empresa premiumizó partes del portafolio, reforzó e-commerce y canales especializados, aumentó marketing digital y eventos, trabajó con KOLs chinos y reactivó propuestas más localizadas como Oriental Therapy. Eso ayudó a recuperar impulso, pero no eliminó la presión estructural de un mercado más difícil.",
      strength:
        "P&G seguía siendo muy relevante en China. Mantenía fortaleza en hair care, higiene personal, cuidado infantil y penetración de hogares. También conservaba activos que muchos rivales no pueden replicar rápido: marcas, I+D, manufactura, distribución y una base instalada de consumidores muy amplia.",
      tension:
        "La tensión del caso se concentra en una pregunta: ¿la escala sigue protegiendo a los incumbentes como antes? En un mercado digital, una marca mucho más pequeña también puede comprar atención, ganar visibilidad y construir un nicho con menos dependencia de la distribución física nacional. Eso reduce el valor defensivo de la vieja fórmula del mercado medio.",
      finance:
        "Los datos financieros globales respaldan la narrativa, pero no prueban cada relación causal. Los ingresos se mantuvieron relativamente planos en el horizonte largo de 2009 a 2021, la utilidad se recuperó con fuerza en 2021 y la serie estimada de Gran China sugiere una caída durante el periodo de desajuste estratégico seguida de una recuperación importante.",
      judgment:
        "La lectura más sólida es que P&G seguía siendo poderosa, pero menos automáticamente segura. Su reto en China era adaptar un sistema diseñado para dominar el gran mercado intermedio a un entorno donde premiumización, ejecución digital, relevancia local y posicionamiento más nítido importan más.",
    },
    metricNames: {
      globalSales: "Global sales, 2021",
      greaterChinaShare: "Greater China share of global sales, 2021",
      globalGrowthFromChina:
        "Share of prior-year global sales growth from China",
      brandsGlobal: "Billion-dollar brands, 2021",
      categoriesLed: "Categories led in China at entry era",
      sales2009: "China sales, 2009",
      householdCoverage: "Household coverage, 2009",
      stores: "Stores covered",
      distributionCenters: "Distribution centers by 2010",
      costAdvantage: "Sourcing advantage versus medium Chinese rivals",
      lineCost: "Production line cost reduction",
      fmcgValue: "China FMCG market value, 2020",
      premiumShift:
        "Share of several FMCG categories in top two price tiers by late 2010s",
      ecommerceShift: "E-commerce share of urban FMCG sales",
      digitalFamilies: "Urban families buying FMCG through digital channels",
      tierGrowth: "Tier 3 to 5 FMCG revenue growth",
      diaperDrop: "Pampers diaper share change",
      chinaSales2021: "Greater China sales, FY2021",
      chinaEmployees: "Employees in China",
      plants: "Manufacturing plants in China",
      penetration2021: "Urban household penetration, 2021",
      hairShare: "Hair care share, 2020",
      personalHygiene: "Personal hygiene share, 2020",
      babyCare: "Baby personal care share, 2018",
      ros2021: "Return on Sales, 2021",
      roa2021: "Return on Assets, 2021",
      roe2021: "Return on Equity, 2021",
    },
    nav: [
      "General",
      "Panel",
      "Línea de tiempo",
      "Cambio de mercado",
      "Exhibits",
      "Conclusión",
    ],
  },
  ur: {
    name: "اردو",
    dir: "rtl",
    title: "پروکٹر اینڈ گیمبل چین میں، 2022",
    subtitle:
      "یہ ایک reader-first اسٹریٹجی انفراسٹرکچر ہے جو 2022 کیس، 2012 کیس، اور 2012 exhibit فائل کی بنیاد پر دوبارہ تیار کیا گیا ہے۔ بنیادی ورژن انگریزی ہے۔",
    readTitle: "اس صفحے کو کیسے پڑھیں",
    legend: [
      ["Direct fact", "Stated in the case text."],
      [
        "Exhibit-derived",
        "Read directly from an uploaded exhibit or calculated from an exhibit that says it is estimated.",
      ],
      [
        "Interpretation",
        "Analysis grounded in the case rather than a verbatim case statement.",
      ],
    ],
    coverageTitle: "کوریج کی جانچ",
    coverageBody:
      "اہم اسٹریٹجک بیانیے میں اب کوئی بڑی کمی باقی نہیں ہے۔ واحد fidelity limitation وہاں ہے جہاں اصل اپلوڈ فائل میں صرف chart figure موجود ہے مگر قابلِ مطالعہ عددی data series نہیں ہے۔",
    exactRebuild: "بالکل درست یا table-faithful rebuild",
    figureRefs: "صرف reference figure کے طور پر",
    figureRefsNote:
      "2012 کے Exhibit 8 اور 9 اور 2022 کے Exhibit 8 اور 9 اپلوڈ فائل میں chart-style figure ہیں۔ اگر اصل data points دستیاب نہ ہوں تو انہیں یہاں reference figure کے طور پر رکھا گیا ہے۔",
    quickVerdictTitle: "مختصر فیصلہ",
    quickVerdict:
      "چین میں P&G کا مسئلہ صلاحیت کے خاتمے کا نہیں تھا بلکہ strategic fit میں تاخیر کا تھا۔ چینی مارکیٹ premiumization، digital channels، زیادہ fragmentation، اور stronger local resonance کی طرف P&G کے پرانے نظام کی توقع سے زیادہ تیزی سے گئی۔",
    metricLabel: "اہم اشاریے",
    oldVsNew: "پرانا ماڈل بمقابلہ موجودہ مارکیٹ",
    oldHeader: "P&G کی تاریخی برتری",
    newHeader: "آج مارکیٹ کس چیز کو reward کرتی ہے",
    exhibits2022: "2022 exhibits",
    exhibits2012: "2012 exhibits",
    show: "دکھائیں",
    hide: "چھپائیں",
    chartOnly: "chart-style source figure",
    tableExact: "table-faithful exhibit rebuild",
    sectionTitles: {
      core: "بنیادی مسئلہ",
      importance: "چین اتنا اہم کیوں تھا",
      build: "P&G نے اپنی اصل پوزیشن کیسے بنائی",
      change: "چین میں کیا بدلا",
      misread: "P&G نے مارکیٹ کہاں غلط پڑھی",
      response: "P&G نے کیسے جواب دیا",
      strength: "کیا چیز P&G کو اب بھی مضبوط بناتی تھی",
      tension: "مشاہدہ کرنے والے اب بھی کیوں بےچین تھے",
      finance: "اہم مالی سیاق",
      judgment: "آخری فیصلہ",
    },
    sectionSummaries: {
      core: "یہ survival کا نہیں بلکہ strategic fit کا مسئلہ ہے۔ 2022 تک P&G کے پاس چین میں scale، brands، operating capability، اور category leadership موجود تھی۔ اصل سوال یہ تھا کہ کیا وہی نظام جو پہلے P&G کو طاقت دیتا تھا اب بھی ایک زیادہ premium، زیادہ digital، زیادہ fragmented، اور زیادہ locally demanding مارکیٹ کے لیے موزوں ہے۔",
      importance:
        "چین P&G کے عالمی پورٹ فولیو میں کوئی ثانوی مارکیٹ نہیں تھا۔ 2021 میں Greater China تقریباً 10 فیصد global sales تھی اور پچھلے سال کی global sales growth کا قریب 30 فیصد اسی مارکیٹ سے آیا۔ چونکہ P&G کی emerging markets exposure بعض حریفوں سے کم تھی، اس لیے چین کی strategic اہمیت اس کے reported share سے زیادہ تھی۔",
      build:
        "P&G نے جلد داخل ہو کر demand بنائی، پھر فروخت شروع کی، اور چین میں modern FMCG competition کی operating foundation بنانے میں کردار ادا کیا۔ اس نے categories بنائیں، صارفین کو educate کیا، suppliers تیار کیے، distributors کو train کیا، lower-tier markets تک پھیلاؤ کیا، اور scale کو حقیقی sourcing اور distribution advantage میں بدلا۔",
      change:
        "چین کی FMCG مارکیٹ میں structural تبدیلی آئی۔ premiumization تیز ہوئی، e-commerce مرکز میں آیا، digital buying شہری گھرانوں میں معمول بنا، اور lower-tier cities growth engine بن گئیں۔ اس سے ایسی brands کے لیے جگہ بنی جو زیادہ focused، زیادہ fast، اور local context سے زیادہ قریب تھیں۔",
      misread:
        "P&G نیچے کی طرف گئی جبکہ بہت سے چینی صارفین اوپر کی طرف گئے۔ diapers اس غلطی کی واضح مثال ہیں: imported premium اور Japanese-style premium offerings تیزی سے بڑھیں جبکہ P&G نے cost اور price assumptions کی وجہ سے دیر کی۔ کمپنی supermarket، hypermarket، اور TV logic سے بھی زیادہ دیر تک جڑی رہی جبکہ demand e-commerce، specialist channels، social media، اور livestreaming کی طرف چلی گئی۔",
      response:
        "2016 کے بعد P&G کا response سنجیدہ تھا۔ کمپنی نے portfolio کے کچھ حصوں کو premium بنایا، e-commerce اور specialist channels پر زور بڑھایا، online marketing اور events میں اضافہ کیا، Chinese KOLs کے ساتھ کام کیا، اور Oriental Therapy جیسی زیادہ localized ideas کو دوبارہ آگے بڑھایا۔ اس سے رفتار واپس آئی، مگر زیادہ مشکل مارکیٹ کا structural دباؤ ختم نہیں ہوا۔",
      strength:
        "P&G چین میں اب بھی بہت اہم تھی۔ hair care، personal hygiene، baby personal care، اور household penetration میں اس کی طاقت برقرار تھی۔ اس کے پاس وہ assets بھی تھے جو بہت سے rivals جلدی copy نہیں کر سکتے: brands، R&D، manufacturing، distribution، اور ایک بہت بڑی installed consumer base۔",
      tension:
        "اس کیس کی اصل tension ایک سوال میں ہے: کیا scale اب بھی incumbents کو پہلے کی طرح protect کرتی ہے؟ digital market میں ایک بہت چھوٹی brand بھی attention خرید سکتی ہے، shelf presence حاصل کر سکتی ہے، اور niche بنا سکتی ہے، وہ بھی national offline distribution پر کم انحصار کے ساتھ۔ اس سے middle-of-the-market formula کی پرانی دفاعی طاقت کم ہو جاتی ہے۔",
      finance:
        "global financial data اس narrative کی حمایت کرتے ہیں مگر ہر causal claim کو ثابت نہیں کرتے۔ 2009 سے 2021 تک long-run revenue کافی حد تک flat رہی، profit 2021 میں مضبوطی سے واپس آیا، اور exhibit-derived Greater China sales series یہ اشارہ دیتی ہے کہ strategic mismatch کے دوران کمی آئی اور پھر نمایاں recovery ہوئی۔",
      judgment:
        "سب سے مضبوط reading یہ ہے کہ P&G طاقتور تو رہی مگر پہلے جیسی خودکار حفاظت کے ساتھ نہیں۔ چین میں اس کا اصل چیلنج یہ تھا کہ ایک ایسے نظام کو ڈھالا جائے جو بڑے middle market پر dominance کے لیے بنا تھا، ایک ایسی مارکیٹ کے لیے جہاں premium demand، digital execution، local relevance، اور sharper positioning زیادہ اہم ہو چکے تھے۔",
    },
    metricNames: {
      globalSales: "Global sales, 2021",
      greaterChinaShare: "Greater China share of global sales, 2021",
      globalGrowthFromChina:
        "Share of prior-year global sales growth from China",
      brandsGlobal: "Billion-dollar brands, 2021",
      categoriesLed: "Categories led in China at entry era",
      sales2009: "China sales, 2009",
      householdCoverage: "Household coverage, 2009",
      stores: "Stores covered",
      distributionCenters: "Distribution centers by 2010",
      costAdvantage: "Sourcing advantage versus medium Chinese rivals",
      lineCost: "Production line cost reduction",
      fmcgValue: "China FMCG market value, 2020",
      premiumShift:
        "Share of several FMCG categories in top two price tiers by late 2010s",
      ecommerceShift: "E-commerce share of urban FMCG sales",
      digitalFamilies: "Urban families buying FMCG through digital channels",
      tierGrowth: "Tier 3 to 5 FMCG revenue growth",
      diaperDrop: "Pampers diaper share change",
      chinaSales2021: "Greater China sales, FY2021",
      chinaEmployees: "Employees in China",
      plants: "Manufacturing plants in China",
      penetration2021: "Urban household penetration, 2021",
      hairShare: "Hair care share, 2020",
      personalHygiene: "Personal hygiene share, 2020",
      babyCare: "Baby personal care share, 2018",
      ros2021: "Return on Sales, 2021",
      roa2021: "Return on Assets, 2021",
      roe2021: "Return on Equity, 2021",
    },
    nav: [
      "جائزہ",
      "ڈیش بورڈ",
      "ٹائم لائن",
      "مارکیٹ تبدیلی",
      "Exhibits",
      "نتیجہ",
    ],
  },
};
const SECTIONS = [
  {
    id: "core",
    tone: "Interpretation",
    metrics: [
      ["globalSales", "USD 76.1B"],
      ["greaterChinaShare", "10%"],
      ["brandsGlobal", "26"],
      ["globalGrowthFromChina", "30%"],
    ],
  },
  {
    id: "importance",
    tone: "Direct fact",
    metrics: [
      ["globalSales", "USD 76.1B"],
      ["greaterChinaShare", "10%"],
      ["globalGrowthFromChina", "30%"],
      [
        "categoriesLed",
        "Packaged shampoo, disposable diapers, modern toothpaste",
      ],
    ],
  },
  {
    id: "build",
    tone: "Direct fact",
    metrics: [
      ["sales2009", "USD 5.0B"],
      ["householdCoverage", "98%"],
      ["stores", "500,000+"],
      ["distributionCenters", "~150"],
      ["costAdvantage", "20% to 30%"],
      ["lineCost", "Up to 30%"],
    ],
  },
  {
    id: "change",
    tone: "Direct fact",
    metrics: [
      ["fmcgValue", "RMB 1,387B / ~USD 201B"],
      ["premiumShift", "~50%"],
      ["ecommerceShift", "2.1% → 30.2%"],
      ["digitalFamilies", "93%"],
      ["tierGrowth", "3.2% vs 2.5%"],
    ],
  },
  {
    id: "misread",
    tone: "Interpretation",
    metrics: [
      ["diaperDrop", "28.8% → 24.3%"],
      ["ecommerceShift", "2.1% → 30.2%"],
      ["premiumShift", "~50%"],
      ["tierGrowth", "3.2% vs 2.5%"],
    ],
  },
  {
    id: "response",
    tone: "Direct fact",
    metrics: [
      ["chinaSales2021", "USD 7.612B"],
      ["chinaEmployees", "8,000+"],
      ["plants", "8"],
      ["greaterChinaShare", "10%"],
    ],
  },
  {
    id: "strength",
    tone: "Direct fact",
    metrics: [
      ["penetration2021", "91.4%"],
      ["hairShare", "41.5%"],
      ["personalHygiene", "21.0%"],
      ["babyCare", "24.8%"],
    ],
  },
  {
    id: "tension",
    tone: "Interpretation",
    metrics: [
      ["penetration2021", "91.4%"],
      ["ecommerceShift", "2.1% → 30.2%"],
      ["digitalFamilies", "93%"],
      ["premiumShift", "~50%"],
    ],
  },
  {
    id: "finance",
    tone: "Exhibit-derived",
    metrics: [
      ["ros2021", "18.4%"],
      ["roa2021", "11.8%"],
      ["roe2021", "30.1%"],
      ["chinaSales2021", "USD 7.612B"],
    ],
  },
  {
    id: "judgment",
    tone: "Interpretation",
    metrics: [
      ["greaterChinaShare", "10%"],
      ["ecommerceShift", "2.1% → 30.2%"],
      ["penetration2021", "91.4%"],
      ["hairShare", "41.5%"],
    ],
  },
];
const TIMELINE = [
  [
    "1985",
    "P&G began market studies in Beijing and Shanghai and started advertising before sales.",
  ],
  [
    "1988",
    "Entry through the Hutchison Whampoa joint venture. Head & Shoulders launched first.",
  ],
  ["1997", "P&G raised its stake to 80% and introduced Crest and Pampers."],
  ["2004", "P&G moved to full ownership of the China operation."],
  ["2009", "China sales reached about USD 5 billion."],
  [
    "2013–2016",
    "Premiumization and digital channel shifts exposed a strategic mismatch.",
  ],
  [
    "2016+",
    "P&G pivoted harder toward premium products, e-commerce, specialty retail, and more local marketing.",
  ],
  [
    "2021",
    "Greater China reached about USD 7.6 billion and 91.4% urban household penetration.",
  ],
  [
    "2022",
    "The case frames P&G as strong but less automatically secure in China’s new competitive structure.",
  ],
];
const OLD_NEW_ROWS = [
  [
    "Early-mover prestige and category creation",
    "Premium relevance and sharper price-tier architecture",
  ],
  [
    "National offline distribution reach",
    "E-commerce execution, O2O, social commerce, live commerce",
  ],
  [
    "Television-heavy mass branding",
    "Platform-native content, KOLs, events, community signaling",
  ],
  [
    "Broad middle-market dominance",
    "Faster experimentation plus stronger local and niche resonance",
  ],
];
const CHARTS = {
  incomeTrend: [
    {
      year: "2009",
      Revenue: 76694,
      "Operating Income": 15374,
      "Net Income": 13436,
      EBITDA: 18456,
    },
    {
      year: "2010",
      Revenue: 77567,
      "Operating Income": 15732,
      "Net Income": 12517,
      EBITDA: 18840,
    },
    {
      year: "2011",
      Revenue: 81104,
      "Operating Income": 15495,
      "Net Income": 11564,
      EBITDA: 18333,
    },
    {
      year: "2012",
      Revenue: 82006,
      "Operating Income": 13035,
      "Net Income": 10500,
      EBITDA: 16239,
    },
    {
      year: "2013",
      Revenue: 80116,
      "Operating Income": 13817,
      "Net Income": 11068,
      EBITDA: 16799,
    },
    {
      year: "2014",
      Revenue: 74401,
      "Operating Income": 13910,
      "Net Income": 11390,
      EBITDA: 17051,
    },
    {
      year: "2015",
      Revenue: 70749,
      "Operating Income": 11049,
      "Net Income": 6777,
      EBITDA: 14183,
    },
    {
      year: "2016",
      Revenue: 65299,
      "Operating Income": 13441,
      "Net Income": 10253,
      EBITDA: 16519,
    },
    {
      year: "2017",
      Revenue: 65058,
      "Operating Income": 13766,
      "Net Income": 15079,
      EBITDA: 16586,
    },
    {
      year: "2018",
      Revenue: 66832,
      "Operating Income": 13363,
      "Net Income": 9485,
      EBITDA: 16197,
    },
    {
      year: "2019",
      Revenue: 67684,
      "Operating Income": 5487,
      "Net Income": 3634,
      EBITDA: 8311,
    },
    {
      year: "2020",
      Revenue: 70950,
      "Operating Income": 15706,
      "Net Income": 12764,
      EBITDA: 18719,
    },
    {
      year: "2021",
      Revenue: 76118,
      "Operating Income": 17986,
      "Net Income": 14035,
      EBITDA: 20721,
    },
  ],
  channelShift: [
    {
      year: "2012",
      "Supermarkets/ minimarkets": 36.6,
      Hypermarkets: 24.1,
      Grocery: 10.0,
      "Convenience/ Specialty Stores": 3.7,
      "E-commerce": 2.1,
      Other: 23.5,
    },
    {
      year: "2013",
      "Supermarkets/ minimarkets": 38.3,
      Hypermarkets: 23.6,
      Grocery: 9.4,
      "Convenience/ Specialty Stores": 3.7,
      "E-commerce": 2.8,
      Other: 22.1,
    },
    {
      year: "2014",
      "Supermarkets/ minimarkets": 39.7,
      Hypermarkets: 22.9,
      Grocery: 9.0,
      "Convenience/ Specialty Stores": 3.9,
      "E-commerce": 3.5,
      Other: 21.0,
    },
    {
      year: "2015",
      "Supermarkets/ minimarkets": 39.9,
      Hypermarkets: 22.0,
      Grocery: 7.8,
      "Convenience/ Specialty Stores": 4.2,
      "E-commerce": 4.7,
      Other: 21.3,
    },
    {
      year: "2016 a",
      "Supermarkets/ minimarkets": 39.5,
      Hypermarkets: 20.9,
      Grocery: 6.6,
      "Convenience/ Specialty Stores": 4.4,
      "E-commerce": 7.0,
      Other: 21.3,
    },
    {
      year: "2016 b",
      "Supermarkets/ minimarkets": 37.3,
      Hypermarkets: 21.9,
      Grocery: 6.0,
      "Convenience/ Specialty Stores": 7.5,
      "E-commerce": 11.1,
      Other: 16.2,
    },
    {
      year: "2017",
      "Supermarkets/ minimarkets": 36.2,
      Hypermarkets: 21.4,
      Grocery: 5.6,
      "Convenience/ Specialty Stores": 7.5,
      "E-commerce": 13.8,
      Other: 15.5,
    },
    {
      year: "2018",
      "Supermarkets/ minimarkets": 35.1,
      Hypermarkets: 20.1,
      Grocery: 5.5,
      "Convenience/ Specialty Stores": 7.5,
      "E-commerce": 17.1,
      Other: 14.7,
    },
    {
      year: "2019",
      "Supermarkets/ minimarkets": 33.9,
      Hypermarkets: 18.5,
      Grocery: 4.7,
      "Convenience/ Specialty Stores": 7.2,
      "E-commerce": 21.9,
      Other: 13.8,
    },
    {
      year: "2020",
      "Supermarkets/ minimarkets": 32.2,
      Hypermarkets: 16.4,
      Grocery: 4.1,
      "Convenience/ Specialty Stores": 6.9,
      "E-commerce": 28.4,
      Other: 12.1,
    },
    {
      year: "Q1–Q3 2021",
      "Supermarkets/ minimarkets": 31.5,
      Hypermarkets: 15.7,
      Grocery: 3.8,
      "Convenience/ Specialty Stores": 6.8,
      "E-commerce": 30.2,
      Other: 12.0,
    },
  ],
  premium: [
    { product: "Clothing & shoes", value: 61 },
    { product: "Consumer electronics", value: 54 },
    { product: "Shoes", value: 48 },
    { product: "Smartphone", value: 47 },
    { product: "Clothing", value: 47 },
    { product: "Bags & accessories", value: 38 },
    { product: "Bags & luggage", value: 32 },
    { product: "PC / laptop", value: 31 },
    { product: "Accessories", value: 30 },
    { product: "Cosmetics & body care", value: 29 },
    { product: "Household appliances", value: 21 },
    { product: "Cars, motorcycles, bicycles", value: 19 },
    { product: "TV & hi‐fi", value: 16 },
    { product: "Sports & outdoor products", value: 16 },
    { product: "Furniture & household goods", value: 14 },
    {
      product:
        "Alcoholic drinks (only shown to respondents of legal drinking age)",
      value: 13,
    },
    { product: "Food & nonalcoholic drinks", value: 10 },
    { product: "Stationery & hobby supplies", value: 9 },
    { product: "Toys & baby products", value: 9 },
    { product: "Detergents & cleaning products", value: 7 },
    { product: "DIY & garden products", value: 4 },
    { product: "Pet products", value: 3 },
    { product: "None of the above", value: 7 },
  ],
  penetrationTop10: [
    { company: "Yili", buyers2021: 174, penetration2021: 92.5 },
    { company: "P&G", buyers2021: 172, penetration2021: 91.4 },
    { company: "Megiu Group", buyers2021: 171, penetration2021: 91.0 },
    { company: "Master Kong", buyers2021: 157, penetration2021: 83.4 },
    { company: "Coca‐Cola", buyers2021: 150, penetration2021: 79.8 },
    { company: "Unilever", buyers2021: 150, penetration2021: 79.6 },
    { company: "Haday", buyers2021: 149, penetration2021: 79.2 },
    { company: "Heng An", buyers2021: 144, penetration2021: 76.3 },
    { company: "Nestlé", buyers2021: 141, penetration2021: 75.0 },
    { company: "Pepsico", buyers2021: 136, penetration2021: 72.4 },
  ],
  urbanRural: [
    {
      year: "1990",
      "Urban Population": 301.95,
      "Rural Population": 841.38,
      "Urban Disposable Income": 1510,
      "Rural Disposable Income": 686,
      "Urban Consumption": 1279,
      "Rural Consumption": 584,
    },
    {
      year: "2000",
      "Urban Population": 459.06,
      "Rural Population": 808.37,
      "Urban Disposable Income": 6280,
      "Rural Disposable Income": 2253,
      "Urban Consumption": 4998,
      "Rural Consumption": 1670,
    },
    {
      year: "2010",
      "Urban Population": 669.78,
      "Rural Population": 671.13,
      "Urban Disposable Income": 19109,
      "Rural Disposable Income": 5919,
      "Urban Consumption": 13471,
      "Rural Consumption": 4382,
    },
    {
      year: "2011",
      "Urban Population": 699.27,
      "Rural Population": 649.89,
      "Urban Disposable Income": 21810,
      "Rural Disposable Income": 6977,
      "Urban Consumption": 15161,
      "Rural Consumption": 5221,
    },
    {
      year: "2012",
      "Urban Population": 721.75,
      "Rural Population": 637.47,
      "Urban Disposable Income": 24565,
      "Rural Disposable Income": 7917,
      "Urban Consumption": 16674,
      "Rural Consumption": 5908,
    },
    {
      year: "2013",
      "Urban Population": 745.02,
      "Rural Population": 622.24,
      "Urban Disposable Income": 26467,
      "Rural Disposable Income": 9430,
      "Urban Consumption": 18488,
      "Rural Consumption": 7485,
    },
    {
      year: "2014",
      "Urban Population": 767.38,
      "Rural Population": 609.08,
      "Urban Disposable Income": 28844,
      "Rural Disposable Income": 10489,
      "Urban Consumption": 19968,
      "Rural Consumption": 8383,
    },
    {
      year: "2015",
      "Urban Population": 793.02,
      "Rural Population": 590.24,
      "Urban Disposable Income": 31195,
      "Rural Disposable Income": 11422,
      "Urban Consumption": 21392,
      "Rural Consumption": 9226,
    },
    {
      year: "2016",
      "Urban Population": 819.24,
      "Rural Population": 573.08,
      "Urban Disposable Income": 33616,
      "Rural Disposable Income": 12363,
      "Urban Consumption": 23079,
      "Rural Consumption": 10130,
    },
    {
      year: "2017",
      "Urban Population": 843.43,
      "Rural Population": 556.68,
      "Urban Disposable Income": 36396,
      "Rural Disposable Income": 13432,
      "Urban Consumption": 24445,
      "Rural Consumption": 10955,
    },
    {
      year: "2018",
      "Urban Population": 864.33,
      "Rural Population": 541.08,
      "Urban Disposable Income": 39251,
      "Rural Disposable Income": 14617,
      "Urban Consumption": 26112,
      "Rural Consumption": 12124,
    },
    {
      year: "2019",
      "Urban Population": 884.26,
      "Rural Population": 525.82,
      "Urban Disposable Income": 42359,
      "Rural Disposable Income": 16021,
      "Urban Consumption": 28063,
      "Rural Consumption": 13328,
    },
    {
      year: "2020",
      "Urban Population": 902.2,
      "Rural Population": 509.92,
      "Urban Disposable Income": 43834,
      "Rural Disposable Income": 17131,
      "Urban Consumption": 27007,
      "Rural Consumption": 13713,
    },
    {
      year: "2021",
      "Urban Population": 914.25,
      "Rural Population": 498.35,
      "Urban Disposable Income": 47412,
      "Rural Disposable Income": 18931,
      "Urban Consumption": 30307,
      "Rural Consumption": 15916,
    },
  ],
  beautyMarket: [
    {
      year: "2015",
      "Personal Care": 19404,
      Cosmetics: 9440,
      "Skin Care": 11133,
      Fragrances: 956,
      Total: 40933,
    },
    {
      year: "2016",
      "Personal Care": 20267,
      Cosmetics: 10183,
      "Skin Care": 11824,
      Fragrances: 1002,
      Total: 43276,
    },
    {
      year: "2017",
      "Personal Care": 21193,
      Cosmetics: 11012,
      "Skin Care": 12573,
      Fragrances: 1048,
      Total: 45826,
    },
    {
      year: "2018",
      "Personal Care": 22220,
      Cosmetics: 11950,
      "Skin Care": 13402,
      Fragrances: 1102,
      Total: 48674,
    },
    {
      year: "2019",
      "Personal Care": 22805,
      Cosmetics: 13148,
      "Skin Care": 14181,
      Fragrances: 1136,
      Total: 51270,
    },
    {
      year: "2020",
      "Personal Care": 23335,
      Cosmetics: 13003,
      "Skin Care": 14307,
      Fragrances: 1159,
      Total: 51804,
    },
    {
      year: "2021F",
      "Personal Care": 24603,
      Cosmetics: 14753,
      "Skin Care": 15576,
      Fragrances: 1227,
      Total: 56159,
    },
    {
      year: "2022F",
      "Personal Care": 26625,
      Cosmetics: 16585,
      "Skin Care": 17123,
      Fragrances: 1324,
      Total: 61657,
    },
    {
      year: "2023F",
      "Personal Care": 28846,
      Cosmetics: 18678,
      "Skin Care": 18838,
      Fragrances: 1431,
      Total: 67793,
    },
    {
      year: "2024F",
      "Personal Care": 30554,
      Cosmetics: 20576,
      "Skin Care": 20256,
      Fragrances: 1511,
      Total: 72897,
    },
    {
      year: "2025F",
      "Personal Care": 32418,
      Cosmetics: 22717,
      "Skin Care": 21809,
      Fragrances: 1598,
      Total: 78542,
    },
  ],
};
const EXHIBITS_2022 = {
  income: [
    [
      "",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    [
      "Revenue",
      "76,694",
      "77,567",
      "81,104",
      "82,006",
      "80,116",
      "74,401",
      "70,749",
      "65,299",
      "65,058",
      "66,832",
      "67,684",
      "70,950",
      "76,118",
    ],
    [
      "Cost of Goods Sold",
      "38,690",
      "37,042",
      "39,859",
      "41,411",
      "39,991",
      "39,030",
      "37,056",
      "32,909",
      "32,638",
      "34,432",
      "34,768",
      "35,250",
      "37,108",
    ],
    [
      "Gross Profit",
      "38,004",
      "40,525",
      "41,245",
      "40,595",
      "40,125",
      "35,371",
      "33,693",
      "32,390",
      "32,420",
      "32,400",
      "32,916",
      "35,700",
      "39,010",
    ],
    [
      "SG&A Expenses",
      "22,630",
      "24,793",
      "25,750",
      "25,984",
      "26,000",
      "21,461",
      "20,616",
      "18,949",
      "18,654",
      "19,037",
      "19,084",
      "19,994",
      "21,024",
    ],
    [
      "Other Operating Revenue",
      "0",
      "0",
      "0",
      "-1,576",
      "-308",
      "0",
      "-2,028",
      "0",
      "0",
      "0",
      "-8,345",
      "0",
      "0",
    ],
    [
      "Operating Expenses",
      "61,320",
      "61,835",
      "65,609",
      "68,971",
      "66,299",
      "60,491",
      "59,700",
      "51,858",
      "51,292",
      "53,469",
      "62,197",
      "55,244",
      "58,132",
    ],
    [
      "Operating Income",
      "15,374",
      "15,732",
      "15,495",
      "13,035",
      "13,817",
      "13,910",
      "11,049",
      "13,441",
      "13,766",
      "13,363",
      "5,487",
      "15,706",
      "17,986",
    ],
    [
      "Total Non-Operating Income / Expense",
      "-961",
      "-864",
      "-498",
      "-507",
      "362",
      "-401",
      "-37",
      "-72",
      "-509",
      "-37",
      "582",
      "128",
      "-371",
    ],
    [
      "Pre-Tax Income",
      "14,413",
      "14,868",
      "14,997",
      "12,528",
      "14,179",
      "13,509",
      "11,012",
      "13,369",
      "13,257",
      "13,326",
      "6,069",
      "15,834",
      "17,615",
    ],
    [
      "Income Taxes",
      "3,733",
      "4,017",
      "3,299",
      "3,378",
      "3,226",
      "2,851",
      "2,725",
      "3,342",
      "3,063",
      "3,465",
      "2,103",
      "2,731",
      "3,263",
    ],
    [
      "Income After Taxes",
      "10,680",
      "10,851",
      "11,698",
      "9,150",
      "10,953",
      "10,658",
      "8,287",
      "10,027",
      "10,194",
      "9,861",
      "3,966",
      "13,103",
      "14,352",
    ],
    [
      "Income from Continuous Operations",
      "10,680",
      "10,851",
      "11,698",
      "9,150",
      "10,953",
      "10,658",
      "8,287",
      "10,027",
      "10,194",
      "9,861",
      "3,966",
      "13,103",
      "14,352",
    ],
    [
      "Income from Discontinued Operations",
      "2,756",
      "1,995",
      "229",
      "1,754",
      "449",
      "1,127",
      "-1,143",
      "577",
      "5,217",
      "0",
      "0",
      "0",
      "0",
    ],
    [
      "Net Income",
      "13,436",
      "12,517",
      "11,564",
      "10,500",
      "11,068",
      "11,390",
      "6,777",
      "10,253",
      "15,079",
      "9,485",
      "3,634",
      "12,764",
      "14,035",
    ],
    [
      "EBITDA",
      "18,456",
      "18,840",
      "18,333",
      "16,239",
      "16,799",
      "17,051",
      "14,183",
      "16,519",
      "16,586",
      "16,197",
      "8,311",
      "18,719",
      "20,721",
    ],
    [
      "EBIT",
      "15,374",
      "15,732",
      "15,495",
      "13,035",
      "13,817",
      "13,910",
      "11,049",
      "13,441",
      "13,766",
      "13,363",
      "5,487",
      "15,706",
      "17,986",
    ],
    [
      "Shares Outstanding (mill)",
      "3,154",
      "3,099",
      "3,002",
      "2,941",
      "2,932",
      "2,905",
      "2,884",
      "2,844",
      "2,740",
      "2,657",
      "2,540",
      "2,626",
      "2,601",
    ],
    [
      "EPS (USD per share)",
      "4.26",
      "4.11",
      "3.93",
      "3.66",
      "3.86",
      "4.01",
      "2.44",
      "3.69",
      "5.59",
      "3.67",
      "1.43",
      "4.96",
      "5.50",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "Revenue Growth, year on year",
      "",
      "1.1%",
      "4.6%",
      "1.1%",
      "-2.3%",
      "-7.1%",
      "-4.9%",
      "-7.7%",
      "-0.4%",
      "2.7%",
      "1.3%",
      "4.8%",
      "7.3%",
    ],
    [
      "Net Income Growth, year on year",
      "",
      "-6.8%",
      "-7.6%",
      "-9.2%",
      "5.4%",
      "2.9%",
      "-40.5%",
      "51.3%",
      "47.1%",
      "-37.1%",
      "-61.7%",
      "251.2%",
      "10.0%",
    ],
  ],
  balance: [
    [
      "",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    [
      "Cash",
      "4,781",
      "2,879",
      "2,768",
      "4,436",
      "5,957",
      "10,686",
      "11,603",
      "13,348",
      "15,137",
      "11,850",
      "10,287",
      "16,181",
      "10,288",
    ],
    [
      "Receivables",
      "5,836",
      "5,335",
      "6,275",
      "6,068",
      "6,508",
      "6,386",
      "4,568",
      "4,373",
      "4,594",
      "4,686",
      "4,951",
      "4,178",
      "4,725",
    ],
    [
      "Inventory",
      "6,880",
      "6,384",
      "7,379",
      "6,721",
      "6,909",
      "6,759",
      "4,979",
      "4,716",
      "4,624",
      "4,738",
      "5,017",
      "5,498",
      "5,983",
    ],
    [
      "Pre-Paid Expenses",
      "3,199",
      "3,194",
      "4,408",
      "3,684",
      "3,678",
      "3,845",
      "2,708",
      "2,653",
      "2,139",
      "2,046",
      "2,218",
      "2,130",
      "2,095",
    ],
    [
      "Other Current Assets",
      "0",
      "0",
      "0",
      "0",
      "0",
      "2,849",
      "4,432",
      "7,185",
      "0",
      "0",
      "0",
      "0",
      "0",
    ],
    [
      "Total Current Assets",
      "21,905",
      "18,782",
      "21,970",
      "21,910",
      "23,990",
      "31,617",
      "29,646",
      "33,782",
      "26,494",
      "23,320",
      "22,473",
      "27,987",
      "23,091",
    ],
    [
      "Property, Plant, and Equipment",
      "19,462",
      "19,244",
      "21,293",
      "20,377",
      "21,666",
      "22,304",
      "19,655",
      "19,385",
      "19,893",
      "20,6000",
      "21,271",
      "20,692",
      "21,686",
    ],
    [
      "Goodwill, Intangible Assets",
      "89,118",
      "85,648",
      "90,182",
      "84,761",
      "86,760",
      "84,547",
      "69,632",
      "68,877",
      "68,886",
      "69,077",
      "64,488",
      "63,693",
      "64,566",
    ],
    [
      "Other Long-Term Assets",
      "4,348",
      "4,498",
      "4,909",
      "5,196",
      "6,847",
      "5,798",
      "5,358",
      "5,092",
      "5,133",
      "5,313",
      "6,863",
      "8,328",
      "9,964",
    ],
    [
      "Total Long-Term Assets",
      "112,928",
      "109,390",
      "116,384",
      "110,334",
      "115,273",
      "112,649",
      "99,849",
      "93,354",
      "93,912",
      "94,990",
      "92,622",
      "92,713",
      "96,216",
    ],
    [
      "TOTAL ASSETS",
      "134,833",
      "128,172",
      "138,354",
      "132,244",
      "139,263",
      "144,266",
      "129,495",
      "127,136",
      "120,406",
      "118,310",
      "115,095",
      "120,700",
      "119,307",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "Total Current Liabilities",
      "30,901",
      "24,282",
      "27,293",
      "24,907",
      "30,037",
      "33,726",
      "29,790",
      "30,770",
      "30,210",
      "28,237",
      "30,011",
      "32,976",
      "33,132",
    ],
    [
      "Long-Term Debt",
      "20,652",
      "21,360",
      "22,033",
      "21,080",
      "19,111",
      "19,811",
      "18,327",
      "18,945",
      "18,038",
      "20,863",
      "20,395",
      "23,537",
      "23,099",
    ],
    [
      "Other Non-Current Liabilities",
      "9,146",
      "10,189",
      "9,957",
      "12,090",
      "10,579",
      "10,535",
      "8,432",
      "10,325",
      "8,254",
      "10,164",
      "10,211",
      "11,110",
      "10,299",
    ],
    [
      "Total Long-Term Liabilities",
      "40,550",
      "42,451",
      "43,060",
      "43,302",
      "40,517",
      "40,564",
      "36,655",
      "38,383",
      "34,418",
      "37,190",
      "37,505",
      "40,846",
      "39,521",
    ],
    [
      "Total Liabilities",
      "71,451",
      "66,733",
      "70,353",
      "68,209",
      "70,554",
      "74,290",
      "66,445",
      "69,153",
      "64,628",
      "65,427",
      "67,516",
      "73,822",
      "72,653",
    ],
    [
      "Shareholder Equity",
      "63,382",
      "61,439",
      "69,001",
      "64,035",
      "68,709",
      "69,976",
      "63,050",
      "57,983",
      "55,778",
      "52,883",
      "47,579",
      "46,878",
      "46,654",
    ],
    [
      "TOTAL LIABILITIES AND\nSHAREHOLDER EQUITY",
      "134,833",
      "128172",
      "138,354",
      "132,244",
      "139,263",
      "144,266",
      "129,495",
      "127,136",
      "120,406",
      "118,310",
      "115,095",
      "120,700",
      "119,307",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "Return on Sales",
      "17.5%",
      "16.1%",
      "14.3%",
      "12.8%",
      "13.8%",
      "15.3%",
      "9.6%",
      "15.7%",
      "23.2%",
      "14.2%",
      "5.4%",
      "18.0%",
      "18.4%",
    ],
    [
      "Return on Assets",
      "10.0%",
      "9.8%",
      "8.4%",
      "7.9%",
      "7.9%",
      "7.9%",
      "5.2%",
      "8.1%",
      "12.5%",
      "8.0%",
      "3.2%",
      "10.6%",
      "11.8%",
    ],
    [
      "Return on Equity",
      "21.2%",
      "20.4%",
      "16.8%",
      "16.4%",
      "16.1%",
      "16.3%",
      "10.7%",
      "17.7%",
      "27.0%",
      "17.9%",
      "7.6%",
      "27.2%",
      "30.1%",
    ],
  ],
  geography: [
    [
      "",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    [
      "North America",
      "44",
      "42",
      "41",
      "39",
      "39",
      "39",
      "40",
      "44",
      "45",
      "44",
      "45",
      "47",
      "47",
    ],
    [
      "Europe",
      "",
      "",
      "",
      "",
      "",
      "28",
      "26",
      "23",
      "23",
      "24",
      "23",
      "22",
      "22",
    ],
    [
      "Greater China",
      "",
      "",
      "",
      "",
      "",
      "",
      "8",
      "8",
      "8",
      "9",
      "9",
      "9",
      "10",
    ],
    [
      "Asia-Pacific",
      "",
      "",
      "",
      "",
      "",
      "",
      "8",
      "9",
      "9",
      "9",
      "10",
      "10",
      "9",
    ],
    [
      "Latin America",
      "",
      "9",
      "9",
      "10",
      "10",
      "10",
      "10",
      "8",
      "8",
      "7",
      "6",
      "6",
      "6",
    ],
    [
      "India, Middle East, Africa",
      "",
      "",
      "",
      "",
      "",
      "7",
      "8",
      "8",
      "7",
      "7",
      "7",
      "6",
      "6",
    ],
    ["Asia", "", "15", "16", "18", "18", "16", "", "", "", "", "", "", ""],
    [
      "Western Europe",
      "22",
      "21",
      "20",
      "19",
      "18",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "Central & Eastern Europe, Middle East, Africa",
      "",
      "13",
      "14",
      "14",
      "15",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    ["Northeast Asia", "4", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "Developing Markets",
      "30",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "TOTAL",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
    ],
    [
      "Developed Economies",
      "",
      "66",
      "65",
      "62",
      "61",
      "61",
      "62",
      "65",
      "65",
      "65",
      "",
      "",
      "",
    ],
    [
      "Developing Economies",
      "",
      "34",
      "35",
      "38",
      "39",
      "39",
      "38",
      "35",
      "35",
      "35",
      "",
      "",
      "",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "Estimated Greater China Sales USD million",
      "",
      "",
      "",
      "",
      "",
      "",
      "5,660",
      "5,224",
      "5,205",
      "6,015",
      "6,092",
      "6,386",
      "7,612",
    ],
    [
      "Estimated Change in Greater China Sales",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "-7.7%",
      "-0.4%",
      "15.6%",
      "1.3%",
      "4.8%",
      "19.2%",
    ],
  ],
  mix: [
    [
      "",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    [
      "Fabric and Home Care",
      "30",
      "30",
      "30",
      "32",
      "32",
      "32",
      "29",
      "32",
      "32",
      "32",
      "33",
      "33",
      "34",
    ],
    [
      "Baby, Feminine, Family Care",
      "",
      "",
      "",
      "",
      "20",
      "25",
      "27",
      "28",
      "28",
      "27",
      "27",
      "26",
      "25",
    ],
    [
      "Beauty",
      "24",
      "24",
      "24",
      "24",
      "24",
      "24",
      "24",
      "18",
      "18",
      "19",
      "19",
      "19",
      "19",
    ],
    [
      "Health Care",
      "14",
      "14",
      "14",
      "15",
      "15",
      "9",
      "10",
      "11",
      "12",
      "12",
      "12",
      "13",
      "13",
    ],
    [
      "Grooming",
      "9",
      "10",
      "9",
      "10",
      "9",
      "10",
      "10",
      "11",
      "10",
      "10",
      "9",
      "9",
      "9",
    ],
    [
      "Baby, Family Care",
      "18",
      "18",
      "19",
      "19",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    ["Snacks, Pet Care", "4", "4", "4", "", "", "", "", "", "", "", "", "", ""],
    [
      "TOTAL",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
      "100",
    ],
  ],
  results: [
    [
      "Reportable\nSegment",
      "% of Net\nSales",
      "% of Net\nEarnings",
      "Product Categories (Sub-Categories)",
      "Major Brands",
    ],
    [
      "Beauty",
      "19%",
      "22%",
      "Hair Care (Conditioner, Shampoo, Styling Aids, Treatments)",
      "Head & Shoulders, Herbal Essences, Pantene, Rejoice",
    ],
    [
      "",
      "",
      "",
      "Skin and Personal Care ( Antiperspirant and Deodorant, Personal Cleansing, Skin Care )",
      "Olay, Old Spice, Safeguard, Secret, SK-II",
    ],
    [
      "Grooming",
      "9%",
      "10%",
      "Grooming2 (Shave Care - Female Blades & Razors, Male Blades & Razors, Pre- and Post-Shave Products,\nOther Shave Care; Appliances)",
      "Braun, Gillette, Venus",
    ],
    [
      "Health Care",
      "13%",
      "12%",
      "Oral Care (Toothbrushes, Toothpaste, Other Oral Care)",
      "Crest, Oral-B",
    ],
    [
      "",
      "",
      "",
      "Personal Health Care ( Gastrointestinal, Rapid Diagnostics, Respiratory, Vitamins/Minerals/Supplements, Pain\nRelief, Other Personal Health Care )",
      "Metamucil, Neurobion, Pepto Bismol, Vicks",
    ],
    [
      "Fabric &\nHome Care",
      "34%",
      "31%",
      "Fabric Care (Fabric Enhancers, Laundry Additives, Laundry Detergents)",
      "Ariel, Downy, Gain, Tide",
    ],
    [
      "",
      "",
      "",
      "Home Care (Air Care, Dish Care, P&G Professional, Surface Care)",
      "Cascade, Dawn, Fairy, Febreze, Mr. Clean, Swiffer",
    ],
    [
      "Baby,\nFeminine &\nFamily Care",
      "25%",
      "25%",
      "Baby Care (Baby Wipes, Taped Diapers and Pants)",
      "Luvs, Pampers",
    ],
    [
      "",
      "",
      "",
      "Feminine Care (Adult Incontinence, Feminine Care)",
      "Always, Always Discreet, Tampax",
    ],
    [
      "",
      "",
      "",
      "Family Care (Paper Towels, Tissues, Toilet Paper)",
      "Bounty, Charmin, Puffs",
    ],
  ],
  urbanRural: [
    [
      "",
      "Population (Million)",
      "",
      "Per Capita\nDisposable Income\n(RMB)",
      "",
      "Per Capita\nConsumption\nExpenditure (RMB)",
      "",
    ],
    ["", "Urban", "Rural", "Urban", "Rural", "Urban", "Rural"],
    ["1990", "301.95", "841.38", "1,510", "686", "1,279", "584"],
    ["2000", "459.06", "808.37", "6,280", "2,253", "4,998", "1,670"],
    ["2010", "669.78", "671.13", "19,109", "5,919", "13,471", "4,382"],
    ["2011", "699.27", "649.89", "21,810", "6,977", "15,161", "5,221"],
    ["2012", "721.75", "637.47", "24,565", "7,917", "16,674", "5,908"],
    ["2013", "745.02", "622.24", "26,467", "9,430", "18,488", "7,485"],
    ["2014", "767.38", "609.08", "28,844", "10,489", "19,968", "8,383"],
    ["2015", "793.02", "590.24", "31,195", "11,422", "21,392", "9,226"],
    ["2016", "819.24", "573.08", "33,616", "12,363", "23,079", "10,130"],
    ["2017", "843.43", "556.68", "36,396", "13,432", "24,445", "10,955"],
    ["2018", "864.33", "541.08", "39,251", "14,617", "26,112", "12,124"],
    ["2019", "884.26", "525.82", "42,359", "16,021", "28,063", "13,328"],
    ["2020", "902.20", "509.92", "43,834", "17,131", "27,007", "13,713"],
    ["2021", "914.25", "498.35", "47,412", "18,931", "30,307", "15,916"],
  ],
  beautyMarket: [
    ["", "Personal\nCare", "Cosmetics", "Skin Care", "Fragrances", "Total"],
    ["2015", "19,404", "9,440", "11,133", "956", "40,933"],
    ["2016", "20,267", "10,183", "11,824", "1,002", "43,276"],
    ["2017", "21,193", "11,012", "12,573", "1,048", "45,826"],
    ["2018", "22,220", "11,950", "13,402", "1,102", "48,674"],
    ["2019", "22,805", "13,148", "14,181", "1,136", "51,270"],
    ["2020", "23,335", "13,003", "14,307", "1,159", "51,804"],
    ["2021F", "24,603", "14,753", "15,576", "1,227", "56,159"],
    ["2022F", "26,625", "16,585", "17,123", "1,324", "61,657"],
    ["2023F", "28,846", "18,678", "18,838", "1,431", "67,793"],
    ["2024F", "30,554", "20,576", "20,256", "1,511", "72,897"],
    ["2025F", "32,418", "22,717", "21,809", "1,598", "78,542"],
  ],
  premium: [
    ["Product", "%"],
    ["Clothing & shoes", "61"],
    ["Consumer electronics", "54"],
    ["Shoes", "48"],
    ["Smartphone", "47"],
    ["Clothing", "47"],
    ["Bags & accessories", "38"],
    ["Bags & luggage", "32"],
    ["PC / laptop", "31"],
    ["Accessories", "30"],
    ["Cosmetics & body care", "29"],
    ["Household appliances", "21"],
    ["Cars, motorcycles, bicycles", "19"],
    ["TV & hi-fi", "16"],
    ["Sports & outdoor products", "16"],
    ["Furniture & household goods", "14"],
    [
      "Alcoholic drinks (only shown to respondents of legal drinking age)",
      "13",
    ],
    ["Food & nonalcoholic drinks", "10"],
    ["Stationery & hobby supplies", "9"],
    ["Toys & baby products", "9"],
    ["Detergents & cleaning products", "7"],
    ["DIY & garden products", "4"],
    ["Pet products", "3"],
    ["None of the above", "7"],
  ],
  channels: [
    [
      "Channels",
      "Market Share by Channel",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Sales Growth CAGR\nby Channel",
      "",
      "",
    ],
    [
      "",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016 a",
      "2016 b",
      "2017",
      "2018",
      "2019",
      "2020",
      "Q1–Q3\n2021",
      "2012–\n2016",
      "2016–\n2020",
      "Q1-Q3 2019–\nQ1-Q3 2021",
    ],
    [
      "Supermarkets/\nminimarkets",
      "36.6%",
      "38.3%",
      "39.7%",
      "39.9%",
      "39.5%",
      "37.3%",
      "36.2%",
      "35.1%",
      "33.9%",
      "32.2%",
      "31.5%",
      "7%",
      "0%",
      "-3%",
    ],
    [
      "Hypermarkets",
      "24.1%",
      "23.6%",
      "22.9%",
      "22.0%",
      "20.9%",
      "21.9%",
      "21.4%",
      "20.1%",
      "18.5%",
      "16.4%",
      "15.7%",
      "1%",
      "-3%",
      "-7%",
    ],
    [
      "Grocery",
      "10.0%",
      "9.4%",
      "9.0%",
      "7.8%",
      "6.6%",
      "6.0%",
      "5.6%",
      "5.5%",
      "4.7%",
      "4.1%",
      "3.8%",
      "-5%",
      "-7%",
      "-13%",
    ],
    [
      "Convenience/\nSpecialty Stores",
      "3.7%",
      "3.7%",
      "3.9%",
      "4.2%",
      "4.4%",
      "7.5%",
      "7.5%",
      "7.5%",
      "7.2%",
      "6.9%",
      "6.8%",
      "10%",
      "1.5%",
      "-1.5%",
    ],
    [
      "E-commerce",
      "2.1%",
      "2.8%",
      "3.5%",
      "4.7%",
      "7.0%",
      "11.1%",
      "13.8%",
      "17.1%",
      "21.9%",
      "28.4%",
      "30.2%",
      "41%",
      "32%",
      "24%",
    ],
    [
      "Other",
      "23.5%",
      "22.1%",
      "21.0%",
      "21.3%",
      "21.3%",
      "16.2%",
      "15.5%",
      "14.7%",
      "13.8%",
      "12.1%",
      "12.0%",
      "2%",
      "-3%",
      "-6%",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "TOTAL VALUE\nRMB Billion",
      "1,075",
      "1,152",
      "1,213",
      "1,256",
      "1,294",
      "1,188",
      "1,244",
      "1,309",
      "1,381",
      "1,387",
      "989",
      "5%",
      "5%",
      "1.7%",
    ],
    [
      "TOTAL VALUE\nUSD Billion",
      "170",
      "187",
      "197",
      "200",
      "195",
      "179",
      "184",
      "198",
      "200",
      "201",
      "170",
      "",
      "",
      "",
    ],
  ],
  penetration: [
    [
      "Company",
      "Buyers Million Urban Households",
      "",
      "",
      "",
      "Penetration %",
      "",
    ],
    ["", "2018", "2019", "2020", "2021", "2019", "2021"],
    ["Yili", "160", "164", "169", "174", "91.7", "92.5"],
    ["P&G", "162", "166", "168", "172", "92.5", "91.4"],
    ["Megiu Group", "157", "162", "167", "171", "90.1", "91.0"],
    ["Master Kong", "142", "146", "155", "157", "81.3", "83.4"],
    ["Coca-Cola", "132", "137", "144", "150", "76.5", "79.8"],
    ["Unilever", "138", "141", "144", "150", "78.6", "79.6"],
    ["Haday", "129", "136", "146", "149", "75.7", "79.2"],
    ["Heng An", "134", "137", "141", "144", "76.3", "76.3"],
    ["Nestlé", "140", "141", "143", "141", "78.9", "75.0"],
    ["Pepsico", "118", "121", "130", "136", "67.7", "72.4"],
    ["Nongfu Spring", "120", "129", "131", "136", "71.8", "72.2"],
    ["Nice Group", "124", "124", "127", "132", "69.3", "70.0"],
    ["Liby", "130", "130", "130", "131", "72.7", "69.8"],
    ["Want", "116", "117", "119", "124", "65.4", "66.0"],
    ["Dali Foods", "111", "114", "118", "122", "63.6", "64.9"],
    ["Mondelez Int", "120", "122", "124", "122", "68.2", "64.9"],
    ["Wilmar", "106", "110", "116", "120", "61.2", "63.9"],
    ["Mars", "122", "123", "121", "119", "68.8", "63.4"],
    ["Shuanghui", "106", "109", "119", "117", "60.7", "62.3"],
    ["Colgate-Palmolive", "117", "115", "110", "112", "63.9", "59.2"],
    ["Uni-president", "101", "103", "109", "111", "57.5", "58.8"],
    ["China Resources", "102", "105", "107", "111", "58.6", "58.8"],
    ["Vinda", "", "", "97", "107", "", "56.8"],
  ],
  brands: [
    ["Ace", "bleach"],
    ["Always", "feminine hygiene"],
    ["Ariel", "detergent and fabric care"],
    ["Bounty", "paper towels"],
    ["Braun", "electric shavers"],
    ["Charmin", "toilet paper"],
    ["Crest", "toothpaste"],
    ["Dawn", "dishwashing liquid"],
    ["Downy", "fabric care"],
    ["Duracell", "batteries"],
    ["Febreze", "odor eliminator"],
    ["Fusion", "razors"],
    ["Gain", "detergent and fabric care"],
    ["Gillette", "razors"],
    ["Head & Shoulders", "shampoo"],
    ["Iams", "pet food"],
    ["Olay", "skin care"],
    ["Oral-B", "tooth care"],
    ["Pampers", "diapers and baby products"],
    ["Pantene", "hair care"],
    ["Pringles", "potato chips"],
    ["SK-II", "skin care"],
    ["Tide", "detergent and fabric care"],
    ["Vicks", "cold and flu treatments"],
    ["Wella", "hair care"],
  ],
  meta: [
    {
      id: "e1",
      title: "Exhibit 1. Consolidated income statements, worldwide",
      type: "table",
    },
    {
      id: "e2",
      title: "Exhibit 2. Consolidated balance sheets, worldwide",
      type: "table",
    },
    { id: "e3", title: "Exhibit 3. Sales by geography", type: "table" },
    {
      id: "e4",
      title: "Exhibit 4. Global sales by product category",
      type: "table",
    },
    {
      id: "e5",
      title: "Exhibit 5. Global results by product category, 2021",
      type: "table",
    },
    {
      id: "e6",
      title: "Exhibit 6. Global billion-dollar brands, 2021",
      type: "table",
    },
    { id: "e7", title: "Exhibit 7. China population", type: "recreated" },
    {
      id: "e8",
      title: "Exhibit 8. China GDP and GDP per capita, current USD",
      type: "figure",
    },
    {
      id: "e9",
      title: "Exhibit 9. China real GDP growth and RMB-USD exchange rate",
      type: "figure",
    },
    {
      id: "e10",
      title: "Exhibit 10. China urban and rural comparisons",
      type: "table",
    },
    {
      id: "e11",
      title: "Exhibit 11. China personal care and beauty market",
      type: "table",
    },
    {
      id: "e12",
      title: "Exhibit 12. Importance of premium products by category",
      type: "table",
    },
    {
      id: "e13",
      title: "Exhibit 13. China urban FMCG sales by channel",
      type: "table",
    },
    {
      id: "e14",
      title: "Exhibit 14. Penetration of leading FMCG brands in China",
      type: "table",
    },
  ],
};
const EXHIBITS_2012 = {
  earnings: [
    [
      "Amounts in millions of US$ except per share amounts; Years ended June 30",
      "2010",
      "2009",
      "2008",
    ],
    ["", "", "", ""],
    ["NET SALES", "$78,938", "$76,694", "$79,257"],
    ["Cost of products sold", "37,919", "38,690", "39,261"],
    [
      "Selling, general and administrative expense",
      "24,998",
      "22,630",
      "24,017",
    ],
    ["OPERATING INCOME", "16,021", "15,374", "15,979"],
    ["Interest expense", "946", "1,358", "1,467"],
    ["Other non-operating income/(expense), net", "(28)", "397", "373"],
    [
      "EARNINGS FROM CONTINUING OPERATIONS BEFORE INCOME TAXES",
      "15,047",
      "14,413",
      "14,885",
    ],
    ["Income taxes on continuing operations", "4,101", "3,733", "3,594"],
    ["NET EARNINGS FROM CONTINUING OPERATIONS", "10,946", "10,680", "11,291"],
    ["NET EARNINGS FROM DISCONTINUED OPERATIONS", "1,790", "2,756", "784"],
    ["NET EARNINGS", "$12,736", "$13,436", "$12,075"],
    ["BASIC NET EARNINGS PER COMMON SHARE:", "", "", ""],
    ["Earnings from continuing operations", "$ 3.70", "$ 3.55", "$ 3.61"],
    ["Earnings from discontinued operations", "0.62", "0.94", "0.25"],
    ["BASIC NET EARNINGS PER COMMON SHARE", "4.32", "4.49", "3.86"],
    ["DILUTED NET EARNINGS PER COMMON SHARE:", "", "", ""],
    ["Earnings from continuing operations", "3.53", "3.39", "3.40"],
    ["Earnings from discontinued operations", "0.58", "0.87", "0.24"],
    ["DILUTED NET EARNINGS PER COMMON SHARE", "4.11", "4.26", "3.64"],
    ["DIVIDENDS PER COMMON SHARE", "$ 1.80", "$ 1.64", "$ 1.45"],
  ],
  balance1: [
    ["Assets", "2010", "2009"],
    ["CURRENT ASSETS", "CURRENT ASSETS", "CURRENT ASSETS"],
    ["Cash and cash equivalents", "$ 2,879", "$ 4,781"],
    ["Accounts receivable", "5,335", "5,836"],
    ["INVENTORIES", "", ""],
    ["Materials and supplies", "1,692", "1,557"],
    ["Work in process", "604", "672"],
    ["Finished goods", "4,088", "4,651"],
    ["Total inventories", "6,384", "6,880"],
    ["Deferred income taxes", "990", "1,209"],
    ["Prepaid expenses and other current assets", "3,194", "3,199"],
    ["TOTAL CURRENT ASSETS", "18,782", "21,905"],
    [
      "PROPERTY, PLANT AND EQUIPMENT",
      "PROPERTY, PLANT AND EQUIPMENT",
      "PROPERTY, PLANT AND EQUIPMENT",
    ],
    ["Buildings", "6,868", "6,724"],
    ["Machinery and equipment", "29,294", "29,042"],
    ["Land", "850", "885"],
    ["Total property, plant and equipment", "37,012", "36,651"],
    ["Accumulated depreciation", "(17,768)", "(17,189)"],
    ["NET PROPERTY, PLANT AND EQUIPMENT", "19,244", "19,462"],
    [
      "GOODWILL AND OTHER INTANGIBLE ASSETS",
      "GOODWILL AND OTHER INTANGIBLE ASSETS",
      "GOODWILL AND OTHER INTANGIBLE ASSETS",
    ],
    ["Goodwill", "54,012", "56,512"],
    ["Trademarks and other intangible assets, net", "31,636", "32,606"],
    ["NET GOODWILL AND OTHER INTANGIBLE ASSETS", "85,648", "89,118"],
    ["OTHER NONCURRENT ASSETS", "4,498", "4,348"],
    ["TOTAL ASSETS", "$ 128,172", "$ 134,833"],
  ],
  balance2: [
    ["Liabilities and Shareholders’ Equity", "2010", "2009"],
    ["CURRENT LIABILITIES", "CURRENT LIABILITIES", "CURRENT LIABILITIES"],
    ["Accounts payable", "$ 7,251", "$ 5,980"],
    ["Accrued and other liabilities", "8,559", "8,601"],
    ["Debt due within one year", "8,472", "16,320"],
    ["TOTAL CURRENT LIABILITIES", "24,282", "30,901"],
    ["LONG-TERM DEBT", "21,360", "20,652"],
    ["DEFERRED INCOME TAXES", "10,902", "10,752"],
    ["OTHER NONCURRENT LIABILITIES", "10,189", "9,146"],
    ["TOTAL LIABILITIES", "66,733", "71,451"],
    ["SHAREHOLDERS’ EQUITY", "SHAREHOLDERS’ EQUITY", "SHAREHOLDERS’ EQUITY"],
    [
      "Convertible Class A preferred stock, stated value $1 per share (600 shares authorized)",
      "1,277",
      "1,324",
    ],
    [
      "Non-Voting Class B preferred stock, stated value $1 per share (200 shares authorized)",
      "—",
      "—",
    ],
    [
      "Common stock, stated value $1 per share (10,000 shares authorized; shares issued: 2010—4,007.6, 2009—4,007.3)",
      "4,008",
      "4,007",
    ],
    ["Additional paid-in capital", "61,697", "61,118"],
    ["Reserve for ESOP debt retirement", "(1,350)", "(1,340)"],
    ["Accumulated other comprehensive income (loss)", "(7,822)", "(3,358)"],
    [
      "Treasury stock, at cost (shares held: 2010—1,164.1, 2009—1,090.3)",
      "(61,309)",
      "(55,961)",
    ],
    ["Retained earnings", "64,614", "57,309"],
    ["Noncontrolling interest", "324", "283"],
    ["TOTAL SHAREHOLDERS’ EQUITY", "61,439", "63,382"],
    ["TOTAL LIABILITIES AND SHAREHOLDERS’ EQUITY", "$ 128,172", "$ 134,833"],
  ],
  cashflow: [
    ["Amounts in millions of US$; Years ended June 30", "2010", "2009", "2008"],
    [
      "CASH AND CASH EQUIVALENTS, BEGINNING OF YEAR",
      "$ 4,781",
      "$ 3,313",
      "$ 5,354",
    ],
    [
      "OPERATING ACTIVITIES",
      "OPERATING ACTIVITIES",
      "OPERATING ACTIVITIES",
      "OPERATING ACTIVITIES",
    ],
    ["Net earnings", "12,736", "13,436", "12,075"],
    ["Depreciation and amortization", "3,108", "3,082", "3,166"],
    ["Share-based compensation expense", "453", "516", "555"],
    ["Deferred income taxes", "36", "596", "1,214"],
    ["Gain on sale of businesses", "(2,670)", "(2,377)", "(284)"],
    ["Change in accounts receivable", "(14)", "415", "432"],
    ["Change in inventories", "86", "721", "(1,050)"],
    [
      "Change in accounts payable, accrued and other liabilities",
      "2,446",
      "(742)",
      "297",
    ],
    [
      "Change in other operating assets and liabilities",
      "(305)",
      "(758)",
      "(1,270)",
    ],
    ["Other", "196", "30", "(127)"],
    ["TOTAL OPERATING ACTIVITIES", "16,072", "14,919", "15,008"],
    [
      "INVESTING ACTIVITIES",
      "INVESTING ACTIVITIES",
      "INVESTING ACTIVITIES",
      "INVESTING ACTIVITIES",
    ],
    ["Capital expenditures", "(3,067)", "(3,238)", "(3,046)"],
    ["Proceeds from asset sales", "3,068", "1,087", "928"],
    ["Acquisitions, net of cash acquired", "(425)", "(368)", "(381)"],
    ["Change in investments", "(173)", "166", "(50)"],
    ["TOTAL INVESTING ACTIVITIES", "(597)", "(2,353)", "(2,549)"],
    [
      "FINANCING ACTIVITIES",
      "FINANCING ACTIVITIES",
      "FINANCING ACTIVITIES",
      "FINANCING ACTIVITIES",
    ],
    ["Dividends to shareholders", "(5,458)", "(5,044)", "(4,655)"],
    ["Change in short-term debt", "(1,798)", "(2,420)", "2,650"],
    ["Additions to long-term debt", "3,830", "4,926", "7,088"],
    ["Reductions of long-term debt", "(8,546)", "(2,587)", "(11,747)"],
    ["Treasury stock purchases", "(6,004)", "(6,370)", "(10,047)"],
    ["Impact of stock options and other", "721", "681", "1,867"],
    ["TOTAL FINANCING ACTIVITIES", "(17,255)", "(10,814)", "(14,844)"],
    [
      "EFFECT OF EXCHANGE RATE CHANGES ON CASH AND CASH EQUIVALENTS",
      "(122)",
      "(284)",
      "344",
    ],
    ["CHANGE IN CASH AND CASH EQUIVALENTS", "(1,902)", "1,468", "(2,041)"],
    ["CASH AND CASH EQUIVALENTS, END OF YEAR", "$ 2,879", "$ 4,781", "$ 3,313"],
    [
      "SUPPLEMENTAL DISCLOSURE",
      "SUPPLEMENTAL DISCLOSURE",
      "SUPPLEMENTAL DISCLOSURE",
      "SUPPLEMENTAL DISCLOSURE",
    ],
    ["Cash payments for:", "", "", ""],
    ["Interest", "$ 1,184", "$ 1,226", "$ 1,373"],
    ["Income Taxes", "4,175", "3,248", "3,499"],
    ["Assets acquired through non-cash capital leases", "20", "8", "13"],
    [
      "Divestiture of coffee business in exchange for shares of P&G stock",
      "—",
      "2,466",
      "—",
    ],
  ],
  segments: [
    [
      "Global Segment Results",
      "",
      "Net Sales",
      "Earnings from Continuing Operations Before Income Taxes",
      "Net Earnings from Continuing Operations",
      "Depre- ciation and Amor- tization",
      "Total Assets(2)",
      "Capital Expend- itures",
    ],
    [
      "BEAUTY AND GROOMING GBU",
      "BEAUTY AND GROOMING GBU",
      "BEAUTY AND GROOMING GBU",
      "BEAUTY AND GROOMING GBU",
      "BEAUTY AND GROOMING GBU",
      "BEAUTY AND GROOMING GBU",
      "BEAUTY AND GROOMING GBU",
      "BEAUTY AND GROOMING GBU",
    ],
    [
      "BEAUTY",
      "2010",
      "$ 19,491",
      "$ 3,648",
      "$ 2,712",
      "$ 503",
      "$ 11,825",
      "$ 534",
    ],
    ["", "2009", "18,924", "3,558", "2,664", "454", "11,987", "526"],
    ["", "2008", "19,666", "3,673", "2,827", "450", "12,760", "462"],
    ["GROOMING", "2010", "7,631", "2,007", "1,477", "625", "21,259", "259"],
    ["", "2009", "7,408", "1,900", "1,359", "721", "22,205", "294"],
    ["", "2008", "8,103", "2,154", "1,582", "743", "23,302", "308"],
    [
      "HEALTH AND WELL-BEING GBU",
      "HEALTH AND WELL-BEING GBU",
      "HEALTH AND WELL-BEING GBU",
      "HEALTH AND WELL-BEING GBU",
      "HEALTH AND WELL-BEING GBU",
      "HEALTH AND WELL-BEING GBU",
      "HEALTH AND WELL-BEING GBU",
      "HEALTH AND WELL-BEING GBU",
    ],
    ["HEALTH CARE", "2010", "11,493", "2,809", "1,860", "385", "7,142", "383"],
    ["", "2009", "11,288", "2,786", "1,835", "369", "7,206", "372"],
    ["", "2008", "12,087", "3,030", "2,021", "372", "8,088", "420"],
    ["SNACKS AND PET CARE", "2010", "3,135", "499", "326", "92", "1,237", "86"],
    ["", "2009", "3,114", "388", "234", "100", "1,123", "72"],
    ["", "2008", "3,204", "409", "261", "102", "1,303", "78"],
    [
      "HOUSEHOLD CARE GBU",
      "HOUSEHOLD CARE GBU",
      "HOUSEHOLD CARE GBU",
      "HOUSEHOLD CARE GBU",
      "HOUSEHOLD CARE GBU",
      "HOUSEHOLD CARE GBU",
      "HOUSEHOLD CARE GBU",
      "HOUSEHOLD CARE GBU",
    ],
    [
      "FABRIC CARE AND HOME CARE",
      "2010",
      "23,805",
      "5,076",
      "3,339",
      "604",
      "9,650",
      "766",
    ],
    ["", "2009", "23,186", "4,663", "3,032", "578", "10,419", "808"],
    ["", "2008", "23,714", "5,060", "3,411", "599", "11,387", "763"],
    [
      "BABY CARE AND FAMILY CARE",
      "2010",
      "14,736",
      "3,270",
      "2,049",
      "612",
      "6,406",
      "852",
    ],
    ["", "2009", "14,103", "2,827", "1,770", "570", "6,259", "902"],
    ["", "2008", "13,898", "2,700", "1,728", "612", "6,821", "763"],
    [
      "CORPORATE (1)",
      "2010",
      "(1,353)",
      "(2,262)",
      "(817)",
      "287",
      "70,653",
      "187",
    ],
    ["", "2009", "(1,329)", "(1,709)", "(214)", "224", "75,634", "264"],
    ["", "2008", "(1,415)", "(2,141)", "(539)", "181", "80,331", "252"],
    [
      "TOTAL COMPANY",
      "2010",
      "78,938",
      "15,047",
      "10,946",
      "3,108",
      "128,172",
      "3,067",
    ],
    ["", "2009", "76,694", "14,413", "10,680", "3,016", "134,833", "3,238"],
    ["", "2008", "79,257", "14,885", "11,291", "3,059", "143,992", "3,04"],
  ],
  brands: [
    [
      "GBU",
      "Reportable Segment",
      "%of\nNet Sales*",
      "% of Net Earnings*",
      "Categories",
      "Billion Dollar Brands",
    ],
    [
      "BEAUTY AND GROOMING",
      "Beauty",
      "24%",
      "23%",
      "Cosmetics, Female Antiperspirant and Deodorant, Female Personal Cleansing, Female Shave Care, Hair Care, Hair Color, Hair Styling, Pharmacy Channel, Prestige Products, Salon Professional, Skin Care",
      "Head & Shoulders, Olay, Pantene, Wella",
    ],
    [
      "BEAUTY AND GROOMING",
      "Grooming",
      "10%",
      "13%",
      "Beauty Electronics, Home Small \nAppliances, Male Blades and Razors, \nMale Personal Care",
      "Braun, Fusion, Gillette, Mach3",
    ],
    [
      "HEALTH AND WELL-BEING",
      "Health Care",
      "14%",
      "16%",
      "Feminine Care, Gastrointestinal, Incontinence, Rapid Diagnostics, Respiratory, Toothbrush, Toothpaste, \nWater Filtration, Other Oral Care",
      "Always, Crest, Oral-B",
    ],
    [
      "HEALTH AND WELL-BEING",
      "Snacks and Pet Care",
      "4%",
      "3%",
      "Pet Care, Snacks",
      "Iams, Pringles",
    ],
    [
      "HOUSEHOLD CARE",
      "Fabric Care and Home Care",
      "30%",
      "28%",
      "Additives, Air Care, Batteries, Dish Care, Fabric Enhancers, Laundry, Surface Care",
      "Ace, Ariel, Dawn, Downy, Duracell, Gain, Tide",
    ],
    [
      "HOUSEHOLD CARE",
      "Baby Care and Family Care",
      "18%",
      "17%",
      "Baby Wipes, Diapers, Paper Towels, Tissues, Toilet Paper",
      "Bounty, Charmin, Pampers",
    ],
  ],
  geography: [
    ["Region", "Percent of Global Sales"],
    ["North America", "42%"],
    ["Western Europe", "21%"],
    ["Central and Eastern Europe, Middle East, and Africa", "13%"],
    ["Latin America", "9%"],
    ["Asia", "15%"],
    ["Total", "100%"],
    ["", ""],
    ["Market Maturity", "Percent of Global Sales"],
    ["Developed", "66%"],
    ["Developing", "34%"],
  ],
  incomeLevels: [
    [
      "Item",
      "National",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
    ],
    [
      "Item",
      "National",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
      "Grouped by Percentile of Households",
    ],
    [
      "Item",
      "National",
      "Lowest\nIncome\nHouseholds\n(first\ndecile group)",
      "Poor\nHouseholds\n(first five\npercent group)",
      "Low\nIncome\nHouseholds\n(second\ndecile group)",
      "Lower Middle\nIncome\nHouseholds\n(second\nquintile group)",
      "Middle\nIncome\nHouseholds\n(third\nquintile group)",
      "Upper Middle\nIncome\nHouseholds\n(fourth\nquintile group)",
      "High\nIncome\nHouseholds\n(ninth\ndecile group)",
      "Highest\nIncome\nHouseholds\n(tenth\ndecile group)",
    ],
    [
      "Number of Households Surveyed       (household)",
      "65506",
      "6518",
      "3248",
      "6563",
      "13132",
      "13137",
      "13122",
      "6526",
      "6508",
    ],
    [
      "Proportion (%)",
      "100.00",
      "9.95",
      "4.96",
      "10.02",
      "20.05",
      "20.05",
      "20.03",
      "9.96",
      "9.93",
    ],
    [
      "Average Household Size            (person)",
      "2.89",
      "3.29",
      "3.30",
      "3.23",
      "3.04",
      "2.84",
      "2.71",
      "2.61",
      "2.51",
    ],
    [
      "Average Number of Employed Persons per Household (person)",
      "1.49",
      "1.32",
      "1.22",
      "1.46",
      "1.53",
      "1.49",
      "1.49",
      "1.51",
      "1.55",
    ],
    [
      "Proportion of Employment per Household (%)",
      "51.56",
      "40.12",
      "36.97",
      "45.20",
      "50.33",
      "52.46",
      "54.98",
      "57.85",
      "61.75",
    ],
    [
      "Number of Dependents per Employee (including the employee himself or herself)  (person)",
      "1.94",
      "2.49",
      "2.70",
      "2.21",
      "1.99",
      "1.91",
      "1.82",
      "1.73",
      "1.62",
    ],
    [
      "Per Capita Annual Income            (yuan)",
      "18858.09",
      "5950.68",
      "4935.81",
      "8956.81",
      "12345.17",
      "16858.36",
      "23050.76",
      "31171.69",
      "51349.57",
    ],
    [
      "Per Capita Disposable Income           (yuan)",
      "17174.65",
      "5253.23",
      "4197.58",
      "8162.07",
      "11243.55",
      "15399.92",
      "21017.95",
      "28386.47",
      "46826.05",
    ],
    [
      "Per Capita Annual Consumption Expenditure (yuan)",
      "12264.55",
      "4900.56",
      "4256.81",
      "6743.09",
      "8738.79",
      "11309.73",
      "14964.37",
      "19263.88",
      "29004.41",
    ],
  ],
  consumption: [
    [
      "Item",
      "Average",
      "Lowest\nIncome\nHouseholds\n(first decile\ngroup)",
      "Poor\nHouseholds\n(first five\npercent group)",
      "Low\nIncome\nHouseholds\n(second\ndecile group)",
      "Lower Middle\nIncome\nHouseholds\n(second\nquintile group)",
      "Middle\nIncome\nHouseholds\n(third\nquintile group)",
      "Upper Middle\nIncome\nHouseholds\n(fourth\nquintile group)",
      "High\nIncome\nHouseholds\n(ninth\ndecile group)",
      "Highest\nIncome\nHouseholds\n(tenth\ndecile group)",
    ],
    [
      "Total Consumption Expenditures (yuan)",
      "12264.55",
      "4900.56",
      "4256.81",
      "6743.09",
      "8738.79",
      "11309.73",
      "14964.37",
      "19263.88",
      "29004.41",
    ],
    [
      "Food",
      "4478.54",
      "2293.82",
      "2041.55",
      "3009.48",
      "3640.22",
      "4410.49",
      "5367.01",
      "6360.33",
      "8135.04",
    ],
    [
      "Grain",
      "334.29",
      "265.32",
      "254.36",
      "292.15",
      "316.34",
      "339.81",
      "366.04",
      "380.85",
      "407.44",
    ],
    [
      "Meat, Poultry and Processed Products",
      "867.49",
      "520.85",
      "458.41",
      "691.17",
      "787.04",
      "904.41",
      "1010.77",
      "1095.79",
      "1178.21",
    ],
    [
      "Eggs",
      "92.78",
      "66.06",
      "61.14",
      "79.22",
      "86.34",
      "97.09",
      "103.87",
      "109.96",
      "114.09",
    ],
    [
      "Aquatic Products",
      "301.42",
      "121.94",
      "99.05",
      "182.38",
      "231.55",
      "293.71",
      "383.04",
      "472.06",
      "571.42",
    ],
    [
      "Milk and Processed Products",
      "196.14",
      "89.09",
      "77.62",
      "128.10",
      "158.45",
      "200.96",
      "241.65",
      "283.40",
      "341.63",
    ],
    [
      "Clothing",
      "1284.20",
      "458.48",
      "376.60",
      "684.18",
      "962.45",
      "1263.80",
      "1601.19",
      "1986.16",
      "2782.30",
    ],
    [
      "Garments",
      "923.99",
      "306.87",
      "249.96",
      "466.34",
      "675.04",
      "900.29",
      "1156.29",
      "1465.42",
      "2092.69",
    ],
    [
      "Residence",
      "1228.91",
      "578.93",
      "515.70",
      "735.23",
      "880.76",
      "1131.03",
      "1493.31",
      "1775.08",
      "2863.28",
    ],
    [
      "Housing",
      "396.95",
      "84.73",
      "60.83",
      "123.92",
      "178.48",
      "301.37",
      "526.36",
      "659.61",
      "1482.11",
    ],
    [
      "Household Facilities, Articles and Services",
      "786.94",
      "226.04",
      "173.77",
      "366.43",
      "521.47",
      "701.08",
      "977.07",
      "1325.54",
      "2114.20",
    ],
    [
      "Durable Consumer Goods",
      "358.98",
      "70.10",
      "42.57",
      "138.72",
      "217.97",
      "307.95",
      "453.89",
      "632.98",
      "1085.97",
    ],
    [
      "Health Care and Medical Services",
      "856.41",
      "362.60",
      "343.96",
      "504.09",
      "632.03",
      "834.48",
      "1072.01",
      "1322.40",
      "1745.91",
    ],
    [
      "Transport and Communications",
      "1682.57",
      "394.80",
      "310.28",
      "582.28",
      "861.44",
      "1285.03",
      "2047.83",
      "3181.88",
      "5858.67",
    ],
    [
      "Education, Culture and Recreation Services",
      "1472.76",
      "457.22",
      "390.56",
      "665.96",
      "953.75",
      "1290.09",
      "1807.73",
      "2461.10",
      "4116.41",
    ],
    [
      "Consumer Goods for Recreational Use",
      "381.32",
      "82.96",
      "68.30",
      "151.82",
      "225.50",
      "335.78",
      "483.42",
      "682.50",
      "1116.97",
    ],
    [
      "Miscellaneous Goods and Services",
      "474.21",
      "128.67",
      "104.39",
      "195.43",
      "286.68",
      "393.73",
      "598.21",
      "851.39",
      "1388.59",
    ],
    ["Total Consumption Expenditures (%)", "", "", "", "", "", "", "", "", ""],
    [
      "Food",
      "36.52",
      "46.81",
      "47.96",
      "44.63",
      "41.66",
      "39.00",
      "35.87",
      "33.02",
      "28.05",
    ],
    [
      "Clothing",
      "10.47",
      "9.36",
      "8.85",
      "10.15",
      "11.01",
      "11.17",
      "10.70",
      "10.31",
      "9.59",
    ],
    [
      "Residence",
      "10.02",
      "11.81",
      "12.11",
      "10.90",
      "10.08",
      "10.00",
      "9.98",
      "9.21",
      "9.87",
    ],
    [
      "Household Facilities, Articles and Services",
      "6.42",
      "4.61",
      "4.08",
      "5.43",
      "5.97",
      "6.20",
      "6.53",
      "6.88",
      "7.29",
    ],
    [
      "Health Care and Medical Services",
      "6.98",
      "7.40",
      "8.08",
      "7.48",
      "7.23",
      "7.38",
      "7.16",
      "6.86",
      "6.02",
    ],
    [
      "Transport and Communications",
      "13.72",
      "8.06",
      "7.29",
      "8.64",
      "9.86",
      "11.36",
      "13.68",
      "16.52",
      "20.20",
    ],
    [
      "Education, Cultural and Recreation Services",
      "12.01",
      "9.33",
      "9.17",
      "9.88",
      "10.91",
      "11.41",
      "12.08",
      "12.78",
      "14.19",
    ],
    [
      "Miscellaneous Goods and Services",
      "3.87",
      "2.63",
      "2.45",
      "2.90",
      "3.28",
      "3.48",
      "4.00",
      "4.42",
      "4.79",
    ],
  ],
  meta: [
    {
      id: "e1",
      title: "Exhibit 1. Consolidated statement of earnings",
      type: "table",
    },
    {
      id: "e2",
      title: "Exhibit 2. Consolidated balance sheet, part 1",
      type: "table",
    },
    {
      id: "e3",
      title: "Exhibit 3. Consolidated balance sheet, part 2",
      type: "table",
    },
    {
      id: "e4",
      title: "Exhibit 4. Consolidated statement of cash flow",
      type: "table",
    },
    { id: "e5", title: "Exhibit 5. Segment results", type: "table" },
    { id: "e6", title: "Exhibit 6. Leading brands", type: "table" },
    { id: "e7", title: "Exhibit 7. Geographic sales breakdown", type: "table" },
    {
      id: "e8",
      title: "Exhibit 8. China GDP, current US$, 1980–2010",
      type: "figure",
    },
    {
      id: "e9",
      title: "Exhibit 9. China real GDP growth, 1981–2010",
      type: "figure",
    },
    {
      id: "e10",
      title:
        "Exhibit 10. Income and consumption by income levels, urban households, China 2009",
      type: "table",
    },
    {
      id: "e11",
      title:
        "Exhibit 11. Consumption expenditures by income level, urban households, China 2009",
      type: "table",
    },
  ],
};

const NAV_SECTIONS = [
  { id: "overview", icon: "home" },
  { id: "dashboard", icon: "chart" },
  { id: "timeline", icon: "stack" },
  { id: "shift", icon: "spark" },
  { id: "exhibits", icon: "table" },
  { id: "judgment", icon: "check" },
];

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function compactNumber(value) {
  if (value === null || value === undefined || value === "") return "—";
  const num = Number(String(value).replace(/,/g, "").replace(/%/g, ""));
  if (Number.isNaN(num)) return String(value);
  return new Intl.NumberFormat("en-US", {
    notation: num >= 1000 ? "compact" : "standard",
    maximumFractionDigits: num >= 1000 ? 1 : 0,
  }).format(num);
}

function renderCell(cell) {
  if (cell === null || cell === undefined || cell === "") return "—";
  return String(cell).replace(/\n/g, " ");
}

function softCard(extra = "") {
  return cx(
    "rounded-[24px] border bg-white/80 shadow-sm backdrop-blur",
    "border-[color:var(--line-soft)]",
    extra,
  );
}

function Pill({ children, tone = "default" }) {
  const toneClass =
    tone === "fact"
      ? "bg-[color:rgba(139,157,119,.14)] text-[color:#56684A]"
      : tone === "estimate"
        ? "bg-[color:rgba(167,139,90,.16)] text-[color:#6E5C31]"
        : tone === "warn"
          ? "bg-[color:rgba(192,108,84,.14)] text-[color:#8B4B37]"
          : "bg-[color:rgba(76,106,106,.12)] text-[color:#355454]";
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium",
        toneClass,
      )}
    >
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--sub)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--ink)] sm:text-3xl">
        {title}
      </h2>
      {sub ? (
        <p className="max-w-3xl text-sm leading-7 text-[color:var(--sub)] sm:text-[15px]">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className={softCard("p-4")}>
      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--sub)]">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold leading-tight text-[color:var(--ink)] sm:text-xl">
        {value}
      </div>
    </div>
  );
}

function TableBlock({ title, note, table, compact = false }) {
  return (
    <div className={softCard("overflow-hidden")}>
      <div className="border-b border-[color:var(--line-soft)] px-5 py-4">
        <div className="text-sm font-semibold text-[color:var(--ink)]">
          {title}
        </div>
        {note ? (
          <div className="mt-1 text-xs leading-6 text-[color:var(--sub)]">
            {note}
          </div>
        ) : null}
      </div>
      <div className="overflow-x-auto">
        <table
          className={cx(
            "min-w-[680px] w-full border-collapse text-left",
            compact ? "text-[11px]" : "text-xs",
          )}
        >
          <tbody>
            {table.map((row, ri) => (
              <tr
                key={ri}
                className="border-b border-[color:rgba(222,215,200,.72)] last:border-b-0"
              >
                {row.map((cell, ci) => (
                  <td
                    key={`${ri}-${ci}`}
                    className={cx(
                      "align-top px-3 py-2.5 leading-6",
                      ri === 0
                        ? "bg-[color:rgba(76,106,106,.08)] font-semibold text-[color:var(--ink)]"
                        : "text-[color:var(--sub)]",
                      ci === 0
                        ? "sticky left-0 z-10 bg-white font-medium text-[color:var(--ink)]"
                        : "",
                    )}
                  >
                    {renderCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BrandGrid({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(([name, desc]) => (
        <div key={name} className={softCard("p-4")}>
          <div className="text-sm font-semibold text-[color:var(--ink)]">
            {name}
          </div>
          <div className="mt-1 text-xs leading-6 text-[color:var(--sub)]">
            {desc}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChartCard({ title, note, children }) {
  return (
    <div className={softCard("p-5")}>
      <div className="mb-4">
        <div className="text-sm font-semibold text-[color:var(--ink)]">
          {title}
        </div>
        {note ? (
          <div className="mt-1 text-xs leading-6 text-[color:var(--sub)]">
            {note}
          </div>
        ) : null}
      </div>
      <div className="h-[280px] w-full sm:h-[320px]">{children}</div>
    </div>
  );
}

function LocaleButton({ locale, setLocale }) {
  const [open, setOpen] = useState(false);
  const locales = Object.entries(COPY).map(([key, value]) => [key, value.name]);
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-white/90 text-[color:var(--ink)] shadow-lg backdrop-blur transition hover:scale-[1.02]"
          aria-label="Language switcher"
        >
          <Icon name={open ? "close" : "globe"} className="h-5 w-5" />
        </button>
        {open ? (
          <div className="absolute bottom-14 right-0 w-56 rounded-[22px] border border-[color:var(--line-soft)] bg-white/95 p-2 shadow-xl backdrop-blur">
            <div className="mb-1 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--sub)]">
              Language
            </div>
            {locales.map(([key, name]) => (
              <button
                key={key}
                onClick={() => {
                  setLocale(key);
                  setOpen(false);
                }}
                className={cx(
                  "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm transition",
                  locale === key
                    ? "bg-[color:rgba(76,106,106,.12)] text-[color:var(--ink)]"
                    : "text-[color:var(--sub)] hover:bg-[color:rgba(76,106,106,.06)]",
                )}
              >
                <span>{name}</span>
                {locale === key ? (
                  <Icon name="check" className="h-4 w-4" />
                ) : null}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Navigation({ locale }) {
  const navLabels = COPY[locale].nav;
  return (
    <div className="sticky top-0 z-30 border-b border-[color:rgba(222,215,200,.8)] bg-[color:rgba(252,250,242,.85)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {NAV_SECTIONS.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[color:var(--line-soft)] bg-white/80 px-4 py-2 text-sm text-[color:var(--ink)] transition hover:bg-white"
          >
            <Icon name={item.icon} className="h-4 w-4" />
            <span>{navLabels[idx]}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ProcterAndGambleChina2022Infrastructure() {
  const [locale, setLocale] = useState("en");
  const [activeExhibitSet, setActiveExhibitSet] = useState("2022");
  const [open2022, setOpen2022] = useState({
    e1: true,
    e3: true,
    e13: true,
    e14: true,
  });
  const [open2012, setOpen2012] = useState({ e1: false, e4: true, e10: true });

  const t = COPY[locale];
  const dir = t.dir || "ltr";

  const exact2022 = "Exhibits 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, and 14";
  const exact2012 = "Exhibits 1, 2, 3, 4, 5, 6, 7, 10, and 11";
  const figureOnly = "2012 Exhibits 8 and 9; 2022 Exhibits 8 and 9";

  return (
    <div
      dir={dir}
      style={{
        "--bg": BG,
        "--paper": PAPER,
        "--ink": INK,
        "--sub": SUB,
        "--line-soft": LINE_SOFT,
      }}
      className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]"
    >
      <LocaleButton locale={locale} setLocale={setLocale} />
      <Navigation locale={locale} />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section
          id="overview"
          className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]"
        >
          <div className={softCard("p-6 sm:p-8")}>
            <div className="mb-4 flex items-start justify-between gap-4">
              <Pill>{t.name}</Pill>
              <Pill tone="fact">Primary reader view</Pill>
            </div>
            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[color:var(--ink)] sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[color:var(--sub)] sm:text-[15px]">
              {t.subtitle}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className={softCard("p-4")}>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)]">
                  <Icon name="search" className="h-4 w-4" />
                  {t.readTitle}
                </div>
                <div className="space-y-2 text-xs leading-6 text-[color:var(--sub)]">
                  {t.legend.map(([label, desc]) => (
                    <div key={label}>
                      <span className="font-semibold text-[color:var(--ink)]">
                        {label}:
                      </span>{" "}
                      {desc}
                    </div>
                  ))}
                </div>
              </div>

              <div className={softCard("p-4")}>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)]">
                  <Icon name="check" className="h-4 w-4" />
                  {t.quickVerdictTitle}
                </div>
                <p className="text-xs leading-6 text-[color:var(--sub)]">
                  {t.quickVerdict}
                </p>
              </div>

              <div className={softCard("p-4")}>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)]">
                  <Icon name="stack" className="h-4 w-4" />
                  {t.coverageTitle}
                </div>
                <p className="text-xs leading-6 text-[color:var(--sub)]">
                  {t.coverageBody}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className={softCard("p-5")}>
              <div className="mb-3 flex items-center gap-2">
                <Icon name="table" className="h-4 w-4" />
                <div className="text-sm font-semibold">{t.exactRebuild}</div>
              </div>
              <p className="text-xs leading-6 text-[color:var(--sub)]">
                2022: {exact2022}
              </p>
              <p className="mt-2 text-xs leading-6 text-[color:var(--sub)]">
                2012: {exact2012}
              </p>
            </div>

            <div className={softCard("p-5")}>
              <div className="mb-3 flex items-center gap-2">
                <Icon name="alert" className="h-4 w-4" />
                <div className="text-sm font-semibold">{t.figureRefs}</div>
              </div>
              <p className="text-xs leading-6 text-[color:var(--sub)]">
                {figureOnly}
              </p>
              <p className="mt-2 text-xs leading-6 text-[color:var(--sub)]">
                {t.figureRefsNote}
              </p>
            </div>

            <div className={softCard("p-5")}>
              <div className="mb-3 flex items-center gap-2">
                <Icon name="spark" className="h-4 w-4" />
                <div className="text-sm font-semibold">
                  Reader upgrade choices
                </div>
              </div>
              <ul className="space-y-2 text-xs leading-6 text-[color:var(--sub)]">
                <li>Thesis first, raw tables later.</li>
                <li>Charts used only where they accelerate comprehension.</li>
                <li>
                  Responsive tables with controlled overflow on phone, tablet,
                  and desktop.
                </li>
                <li>Hidden language switcher with localized interface text.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="dashboard" className="mt-12 space-y-6">
          <SectionTitle
            eyebrow={t.nav[1]}
            title="At-a-glance diagnostic dashboard"
            sub="The three fastest ways to understand the case are the Greater China sales arc, the channel shift, and the difference between historic P&G strengths and the market logic China rewards now."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              label={
                t.metricNames.chinaSales2021 || "Greater China sales, FY2021"
              }
              value="USD 7.612B"
            />
            <MetricCard
              label={
                t.metricNames.ecommerceShift ||
                "E-commerce share of urban FMCG sales"
              }
              value="2.1% → 30.2%"
            />
            <MetricCard
              label={
                t.metricNames.penetration2021 ||
                "Urban household penetration, 2021"
              }
              value="91.4%"
            />
            <MetricCard
              label={t.metricNames.hairShare || "Hair care share, 2020"}
              value="41.5%"
            />
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <ChartCard
              title="P&G worldwide revenue, EBITDA, operating income, and net income"
              note="Source-fidelity view based on 2022 Exhibit 1. Years are fiscal years ending June 30."
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={CHARTS.incomeTrend}
                  margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid stroke="rgba(36,48,58,.08)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: SUB }} />
                  <YAxis
                    tick={{ fontSize: 11, fill: SUB }}
                    width={48}
                    tickFormatter={compactNumber}
                  />
                  <Tooltip formatter={(v) => [compactNumber(v), ""]} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Revenue"
                    stroke={ACCENT}
                    strokeWidth={2.2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="EBITDA"
                    stroke={ACCENT_5}
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="Operating Income"
                    stroke={ACCENT_2}
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="Net Income"
                    stroke={ACCENT_4}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="China urban FMCG channel shift"
              note="2022 Exhibit 13. The long-run direction is reliable. The case also warns that 2012 to 2016a and 2016b onward are not perfectly consistent because cigarettes were excluded and category definitions changed."
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={CHARTS.channelShift}
                  margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid stroke="rgba(36,48,58,.08)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: SUB }} />
                  <YAxis tick={{ fontSize: 11, fill: SUB }} width={42} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="E-commerce"
                    stackId="1"
                    stroke={ACCENT}
                    fill="rgba(76,106,106,.55)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Supermarkets/ minimarkets"
                    stackId="1"
                    stroke={ACCENT_3}
                    fill="rgba(139,157,119,.45)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Hypermarkets"
                    stackId="1"
                    stroke={ACCENT_5}
                    fill="rgba(167,139,90,.35)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Grocery"
                    stackId="1"
                    stroke={ACCENT_2}
                    fill="rgba(192,108,84,.28)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Convenience/ Specialty Stores"
                    stackId="1"
                    stroke={ACCENT_4}
                    fill="rgba(123,92,110,.28)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Other"
                    stackId="1"
                    stroke="#B7B0A0"
                    fill="rgba(183,176,160,.32)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
            <ChartCard
              title="Greater China market context: urban and rural income, consumption, and population"
              note="Built from the machine-readable 2022 Exhibit 10 table."
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={CHARTS.urbanRural}
                  margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid stroke="rgba(36,48,58,.08)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: SUB }} />
                  <YAxis
                    tick={{ fontSize: 11, fill: SUB }}
                    width={52}
                    tickFormatter={compactNumber}
                  />
                  <Tooltip formatter={(v) => [compactNumber(v), ""]} />
                  <Legend />
                  <Line
                    dataKey="Urban Disposable Income"
                    type="monotone"
                    stroke={ACCENT}
                    strokeWidth={2.2}
                    dot={false}
                  />
                  <Line
                    dataKey="Rural Disposable Income"
                    type="monotone"
                    stroke={ACCENT_2}
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="Urban Consumption"
                    type="monotone"
                    stroke={ACCENT_3}
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="Rural Consumption"
                    type="monotone"
                    stroke={ACCENT_5}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="2021 household penetration among leading FMCG players"
              note="2022 Exhibit 14. P&G remained one of the most widely purchased FMCG companies in urban China."
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={CHARTS.penetrationTop10}
                  layout="vertical"
                  margin={{ top: 5, right: 10, left: 20, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="rgba(36,48,58,.08)"
                    horizontal={false}
                  />
                  <XAxis type="number" tick={{ fontSize: 11, fill: SUB }} />
                  <YAxis
                    type="category"
                    dataKey="company"
                    tick={{ fontSize: 11, fill: SUB }}
                    width={90}
                  />
                  <Tooltip formatter={(v) => [`${v}%`, "Penetration"]} />
                  <Bar
                    dataKey="penetration2021"
                    fill={ACCENT}
                    radius={[0, 8, 8, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </section>

        <section id="timeline" className="mt-12 space-y-6">
          <SectionTitle
            eyebrow={t.nav[2]}
            title="Case timeline"
            sub="This sequence helps anchor the 2022 challenge inside the much longer story of P&G's rise in China."
          />
          <div className="grid gap-4">
            {TIMELINE.map(([year, text]) => (
              <div
                key={year}
                className={softCard("grid gap-4 p-5 md:grid-cols-[110px_1fr]")}
              >
                <div className="text-sm font-semibold tracking-[0.16em] text-[color:var(--sub)]">
                  {year}
                </div>
                <div className="text-sm leading-7 text-[color:var(--ink)]">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="shift" className="mt-12 space-y-6">
          <SectionTitle
            eyebrow={t.nav[3]}
            title={t.oldVsNew}
            sub="A fast way to see the strategic mismatch is to compare the logic that built P&G's historical edge with the logic the market increasingly rewards now."
          />

          <div className={softCard("overflow-hidden")}>
            <div className="grid border-b border-[color:var(--line-soft)] bg-white/60 md:grid-cols-2">
              <div className="px-5 py-4 text-sm font-semibold text-[color:var(--ink)]">
                {t.oldHeader}
              </div>
              <div className="px-5 py-4 text-sm font-semibold text-[color:var(--ink)]">
                {t.newHeader}
              </div>
            </div>
            {OLD_NEW_ROWS.map(([left, right], idx) => (
              <div
                key={idx}
                className="grid border-b border-[color:rgba(222,215,200,.72)] last:border-b-0 md:grid-cols-2"
              >
                <div className="px-5 py-4 text-sm leading-7 text-[color:var(--ink)]">
                  {left}
                </div>
                <div className="px-5 py-4 text-sm leading-7 text-[color:var(--sub)]">
                  {right}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {SECTIONS.map((section) => (
              <div key={section.id} className={softCard("p-6")}>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-[color:var(--ink)]">
                      {t.sectionTitles[section.id]}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-[color:var(--sub)]">
                      {t.sectionSummaries[section.id]}
                    </div>
                  </div>
                  <Pill
                    tone={
                      section.tone === "Direct fact"
                        ? "fact"
                        : section.tone === "Exhibit-derived"
                          ? "estimate"
                          : "warn"
                    }
                  >
                    {section.tone}
                  </Pill>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {section.metrics.map(([key, value]) => (
                    <MetricCard
                      key={`${section.id}-${key}`}
                      label={
                        t.metricNames[key] || COPY.en.metricNames[key] || key
                      }
                      value={value}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard
              title="How much premium matters by category in China"
              note="2022 Exhibit 12. This is not a P&G-only chart. It is a category-level signal about the market P&G is competing in."
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={CHARTS.premium.slice(0, 10)}
                  layout="vertical"
                  margin={{ top: 5, right: 10, left: 20, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="rgba(36,48,58,.08)"
                    horizontal={false}
                  />
                  <XAxis type="number" tick={{ fontSize: 11, fill: SUB }} />
                  <YAxis
                    type="category"
                    dataKey="product"
                    tick={{ fontSize: 11, fill: SUB }}
                    width={135}
                  />
                  <Tooltip formatter={(v) => [`${v}%`, "Importance"]} />
                  <Bar dataKey="value" fill={ACCENT_2} radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="China personal care and beauty market"
              note="2022 Exhibit 11. Forecast values start in 2021F."
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={CHARTS.beautyMarket}
                  margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid stroke="rgba(36,48,58,.08)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: SUB }} />
                  <YAxis
                    tick={{ fontSize: 11, fill: SUB }}
                    width={50}
                    tickFormatter={compactNumber}
                  />
                  <Tooltip formatter={(v) => [compactNumber(v), ""]} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Personal Care"
                    stackId="1"
                    stroke={ACCENT}
                    fill="rgba(76,106,106,.42)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Cosmetics"
                    stackId="1"
                    stroke={ACCENT_2}
                    fill="rgba(192,108,84,.28)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Skin Care"
                    stackId="1"
                    stroke={ACCENT_3}
                    fill="rgba(139,157,119,.35)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Fragrances"
                    stackId="1"
                    stroke={ACCENT_4}
                    fill="rgba(123,92,110,.22)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </section>

        <section id="exhibits" className="mt-12 space-y-6">
          <SectionTitle
            eyebrow={t.nav[4]}
            title="Exhibit lab"
            sub="This section keeps the underlying data visible. It is designed so a reader can move from thesis to evidence without leaving the page."
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveExhibitSet("2022")}
              className={cx(
                "rounded-full border px-4 py-2 text-sm transition",
                activeExhibitSet === "2022"
                  ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                  : "border-[color:var(--line-soft)] bg-white text-[color:var(--ink)]",
              )}
            >
              {t.exhibits2022}
            </button>
            <button
              type="button"
              onClick={() => setActiveExhibitSet("2012")}
              className={cx(
                "rounded-full border px-4 py-2 text-sm transition",
                activeExhibitSet === "2012"
                  ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                  : "border-[color:var(--line-soft)] bg-white text-[color:var(--ink)]",
              )}
            >
              {t.exhibits2012}
            </button>
          </div>

          {activeExhibitSet === "2022" ? (
            <div className="space-y-4">
              {EXHIBITS_2022.meta.map((item) => {
                const open = !!open2022[item.id];
                return (
                  <div key={item.id} className={softCard("overflow-hidden")}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpen2022((prev) => ({
                          ...prev,
                          [item.id]: !prev[item.id],
                        }))
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <div>
                        <div className="text-sm font-semibold text-[color:var(--ink)]">
                          {item.title}
                        </div>
                        <div className="mt-1 text-xs leading-6 text-[color:var(--sub)]">
                          {item.type === "figure"
                            ? t.figureRefs
                            : t.exactRebuild}
                        </div>
                      </div>
                      <div className="shrink-0 text-[color:var(--sub)]">
                        <Icon
                          name="down"
                          className={cx(
                            "h-5 w-5 transition",
                            open ? "rotate-180" : "",
                          )}
                        />
                      </div>
                    </button>

                    {open ? (
                      <div className="border-t border-[color:var(--line-soft)] px-5 py-5">
                        {item.id === "e1" ? (
                          <TableBlock
                            title={item.title}
                            note="2022 source table."
                            table={EXHIBITS_2022.income}
                          />
                        ) : item.id === "e2" ? (
                          <TableBlock
                            title={item.title}
                            note="2022 source table."
                            table={EXHIBITS_2022.balance}
                          />
                        ) : item.id === "e3" ? (
                          <TableBlock
                            title={item.title}
                            note="Includes estimated Greater China sales and estimated annual change as presented in the exhibit."
                            table={EXHIBITS_2022.geography}
                          />
                        ) : item.id === "e4" ? (
                          <TableBlock
                            title={item.title}
                            note="Shows shifts in P&G's global product mix over time."
                            table={EXHIBITS_2022.mix}
                          />
                        ) : item.id === "e5" ? (
                          <TableBlock
                            title={item.title}
                            note="2021 product-segment structure with categories and major brands."
                            table={EXHIBITS_2022.results}
                          />
                        ) : item.id === "e6" ? (
                          <BrandGrid items={EXHIBITS_2022.brands} />
                        ) : item.id === "e7" ? (
                          <ChartCard
                            title={item.title}
                            note="Recreated from the population rows embedded in 2022 Exhibit 10."
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart
                                data={CHARTS.urbanRural.filter(
                                  (d) => Number(d.year) >= 2010,
                                )}
                                margin={{
                                  top: 5,
                                  right: 10,
                                  left: 0,
                                  bottom: 0,
                                }}
                              >
                                <CartesianGrid
                                  stroke="rgba(36,48,58,.08)"
                                  vertical={false}
                                />
                                <XAxis
                                  dataKey="year"
                                  tick={{ fontSize: 11, fill: SUB }}
                                />
                                <YAxis
                                  tick={{ fontSize: 11, fill: SUB }}
                                  width={48}
                                />
                                <Tooltip />
                                <Legend />
                                <Line
                                  dataKey="Urban Population"
                                  stroke={ACCENT}
                                  strokeWidth={2.2}
                                  dot={false}
                                />
                                <Line
                                  dataKey="Rural Population"
                                  stroke={ACCENT_2}
                                  strokeWidth={2}
                                  dot={false}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </ChartCard>
                        ) : item.id === "e8" || item.id === "e9" ? (
                          <div className={softCard("p-5")}>
                            <div className="flex items-start gap-3">
                              <Icon
                                name="alert"
                                className="mt-0.5 h-5 w-5 text-[color:var(--sub)]"
                              />
                              <div className="text-sm leading-7 text-[color:var(--sub)]">
                                This source was provided as a chart figure
                                inside the uploaded PDF. The underlying
                                machine-readable series is not present in the
                                attached files, so this view preserves the
                                exhibit as a flagged reference figure rather
                                than an invented numeric rebuild.
                              </div>
                            </div>
                          </div>
                        ) : item.id === "e10" ? (
                          <TableBlock
                            title={item.title}
                            note="Urban-rural comparisons used throughout the market context section."
                            table={EXHIBITS_2022.urbanRural}
                          />
                        ) : item.id === "e11" ? (
                          <TableBlock
                            title={item.title}
                            note="Beauty and personal care market data with forecast years marked F in the original exhibit."
                            table={EXHIBITS_2022.beautyMarket}
                          />
                        ) : item.id === "e12" ? (
                          <TableBlock
                            title={item.title}
                            note="Consumer responses on categories where premium products matter."
                            table={EXHIBITS_2022.premium}
                          />
                        ) : item.id === "e13" ? (
                          <TableBlock
                            title={item.title}
                            note="Channel shares and growth rates. The original exhibit warns that definitions change around 2016."
                            table={EXHIBITS_2022.channels}
                          />
                        ) : item.id === "e14" ? (
                          <TableBlock
                            title={item.title}
                            note="Leading FMCG company penetration across urban households in China."
                            table={EXHIBITS_2022.penetration}
                          />
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {EXHIBITS_2012.meta.map((item) => {
                const open = !!open2012[item.id];
                return (
                  <div key={item.id} className={softCard("overflow-hidden")}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpen2012((prev) => ({
                          ...prev,
                          [item.id]: !prev[item.id],
                        }))
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <div>
                        <div className="text-sm font-semibold text-[color:var(--ink)]">
                          {item.title}
                        </div>
                        <div className="mt-1 text-xs leading-6 text-[color:var(--sub)]">
                          {item.type === "figure"
                            ? t.figureRefs
                            : t.exactRebuild}
                        </div>
                      </div>
                      <div className="shrink-0 text-[color:var(--sub)]">
                        <Icon
                          name="down"
                          className={cx(
                            "h-5 w-5 transition",
                            open ? "rotate-180" : "",
                          )}
                        />
                      </div>
                    </button>

                    {open ? (
                      <div className="border-t border-[color:var(--line-soft)] px-5 py-5">
                        {item.id === "e1" ? (
                          <TableBlock
                            title={item.title}
                            note="2012 exhibit file."
                            table={EXHIBITS_2012.earnings}
                          />
                        ) : item.id === "e2" ? (
                          <TableBlock
                            title={item.title}
                            note="2012 exhibit file."
                            table={EXHIBITS_2012.balance1}
                          />
                        ) : item.id === "e3" ? (
                          <TableBlock
                            title={item.title}
                            note="2012 exhibit file."
                            table={EXHIBITS_2012.balance2}
                          />
                        ) : item.id === "e4" ? (
                          <TableBlock
                            title={item.title}
                            note="2012 exhibit file."
                            table={EXHIBITS_2012.cashflow}
                          />
                        ) : item.id === "e5" ? (
                          <TableBlock
                            title={item.title}
                            note="2010, 2009, and 2008 segment results shown in the 2012 exhibit file."
                            table={EXHIBITS_2012.segments}
                            compact
                          />
                        ) : item.id === "e6" ? (
                          <TableBlock
                            title={item.title}
                            note="Reportable segments, category lists, and billion-dollar brands from the 2012 exhibit file."
                            table={EXHIBITS_2012.brands}
                          />
                        ) : item.id === "e7" ? (
                          <TableBlock
                            title={item.title}
                            note="Regional and developed-versus-developing sales breakdown."
                            table={EXHIBITS_2012.geography}
                          />
                        ) : item.id === "e8" || item.id === "e9" ? (
                          <div className={softCard("p-5")}>
                            <div className="flex items-start gap-3">
                              <Icon
                                name="alert"
                                className="mt-0.5 h-5 w-5 text-[color:var(--sub)]"
                              />
                              <div className="text-sm leading-7 text-[color:var(--sub)]">
                                The uploaded 2012 exhibit materials show these
                                as chart figures rather than a machine-readable
                                table. This interface preserves them as flagged
                                reference figures instead of inventing a
                                numerical reconstruction.
                              </div>
                            </div>
                          </div>
                        ) : item.id === "e10" ? (
                          <TableBlock
                            title={item.title}
                            note="Urban household income and consumption by income level, China 2009."
                            table={EXHIBITS_2012.incomeLevels}
                            compact
                          />
                        ) : item.id === "e11" ? (
                          <TableBlock
                            title={item.title}
                            note="Urban household expenditure composition by income level, China 2009."
                            table={EXHIBITS_2012.consumption}
                            compact
                          />
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section id="judgment" className="mt-12">
          <div className={softCard("p-6 sm:p-8")}>
            <SectionTitle
              eyebrow={t.nav[5]}
              title={t.sectionTitles.judgment}
              sub={t.sectionSummaries.judgment}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                label={t.metricNames.ros2021 || "Return on Sales, 2021"}
                value="18.4%"
              />
              <MetricCard
                label={t.metricNames.roa2021 || "Return on Assets, 2021"}
                value="11.8%"
              />
              <MetricCard
                label={t.metricNames.roe2021 || "Return on Equity, 2021"}
                value="30.1%"
              />
              <MetricCard
                label={
                  t.metricNames.penetration2021 ||
                  "Urban household penetration, 2021"
                }
                value="91.4%"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
