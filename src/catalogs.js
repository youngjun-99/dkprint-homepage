import catalogKo from "/src/assets/file/catalog_ko_2026.pdf";
import catalogEn from "/src/assets/file/catalog_en_2026.pdf";

export const catalogs = [
  {
    key: "ko",
    label: "E-카탈로그 다운로드",
    href: catalogKo,
    fileName: "대경인쇄_회사카탈로그_2026.pdf",
  },
  {
    key: "en",
    label: "English Catalog",
    href: catalogEn,
    fileName: "Daekyung_Printing_Company_Profile_2026_EN.pdf",
  },
];

export const downloadCatalog = ({ href, fileName }) => {
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
