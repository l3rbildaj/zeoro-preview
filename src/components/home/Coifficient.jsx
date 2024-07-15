import { useIsMobile } from "@/hooks/useIsMobile";
import { useIsTablet } from "@/hooks/useIsTablet";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedText from "../ui/TextAnimation";

const rectangles = [
  { x: 7.10938, y: 366.467, fill: "#505050" },
  { x: 7.10938, y: 309.878, fill: "#505050" },
  { x: 7.10938, y: 253.29, fill: "white" },
  { x: 7.10938, y: 196.702, fill: "#505050" },
  { x: 7.10938, y: 140.114, fill: "#505050" },
  { x: 7.10938, y: 83.5254, fill: "#505050" },
  { x: 7.10938, y: 26.9375, fill: "#505050" },
  { x: 63.6973, y: 366.467, fill: "#505050" },
  { x: 63.6973, y: 309.878, fill: "#505050" },
  { x: 63.6973, y: 253.29, fill: "white" },
  { x: 63.6973, y: 196.702, fill: "#505050" },
  { x: 63.6973, y: 140.114, fill: "#505050" },
  { x: 63.6973, y: 83.5254, fill: "#505050" },
  { x: 63.6973, y: 26.9375, fill: "#505050" },
  { x: 120.285, y: 366.467, fill: "#505050" },
  { x: 120.285, y: 309.878, fill: "white" },
  { x: 120.285, y: 253.29, fill: "#505050" },
  { x: 120.285, y: 196.702, fill: "#505050" },
  { x: 120.285, y: 140.114, fill: "#505050" },
  { x: 120.285, y: 83.5254, fill: "#505050" },
  { x: 120.285, y: 26.9375, fill: "#505050" },
  { x: 176.873, y: 366.467, fill: "white" },
  { x: 176.874, y: 309.878, fill: "#505050" },
  { x: 176.874, y: 253.29, fill: "#505050" },
  { x: 176.874, y: 196.702, fill: "#505050" },
  { x: 176.874, y: 140.114, fill: "#505050" },
  { x: 176.873, y: 83.5254, fill: "#505050" },
  { x: 176.874, y: 26.9375, fill: "#505050" },
  { x: 233.461, y: 366.467, fill: "white" },
  { x: 233.461, y: 309.878, fill: "#505050" },
  { x: 233.461, y: 253.29, fill: "#505050" },
  { x: 233.461, y: 196.702, fill: "#505050" },
  { x: 233.461, y: 140.114, fill: "#505050" },
  { x: 233.461, y: 83.5254, fill: "#505050" },
  { x: 233.461, y: 26.9375, fill: "#505050" },
  { x: 290.049, y: 366.467, fill: "white" },
  { x: 290.049, y: 309.878, fill: "#505050" },
  { x: 290.049, y: 253.29, fill: "#505050" },
  { x: 290.049, y: 196.702, fill: "#505050" },
  { x: 290.049, y: 140.114, fill: "#505050" },
  { x: 290.049, y: 83.5254, fill: "#505050" },
  { x: 290.049, y: 26.9375, fill: "#505050" },
  { x: 346.638, y: 366.467, fill: "white" },
  { x: 346.638, y: 309.878, fill: "#505050" },
  { x: 346.638, y: 253.29, fill: "#505050" },
  { x: 346.638, y: 196.702, fill: "#505050" },
  { x: 346.638, y: 140.114, fill: "#505050" },
  { x: 346.638, y: 83.5254, fill: "#505050" },
  { x: 346.638, y: 26.9375, fill: "#505050" },
];

const strokedRectangles = [
  {
    id: 15,
    x: 114.73,
    y: 309.878,
    fill: "none",
    stroke: "white",
    strokeWidth: 2,
  },
  {
    id: 18,
    x: 114.73,
    y: 140.074,
    fill: "none",
    stroke: "#505050",
    strokeWidth: 2,
  },
  {
    id: 20,
    x: 114.73,
    y: 27.0742,
    fill: "none",
    stroke: "#505050",
    strokeWidth: 2,
  },
  {
    id: 44,
    x: 341,
    y: 253.074,
    fill: "none",
    stroke: "#505050",
    strokeWidth: 2,
  },
  { id: 0, x: 2, y: 366.074, fill: "none", stroke: "#505050", strokeWidth: 2 },
  {
    id: 31,
    x: 228,
    y: 197.074,
    fill: "none",
    stroke: "#505050",
    strokeWidth: 2,
  },
  {
    id: 40,
    x: 285,
    y: 84.0742,
    fill: "none",
    stroke: "#505050",
    strokeWidth: 2,
  },
  {
    id: 29,
    x: 228,
    y: 310.074,
    fill: "none",
    stroke: "#505050",
    strokeWidth: 2,
  },
];

const initialLine = {
  d: "M27 253.5H83.5L197 367H366.5H446.5V128.5H615.5",
  stroke: "white",
  strokeWidth: 5,
};

const targetIndexesTablet = [
  [2, 10, 4, 11, 18, 25, 32, 39, 46],
  [2, 9, 15, 21, 28, 35, 42],
  [2, 9, 16, 23, 22, 29, 36, 43],
  [2, 9, 16, 23, 22, 29, 36, 43],
  [2, 3, 4, 5, 6, 13, 20, 27, 26, 33, 32, 39, 46],
  [2, 9, 16, 17, 24, 25, 32, 39, 40, 47, 46],
  [2, 9, 16, 17, 24, 25, 32, 31, 38, 39, 46],
  [2, 9, 16, 17, 24, 25, 32, 39, 38, 37, 44],
  [0, 1, 8, 7, 14, 21, 28, 35, 42, 43],
];


const targetIndexesMobile = [
  [2, 10, 4, 11, 18, 25, 32, 39, 46,45,44,43,42],
  [2, 9, 15, 21, 28, 35, 42],
  [2, 9, 16, 23, 22, 29, 36, 43,42],
  [2, 9, 16, 23, 22, 29, 36, 43,42],
  [2, 3, 4, 5, 6, 13, 20, 27, 26, 33, 32, 39, 46,45,44,43,42],
  [2, 9, 16, 17, 24, 25, 32, 39, 40, 47, 46,45,44,43,42],
  [2, 9, 16, 17, 24, 25, 32, 31, 38, 39, 46,45,44,43,42],
  [2, 9, 16, 17, 24, 25, 32, 39, 38, 37, 44,43,42],
  [0, 1, 8, 7, 14, 21, 28, 35, 42,],
];

const strokedIndexes = [0, 15, 18, 20, 29, 31, 40, 44];

const data = [
  {
    stroked: 18,
    endpath: "H446.5V210.5",
    title: "WEBSITE DESIGN",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
  {
    stroked: 15,
    endpath: "5H446.5V150.5",
    title: "DEVELOPMENT",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
  {
    stroked: 20,
    endpath: "5H446.5V200.5",
    title: "WEBSITE DESIGN",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
  {
    stroked: 29,
    endpath: "5H446.5V200.5",
    title: "WEBSITE DESIGN",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
  {
    stroked: 40,
    endpath: "5H446.5V208.5",
    title: "WEBSITE DESIGN",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
  {
    stroked: 31,
    endpath: "5H446.5V208.5",
    title: "WEBSITE DESIGN",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
  {
    stroked: 44,
    endpath: "5H446.5V158.5",
    title: "WEBSITE DESIGN",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
  {
    stroked: 29,
    endpath: "5H446.5V128.5",
    title: "WEBSITE DESIGN",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
  {
    stroked: 0,
    endpath: "5H446.5V158.5",
    title: "WEBSITE DESIGN",
    description: "Sapien eget proin massa nisi interdu morbi sed cras mattis egestas eros Sapien eget proin massa nisi int morbi sed cras mattis egestas"
  },
];




export default function Coifficient() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const [activeRects, setActiveRects] = useState(isMobile ? [2, 9, 15, 21, 28, 35, 42] : [2, 9, 15, 21, 28, 35, 42]);
  const [linePath, setLinePath] = useState(isMobile ? "M26.91138 254.09199999999998 L83.4993 254.09199999999998 L140.087 310.68 L196.67499999999998 367.269 L253.263 367.269 L309.851 367.269 L366.44 367.269L366.44 575.269 H315.5" : initialLine.d);
  const [pathKey, setPathKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(data[0])


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

  })

 

  const getTextPosition = (x, y) => {
    const size = 25; // Assuming this is the size for the width and height
    const offset = size / 3;
    return { x: x + offset, y: y + offset };
  };

  const handleRectClick = (index) => {
    // Find the data item corresponding to the clicked rectangle index
    const dataItem = data.find((item) => item.stroked === index);
    setItem(dataItem);
  
    if (dataItem) {
      // Determine the end path based on device type
      const endPath = !isMobile ? dataItem.endpath + (isTablet ? "H515.5"  : "H615.5") : "L366.44 575.269 H315.5";
  
      // Determine which indexes to use based on device type
      const targetIndexes = isMobile ? targetIndexesMobile : targetIndexesTablet;
  
      // Create new line paths
      const newLinePaths = targetIndexes
        .map((indexes) => 
          indexes.includes(index) ? createPathFromIndexes(indexes) + endPath : ""
        )
        .filter((path) => path !== "");
  
      // Check if there are any new line paths
      if (newLinePaths.length > 0) {
        // Update the line path state
        setLinePath(newLinePaths[0]);
  
        // Update the path key to trigger re-render
        setPathKey((prevKey) => prevKey + 1);
  
        // Update active rectangles to include the rectangles in the path
        const newActiveRects = targetIndexes
          .filter((indexes) => indexes.includes(index))
          .flat();
  
        setActiveRects(newActiveRects);
        setIsLoading(true); // Show the loader again
      }
    }
  };

  
  const createPathFromIndexes = (indexes) => {
    let path = "";
    indexes.forEach((index, idx) => {
      const rect = rectangles[index];
      const rectCenterX = rect.x + 19.802; // Assuming 27.604 is the width/height, half of it is 13.802
      const rectCenterY = rect.y + 0.802;
      const command = idx === 0 ? "M" : "L";
      path += `${command}${rectCenterX} ${rectCenterY} `;
    });
    return path.trim();
  };

  const getCommonIndexes = (arr1, arr2) => {
    const strokedValues = arr2.map((item) => item.stroked);
    return arr1.filter((value) => strokedValues.includes(value));
  };




  return (
    <div className="  relative my-20 md:mt-36 md:my-40   mx-5 2xl:mx-20">
       <AnimatedText
          text={"THE COEFFICIENTS"}
          stagger={0.05}
          className={
            " uppercase  text-3xl md:text-4xl flex flex-grow flex-wrap -pt-14 text-white font-bold mb-20 sm:mb-0 md:mb-10 "
          }
        />
      <div className=" justify-center items-center md:items-start md:justify-between flex-col md:flex-row flex  md:h-[70vh]  ">
        <div className=" w-fit scale-[0.7] xs:scale-75  xl:scale-90 2xl:scale-100 -mt-32 sm:mt-0 -ml-3 xs:-ml-24 sm:-ml-20 xl:ml-0  z-30 ">
          <svg width="58" className=" ml-8 xs:ml-7 md:ml-5 z-30   " height="513" viewBox="0 0 58 513" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 136.5L21.5 136.5L21.5 142.875C21.5 143.8 21.3083 144.633 20.925 145.375C20.55 146.125 20.0083 146.717 19.3 147.15C18.6 147.592 17.7708 147.813 16.8125 147.813C16.3875 147.813 15.9583 147.75 15.525 147.625C15.0917 147.5 14.7 147.308 14.35 147.05C14.0083 146.792 13.7542 146.458 13.5875 146.05C13.4542 146.592 13.2125 147.033 12.8625 147.375C12.5125 147.717 12.1 147.983 11.625 148.175C11.1583 148.367 10.6792 148.496 10.1875 148.562C9.70417 148.638 9.25417 148.675 8.8375 148.675C7.9125 148.675 7.0875 148.446 6.3625 147.987C5.6375 147.529 5.0625 146.912 4.6375 146.137C4.2125 145.371 4 144.521 4 143.587L4 136.5ZM6.6125 139.55L6.6125 143.275C6.6125 143.775 6.73333 144.225 6.975 144.625C7.21667 145.025 7.55 145.346 7.975 145.588C8.4 145.829 8.88333 145.95 9.425 145.95C9.89167 145.95 10.3333 145.829 10.75 145.588C11.1667 145.346 11.5042 145.025 11.7625 144.625C12.0208 144.225 12.15 143.775 12.15 143.275L12.15 139.55L6.6125 139.55ZM14.725 139.55L14.725 142.525C14.725 143.142 14.9167 143.667 15.3 144.1C15.6833 144.542 16.1917 144.762 16.825 144.762C17.5 144.762 18.0083 144.542 18.35 144.1C18.7 143.667 18.875 143.142 18.875 142.525L18.875 139.55L14.725 139.55ZM4 150.685L21.5 150.685L21.5 157.397C21.5 158.347 21.2625 159.205 20.7875 159.972C20.3125 160.739 19.675 161.347 18.875 161.797C18.0833 162.247 17.2042 162.472 16.2375 162.472C15.4458 162.472 14.7167 162.326 14.05 162.035C13.3917 161.751 12.8208 161.351 12.3375 160.835C11.8542 160.326 11.4875 159.739 11.2375 159.072L4 163.26L4 159.747L10.9625 155.697L10.9625 153.735L4 153.735L4 150.685ZM14.0125 153.735L14.0125 157.047C14.0125 157.48 14.1208 157.876 14.3375 158.235C14.5542 158.593 14.8458 158.88 15.2125 159.097C15.5792 159.314 15.9875 159.422 16.4375 159.422C16.8958 159.422 17.3083 159.314 17.675 159.097C18.0417 158.88 18.3333 158.593 18.55 158.235C18.7667 157.876 18.875 157.48 18.875 157.047L18.875 153.735L14.0125 153.735ZM21.5 171.012L21.5 174.525L4 180.887L4 177.65L7.1 176.525L7.1 169.025L4 167.9L4 164.662L21.5 171.012ZM10.15 170.137L10.15 175.4L17.3625 172.762L10.15 170.137ZM4 182.984L21.5 182.984L21.5 186.284L9.5125 193.672L21.5 193.672L21.5 196.722L4 196.722L4 193.434L15.9875 186.034L4 186.034L4 182.984ZM4 199.732L21.5 199.732L21.5 205.532C21.5 206.741 21.2708 207.87 20.8125 208.92C20.3625 209.978 19.7333 210.907 18.925 211.707C18.125 212.516 17.1958 213.145 16.1375 213.595C15.0875 214.053 13.9583 214.282 12.75 214.282C11.5417 214.282 10.4083 214.053 9.35 213.595C8.3 213.145 7.37083 212.516 6.5625 211.707C5.7625 210.907 5.13333 209.978 4.675 208.92C4.225 207.87 4 206.741 4 205.532L4 199.732ZM7.05 202.782L7.05 205.532C7.05 206.307 7.19583 207.037 7.4875 207.72C7.7875 208.412 8.19583 209.02 8.7125 209.545C9.2375 210.07 9.84166 210.482 10.525 210.782C11.2167 211.082 11.9583 211.232 12.75 211.232C13.5417 211.232 14.2792 211.082 14.9625 210.782C15.6458 210.482 16.25 210.07 16.775 209.545C17.3 209.02 17.7083 208.416 18 207.732C18.3 207.049 18.45 206.316 18.45 205.532L18.45 202.782L7.05 202.782ZM21.5 228.385L21.5 231.898L4 238.26L4 235.023L7.1 233.898L7.1 226.398L4 225.273L4 222.035L21.5 228.385ZM10.15 227.51L10.15 232.773L17.3625 230.135L10.15 227.51ZM4 242.441L21.5 237.966L21.5 241.116L9.5375 244.166L21.5 247.216L21.5 250.003L9.5375 253.053L21.5 256.091L21.5 259.241L3.99999 254.791L3.99999 251.328L14.6 248.603L4 245.916L4 242.441ZM21.5 265.324L21.5 268.836L3.99999 275.199L3.99999 271.961L7.09999 270.836L7.09999 263.336L3.99999 262.211L3.99999 258.974L21.5 265.324ZM10.15 264.449L10.15 269.711L17.3625 267.074L10.15 264.449ZM3.99999 277.296L21.5 277.296L21.5 284.008C21.5 284.958 21.2625 285.817 20.7875 286.583C20.3125 287.35 19.675 287.958 18.875 288.408C18.0833 288.858 17.2042 289.083 16.2375 289.083C15.4458 289.083 14.7167 288.938 14.05 288.646C13.3917 288.363 12.8208 287.963 12.3375 287.446C11.8542 286.938 11.4875 286.35 11.2375 285.683L3.99999 289.871L3.99999 286.358L10.9625 282.308L10.9625 280.346L3.99999 280.346L3.99999 277.296ZM14.0125 280.346L14.0125 283.658C14.0125 284.092 14.1208 284.488 14.3375 284.846C14.5542 285.204 14.8458 285.492 15.2125 285.708C15.5792 285.925 15.9875 286.033 16.4375 286.033C16.8958 286.033 17.3083 285.925 17.675 285.708C18.0417 285.492 18.3333 285.204 18.55 284.846C18.7667 284.488 18.875 284.092 18.875 283.658L18.875 280.346L14.0125 280.346ZM3.99999 292.262L21.5 292.262L21.5 303.237L18.45 303.237L18.45 295.312L14.9 295.312L14.9 301.599L11.85 301.599L11.85 295.312L7.04999 295.312L7.04999 303.237L3.99999 303.237L3.99999 292.262ZM3.99999 306.056L21.5 306.056L21.5 309.356L9.51249 316.743L21.5 316.743L21.5 319.793L3.99999 319.793L3.99999 316.506L15.9875 309.106L3.99999 309.106L3.99999 306.056ZM3.99999 322.804L21.5 322.804L21.5 333.779L18.45 333.779L18.45 325.854L14.9 325.854L14.9 332.141L11.85 332.141L11.85 325.854L7.04999 325.854L7.04999 333.779L3.99999 333.779L3.99999 322.804ZM3.67499 342.824C3.67499 341.858 3.82499 340.929 4.12499 340.037C4.43332 339.154 4.87082 338.379 5.43749 337.712C6.01249 337.045 6.69999 336.566 7.49999 336.274L8.54999 339.137C8.21666 339.254 7.91249 339.491 7.63749 339.849C7.36249 340.208 7.14166 340.645 6.97499 341.162C6.80832 341.679 6.72499 342.233 6.72499 342.824C6.72499 343.433 6.81666 343.999 6.99999 344.524C7.19166 345.058 7.45416 345.487 7.78749 345.812C8.12916 346.137 8.52499 346.299 8.97499 346.299C9.43332 346.299 9.80832 346.129 10.1 345.787C10.4 345.445 10.6375 345.008 10.8125 344.474C10.9875 343.941 11.1208 343.391 11.2125 342.824C11.4042 341.583 11.7 340.47 12.1 339.487C12.5 338.504 13.0542 337.724 13.7625 337.149C14.4708 336.583 15.3875 336.299 16.5125 336.299C17.5708 336.299 18.4958 336.604 19.2875 337.212C20.0792 337.82 20.6958 338.62 21.1375 339.612C21.5792 340.604 21.8 341.674 21.8 342.824C21.8 343.783 21.65 344.708 21.35 345.599C21.05 346.491 20.6125 347.27 20.0375 347.937C19.4625 348.612 18.7708 349.095 17.9625 349.387L16.925 346.512C17.2583 346.395 17.5625 346.158 17.8375 345.799C18.1125 345.441 18.3292 345.004 18.4875 344.487C18.6542 343.97 18.7375 343.416 18.7375 342.824C18.7458 342.233 18.65 341.67 18.45 341.137C18.2583 340.612 17.9958 340.183 17.6625 339.849C17.3292 339.516 16.9458 339.349 16.5125 339.349C15.9542 339.349 15.5333 339.504 15.25 339.812C14.9667 340.129 14.7583 340.549 14.625 341.074C14.5 341.599 14.3833 342.183 14.275 342.824C14.0917 343.991 13.7833 345.07 13.35 346.062C12.9167 347.054 12.3375 347.849 11.6125 348.449C10.8958 349.049 10.0167 349.349 8.97499 349.349C7.91666 349.349 6.98749 349.049 6.18749 348.449C5.39582 347.849 4.77916 347.054 4.33749 346.062C3.89582 345.07 3.67499 343.991 3.67499 342.824ZM3.67499 358.425C3.67499 357.458 3.82499 356.529 4.12499 355.637C4.43332 354.754 4.87082 353.979 5.43749 353.312C6.01249 352.646 6.69999 352.167 7.49999 351.875L8.54999 354.737C8.21666 354.854 7.91249 355.092 7.63749 355.45C7.36249 355.808 7.14166 356.246 6.97499 356.762C6.80832 357.279 6.72499 357.833 6.72499 358.425C6.72499 359.033 6.81666 359.6 6.99999 360.125C7.19166 360.658 7.45416 361.087 7.78749 361.412C8.12916 361.737 8.52499 361.9 8.97499 361.9C9.43332 361.9 9.80832 361.729 10.1 361.388C10.4 361.046 10.6375 360.608 10.8125 360.075C10.9875 359.542 11.1208 358.992 11.2125 358.425C11.4042 357.183 11.7 356.071 12.1 355.087C12.5 354.104 13.0542 353.325 13.7625 352.75C14.4708 352.183 15.3875 351.9 16.5125 351.9C17.5708 351.9 18.4958 352.204 19.2875 352.812C20.0792 353.421 20.6958 354.221 21.1375 355.213C21.5792 356.204 21.8 357.275 21.8 358.425C21.8 359.383 21.65 360.308 21.35 361.2C21.05 362.092 20.6125 362.871 20.0375 363.537C19.4625 364.213 18.7708 364.696 17.9625 364.988L16.925 362.113C17.2583 361.996 17.5625 361.758 17.8375 361.4C18.1125 361.042 18.3292 360.604 18.4875 360.088C18.6542 359.571 18.7375 359.017 18.7375 358.425C18.7458 357.833 18.65 357.271 18.45 356.737C18.2583 356.213 17.9958 355.783 17.6625 355.45C17.3292 355.117 16.9458 354.95 16.5125 354.95C15.9542 354.95 15.5333 355.104 15.25 355.412C14.9667 355.729 14.7583 356.15 14.625 356.675C14.5 357.2 14.3833 357.783 14.275 358.425C14.0917 359.592 13.7833 360.671 13.35 361.662C12.9167 362.654 12.3375 363.45 11.6125 364.05C10.8958 364.65 10.0167 364.95 8.97499 364.95C7.91666 364.95 6.98749 364.65 6.18749 364.05C5.39582 363.45 4.77916 362.654 4.33749 361.662C3.89582 360.671 3.67499 359.592 3.67499 358.425Z" fill="#505050" />
            <path d="M47.5049 512.353L57.4656 502.392L47.5049 492.431L37.5442 502.392L47.5049 512.353ZM47.5049 0L37.5442 17.2525L57.4656 17.2525L47.5049 0ZM49.2302 502.392L49.2301 15.5272L45.7796 15.5272L45.7797 502.392L49.2302 502.392Z" fill="#505050" />
          </svg>
          <svg width="513" height="57" className=" -mt-14 ml-5 " viewBox="0 0 513 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M130.5 53V35.5H136.875C137.8 35.5 138.633 35.6917 139.375 36.075C140.125 36.45 140.717 36.9917 141.15 37.7C141.592 38.4 141.813 39.2292 141.813 40.1875C141.813 40.6125 141.75 41.0417 141.625 41.475C141.5 41.9083 141.308 42.3 141.05 42.65C140.792 42.9917 140.458 43.2458 140.05 43.4125C140.592 43.5458 141.033 43.7875 141.375 44.1375C141.717 44.4875 141.983 44.9 142.175 45.375C142.367 45.8417 142.496 46.3208 142.563 46.8125C142.638 47.2958 142.675 47.7458 142.675 48.1625C142.675 49.0875 142.446 49.9125 141.988 50.6375C141.529 51.3625 140.913 51.9375 140.138 52.3625C139.371 52.7875 138.521 53 137.588 53H130.5ZM133.55 50.3875H137.275C137.775 50.3875 138.225 50.2667 138.625 50.025C139.025 49.7833 139.346 49.45 139.588 49.025C139.829 48.6 139.95 48.1167 139.95 47.575C139.95 47.1083 139.829 46.6667 139.588 46.25C139.346 45.8333 139.025 45.4958 138.625 45.2375C138.225 44.9792 137.775 44.85 137.275 44.85H133.55V50.3875ZM133.55 42.275H136.525C137.142 42.275 137.667 42.0833 138.1 41.7C138.542 41.3167 138.763 40.8083 138.763 40.175C138.763 39.5 138.542 38.9917 138.1 38.65C137.667 38.3 137.142 38.125 136.525 38.125H133.55V42.275ZM144.685 53V35.5H151.397C152.347 35.5 153.205 35.7375 153.972 36.2125C154.739 36.6875 155.347 37.325 155.797 38.125C156.247 38.9167 156.472 39.7958 156.472 40.7625C156.472 41.5542 156.326 42.2833 156.035 42.95C155.751 43.6083 155.351 44.1792 154.835 44.6625C154.326 45.1458 153.739 45.5125 153.072 45.7625L157.26 53H153.747L149.697 46.0375H147.735V53H144.685ZM147.735 42.9875H151.047C151.48 42.9875 151.876 42.8792 152.235 42.6625C152.593 42.4458 152.88 42.1542 153.097 41.7875C153.314 41.4208 153.422 41.0125 153.422 40.5625C153.422 40.1042 153.314 39.6917 153.097 39.325C152.88 38.9583 152.593 38.6667 152.235 38.45C151.876 38.2333 151.48 38.125 151.047 38.125H147.735V42.9875ZM165.012 35.5H168.525L174.887 53H171.65L170.525 49.9H163.025L161.9 53H158.662L165.012 35.5ZM164.137 46.85H169.4L166.762 39.6375L164.137 46.85ZM176.984 53V35.5H180.284L187.672 47.4875V35.5H190.722V53H187.434L180.034 41.0125V53H176.984ZM193.732 53V35.5H199.532C200.741 35.5 201.87 35.7292 202.92 36.1875C203.978 36.6375 204.907 37.2667 205.707 38.075C206.516 38.875 207.145 39.8042 207.595 40.8625C208.053 41.9125 208.282 43.0417 208.282 44.25C208.282 45.4583 208.053 46.5917 207.595 47.65C207.145 48.7 206.516 49.6292 205.707 50.4375C204.907 51.2375 203.978 51.8667 202.92 52.325C201.87 52.775 200.741 53 199.532 53H193.732ZM196.782 49.95H199.532C200.307 49.95 201.037 49.8042 201.72 49.5125C202.412 49.2125 203.02 48.8042 203.545 48.2875C204.07 47.7625 204.482 47.1583 204.782 46.475C205.082 45.7833 205.232 45.0417 205.232 44.25C205.232 43.4583 205.082 42.7208 204.782 42.0375C204.482 41.3542 204.07 40.75 203.545 40.225C203.02 39.7 202.416 39.2917 201.732 39C201.049 38.7 200.316 38.55 199.532 38.55H196.782V49.95ZM222.835 53.325C221.868 53.325 220.939 53.175 220.048 52.875C219.164 52.5667 218.389 52.1292 217.723 51.5625C217.056 50.9875 216.577 50.3 216.285 49.5L219.148 48.45C219.264 48.7833 219.502 49.0875 219.86 49.3625C220.218 49.6375 220.656 49.8583 221.173 50.025C221.689 50.1917 222.243 50.275 222.835 50.275C223.443 50.275 224.01 50.1833 224.535 50C225.068 49.8083 225.498 49.5458 225.823 49.2125C226.148 48.8708 226.31 48.475 226.31 48.025C226.31 47.5667 226.139 47.1917 225.798 46.9C225.456 46.6 225.018 46.3625 224.485 46.1875C223.952 46.0125 223.402 45.8792 222.835 45.7875C221.593 45.5958 220.481 45.3 219.498 44.9C218.514 44.5 217.735 43.9458 217.16 43.2375C216.593 42.5292 216.31 41.6125 216.31 40.4875C216.31 39.4292 216.614 38.5042 217.223 37.7125C217.831 36.9208 218.631 36.3042 219.623 35.8625C220.614 35.4208 221.685 35.2 222.835 35.2C223.793 35.2 224.718 35.35 225.61 35.65C226.502 35.95 227.281 36.3875 227.948 36.9625C228.623 37.5375 229.106 38.2292 229.398 39.0375L226.523 40.075C226.406 39.7417 226.168 39.4375 225.81 39.1625C225.452 38.8875 225.014 38.6708 224.498 38.5125C223.981 38.3458 223.427 38.2625 222.835 38.2625C222.243 38.2542 221.681 38.35 221.148 38.55C220.623 38.7417 220.193 39.0042 219.86 39.3375C219.527 39.6708 219.36 40.0542 219.36 40.4875C219.36 41.0458 219.514 41.4667 219.823 41.75C220.139 42.0333 220.56 42.2417 221.085 42.375C221.61 42.5 222.193 42.6167 222.835 42.725C224.002 42.9083 225.081 43.2167 226.073 43.65C227.064 44.0833 227.86 44.6625 228.46 45.3875C229.06 46.1042 229.36 46.9833 229.36 48.025C229.36 49.0833 229.06 50.0125 228.46 50.8125C227.86 51.6042 227.064 52.2208 226.073 52.6625C225.081 53.1042 224.002 53.325 222.835 53.325ZM232.209 53V35.5H243.184V38.55H235.259V42.1H241.546V45.15H235.259V49.95H243.184V53H232.209ZM246.003 53V35.5H252.715C253.665 35.5 254.524 35.7375 255.29 36.2125C256.057 36.6875 256.665 37.325 257.115 38.125C257.565 38.9167 257.79 39.7958 257.79 40.7625C257.79 41.5542 257.645 42.2833 257.353 42.95C257.07 43.6083 256.67 44.1792 256.153 44.6625C255.645 45.1458 255.057 45.5125 254.39 45.7625L258.578 53H255.065L251.015 46.0375H249.053V53H246.003ZM249.053 42.9875H252.365C252.799 42.9875 253.195 42.8792 253.553 42.6625C253.911 42.4458 254.199 42.1542 254.415 41.7875C254.632 41.4208 254.74 41.0125 254.74 40.5625C254.74 40.1042 254.632 39.6917 254.415 39.325C254.199 38.9583 253.911 38.6667 253.553 38.45C253.195 38.2333 252.799 38.125 252.365 38.125H249.053V42.9875ZM266.245 53L259.895 35.5H263.133L268.195 49.4375L273.27 35.5H276.495L270.145 53H266.245ZM279.117 53V35.5H282.167V53H279.117ZM293.654 53.325C292.47 53.325 291.358 53.0917 290.316 52.625C289.275 52.15 288.358 51.4958 287.566 50.6625C286.783 49.8292 286.166 48.8667 285.716 47.775C285.275 46.675 285.054 45.5 285.054 44.25C285.054 42.9917 285.275 41.8167 285.716 40.725C286.166 39.625 286.783 38.6625 287.566 37.8375C288.358 37.0042 289.275 36.3542 290.316 35.8875C291.358 35.4125 292.47 35.175 293.654 35.175C295.07 35.175 296.375 35.5042 297.566 36.1625C298.758 36.8125 299.745 37.6833 300.529 38.775L297.804 40.2375C297.312 39.6292 296.7 39.1417 295.966 38.775C295.241 38.4083 294.47 38.225 293.654 38.225C292.887 38.225 292.166 38.3833 291.491 38.7C290.816 39.0083 290.225 39.4417 289.716 40C289.208 40.55 288.812 41.1917 288.529 41.925C288.245 42.65 288.104 43.425 288.104 44.25C288.104 45.0833 288.245 45.8625 288.529 46.5875C288.82 47.3125 289.22 47.9542 289.729 48.5125C290.237 49.0625 290.825 49.4958 291.491 49.8125C292.166 50.1208 292.887 50.275 293.654 50.275C294.487 50.275 295.262 50.0917 295.979 49.725C296.704 49.35 297.312 48.8583 297.804 48.25L300.529 49.725C299.745 50.8083 298.758 51.6792 297.566 52.3375C296.375 52.9958 295.07 53.325 293.654 53.325ZM302.888 53V35.5H313.863V38.55H305.938V42.1H312.225V45.15H305.938V49.95H313.863V53H302.888ZM322.614 53V35.5H328.414C329.623 35.5 330.752 35.7292 331.802 36.1875C332.86 36.6375 333.789 37.2667 334.589 38.075C335.398 38.875 336.027 39.8042 336.477 40.8625C336.935 41.9125 337.164 43.0417 337.164 44.25C337.164 45.4583 336.935 46.5917 336.477 47.65C336.027 48.7 335.398 49.6292 334.589 50.4375C333.789 51.2375 332.86 51.8667 331.802 52.325C330.752 52.775 329.623 53 328.414 53H322.614ZM325.664 49.95H328.414C329.189 49.95 329.918 49.8042 330.602 49.5125C331.293 49.2125 331.902 48.8042 332.427 48.2875C332.952 47.7625 333.364 47.1583 333.664 46.475C333.964 45.7833 334.114 45.0417 334.114 44.25C334.114 43.4583 333.964 42.7208 333.664 42.0375C333.364 41.3542 332.952 40.75 332.427 40.225C331.902 39.7 331.298 39.2917 330.614 39C329.931 38.7 329.198 38.55 328.414 38.55H325.664V49.95ZM339.191 53V35.5H350.166V38.55H342.241V42.1H348.529V45.15H342.241V49.95H350.166V53H339.191ZM352.985 53V35.5H359.235C360.185 35.5 361.044 35.7375 361.81 36.2125C362.585 36.6875 363.198 37.325 363.648 38.125C364.098 38.925 364.323 39.8042 364.323 40.7625C364.323 41.7458 364.09 42.6375 363.623 43.4375C363.165 44.2292 362.548 44.8625 361.773 45.3375C360.998 45.8042 360.152 46.0375 359.235 46.0375H356.035V53H352.985ZM356.035 42.9875H358.91C359.344 42.9875 359.74 42.8792 360.098 42.6625C360.456 42.4458 360.74 42.1542 360.948 41.7875C361.165 41.4208 361.273 41.0125 361.273 40.5625C361.273 40.1042 361.165 39.6917 360.948 39.325C360.74 38.9583 360.456 38.6667 360.098 38.45C359.74 38.2333 359.344 38.125 358.91 38.125H356.035V42.9875ZM379.492 35.5V38.55H374.142V53H371.092V38.55H365.742V35.5H379.492ZM392.289 35.5H395.339V53H392.289V45.15H385.039V53H381.989V35.5H385.039V42.1H392.289V35.5Z" fill="#505050" />
            <path d="M0.039298 10.8867L10 20.8474L19.9607 10.8867L10 0.925998L0.039298 10.8867ZM512.392 10.8867L495.14 0.925998V20.8474L512.392 10.8867ZM10 12.612L496.865 12.612V9.16147L10 9.16147V12.612Z" fill="#505050" />
          </svg>


          <svg
            width="616"
            viewBox="0 0 616 393"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" h-[900px] md:h-[393px] !absolute -top-52 md:top-12 !z-50 left-24 "
          >
            {rectangles.map((rect, index) => {
              const size = 27.604; // Assuming this is the size for the width and height
              const textPos = getTextPosition(rect.x, rect.y, size);
              return (
                <g key={index}>
                  <motion.rect
                    x={rect.x}
                    y={rect.y}
                    width="27.604"
                    height="27.604"
                    transform={`rotate(-45 ${rect.x} ${rect.y})`}
                    fill={activeRects.includes(index) ? "white" : rect.fill}
                    animate={{
                      fill: activeRects.includes(index) ? "white" : "#505050",
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleRectClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                  {/* <text
                    x={textPos.x}
                    y={textPos.y}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="white" // Adjust color as needed
                    transform={`rotate(45 ${textPos.x} ${textPos.y})`}
                    style={{ cursor: "pointer" }}
                  >
                    {index}
                  </text> */}
                </g>
              );
            })}
            {strokedRectangles.map((rect, index) => {
              return (
                <g key={`stroke-${index}`} className={"cursor-pointer"}>
                  <motion.rect
                    x={rect.x}
                    y={rect.y}
                    width="35.4598"
                    height="35.4598"
                    transform={`rotate(-45 ${rect.x} ${rect.y})`}
                    fill={rect.fill}
                    stroke={
                      getCommonIndexes(activeRects, data)[0] === rect.id
                        ? "white"
                        : "#505050"
                    }
                    strokeWidth={rect.strokeWidth}
                    style={{ cursor: "pointer" }}
                  />
                </g>
              );
            })}
            <motion.path
              key={pathKey}
              d={linePath}
              stroke="white"
              strokeWidth="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
        <div className=" bg-black md:w-3/6 pl-0 xs:pl-5 lg:pl-20 -mt-5 xs:mt-0 flex flex-col h-full justify-center items-start " >
          {isLoading ? (
            <BlurIn>
              <h1 className=" text-white text-3xl xl:text-4xl font-semibold ">{item?.title}</h1>
              <p className=" text-[#fff]/70 text-xl xl:text-2xl max-w-[400px] ">{item?.description}</p>
            </BlurIn>
          ) : (
            <>
              <TypingEffect delay={"0.04"} pathKey={pathKey} text={item?.title} className="  text-white text-3xl xl:text-4xl font-semibold " />
              <TypingEffect
                pathKey={pathKey}
                text={item?.description}
                className=" text-[#505050] text-xl xl:text-2xl  "
                containerClass=" max-w-[400px] "
                delay={"0.01"}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}




const TypingEffect = ({ text, className, pathKey, containerClass, delay }) => {

  const typingEffect = {
    hidden: { opacity: 0 },
    visible: custom => ({
      opacity: 1,
      transition: {
        delay: custom * delay,
      },
    }),
  };


  return (
    <motion.div
      className={containerClass}
      key={pathKey}
      initial="hidden"
      animate="visible"
      transition={{ delay: 2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.04,
          },
        },
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} custom={index} className={className} variants={typingEffect}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}




const BlurIn = ({ children, className, variant, duration = 3 }) => {
  const defaultVariants = {
    hidden: { filter: "blur(5px)", opacity: 1 },
    visible: { filter: "blur(5px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration, }}
      variants={combinedVariants}
      className={
        `${className}` +
        " w-full h-full  flex flex-col  justify-center items-start  max-w-[450px]  "
      }
    >
      {children}
    </motion.div>
  );
};











// import React, { useEffect } from 'react';

// const Coifficient = () => {
//     useEffect(() => {
//         const canvas = document.getElementById('graphCanvas');
//         const ctx = canvas.getContext('2d');

//         const gridSize = 7;
//         const diamondSize = 40;
//         const startX = 100;
//         const startY = 50;
//         const offsetX = 40; // Horizontal distance between centers of diamonds
//         const offsetY = 40; // Vertical distance between centers of diamonds
//         const gap = 20; // Gap between diamonds

//         const specialDiamonds = [
//             { x: 0, y: 4 },
//             { x: 1, y: 4 },
//             { x: 2, y: 5 },
//             { x: 3, y: 6 },
//             { x: 4, y: 6 },
//             { x: 5, y: 6 },
//             { x: 6, y: 6 }
//         ];

//         const specialDiamonds2 = [
//             { x: 2, y: 5 },
//             { x: 2, y: 2 },
//             { x: 4, y: 4 },
//             { x: 5, y: 5 }
//         ];

//         const diamondPositions = [];

//         const drawDiamond = (ctx, x, y, size, isSpecial = false, borderColor = 'black', doubleBorder = false) => {
//             ctx.beginPath();
//             ctx.moveTo(x, y - size / 2);
//             ctx.lineTo(x + size / 2, y);
//             ctx.lineTo(x, y + size / 2);
//             ctx.lineTo(x - size / 2, y);
//             ctx.closePath();
//             ctx.fillStyle = isSpecial ? 'white' : 'gray';
//             ctx.fill();
//             if (doubleBorder) {
//                 ctx.strokeStyle = 'white';
//                 ctx.lineWidth = 4;
//                 ctx.stroke();
//                 ctx.strokeStyle = borderColor;
//                 ctx.lineWidth = 2;
//                 ctx.stroke();
//             } else if (borderColor) {
//                 ctx.strokeStyle = borderColor;
//                 ctx.lineWidth = 2;
//                 ctx.stroke();
//             }
//         };

//         const drawGrid = () => {
//             for (let i = 0; i < gridSize; i++) {
//                 for (let j = 0; j < gridSize; j++) {
//                     const x = startX + j * (offsetX + gap);
//                     const y = startY + i * (offsetY + gap);
//                     const isSpecial = specialDiamonds.some(d => d.x === j && d.y === i);
//                     const isSpecial2 = specialDiamonds2.some(d => d.x === j && d.y === i);
//                     diamondPositions.push({ x, y, size: diamondSize, isSpecial, isSpecial2 });
//                     drawDiamond(ctx, x, y, diamondSize, isSpecial, isSpecial ? 'black' : 'black', isSpecial2);
//                 }
//             }
//         };

//         const drawConnections = () => {
//             const specialDiamondPositions = diamondPositions.filter(pos => pos.isSpecial);
//             if (specialDiamondPositions.length > 0) {
//                 ctx.strokeStyle = 'white';
//                 ctx.lineWidth = 2;
//                 ctx.beginPath();
//                 ctx.moveTo(specialDiamondPositions[0].x, specialDiamondPositions[0].y);
//                 for (let i = 1; i < specialDiamondPositions.length; i++) {
//                     ctx.lineTo(specialDiamondPositions[i].x, specialDiamondPositions[i].y);
//                 }
//                 ctx.stroke();
//             }
//         };

//         const drawAxes = () => {
//             ctx.strokeStyle = 'white';
//             ctx.lineWidth = 2;

//             // Function to draw a diamond
//             const drawDiamond = (x, y, size) => {
//                 ctx.beginPath();
//                 ctx.moveTo(x, y - size); // Top
//                 ctx.lineTo(x + size, y); // Right
//                 ctx.lineTo(x, y + size); // Bottom
//                 ctx.lineTo(x - size, y); // Left
//                 ctx.closePath();
//                 ctx.fill();
//             };

//             // Function to draw an arrow
//             const drawArrow = (x, y, angle, size) => {
//                 ctx.beginPath();
//                 ctx.moveTo(x, y);
//                 ctx.lineTo(x - size * Math.cos(angle - Math.PI / 6), y - size * Math.sin(angle - Math.PI / 6));
//                 ctx.moveTo(x, y);
//                 ctx.lineTo(x - size * Math.cos(angle + Math.PI / 6), y - size * Math.sin(angle + Math.PI / 6));
//                 ctx.stroke();
//             };

//             // Define the start and end points for the Y axis
//             const yStartX = startX - 50;
//             const yStartY = startY - 19;
//             const yEndX = startX - 50;
//             const yEndY = startY + 7.2 * (offsetY + gap);

//             // Draw Y axis
//             ctx.beginPath();
//             ctx.moveTo(yStartX, yStartY);
//             ctx.lineTo(yEndX, yEndY);
//             ctx.stroke();
//             drawArrow(yStartX, yStartY, -Math.PI / 2, 10); // Draw arrow at the start
//             drawDiamond(yEndX, yEndY, 5); // Draw diamond at the end

//             // Define the start and end points for the X axis
//             const xStartX = startX - 75;
//             const xStartY = startY + gridSize * (37 + gap) + 6.5;
//             const xEndX = startX + gridSize * (35 + gap);
//             const xEndY = startY + 6.5 * (offsetY + gap) + 15;

//             // Draw X axis
//             ctx.beginPath();
//             ctx.moveTo(xStartX, xStartY);
//             ctx.lineTo(xEndX, xEndY);
//             ctx.stroke();
//             drawDiamond(xStartX, xStartY, 5); // Draw diamond at the start
//             drawArrow(xEndX, xEndY, 0, 10); // Draw arrow at the end
//         };

//         const drawText = () => {
//             ctx.save();
//             ctx.translate(20, canvas.height / 2.2);
//             ctx.rotate(-Math.PI / 2);
//             ctx.textAlign = "center";
//             ctx.fillStyle = "white";
//             ctx.font = "14px sans-serif";
//             ctx.fillText("BRAND AWARENESS", 0, 0);
//             ctx.restore();

//             ctx.textAlign = "center";
//             ctx.fillStyle = "white";
//             ctx.font = "14px sans-serif";
//             ctx.fillText("BRAND SERVICE DEPTH", canvas.width / 2.2, canvas.height - 47);
//         };

//         const initCanvas = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             drawGrid();
//             drawConnections();
//             drawAxes();
//             // drawText();
//         };

//         initCanvas();

//         // Add click event listener
//         canvas.addEventListener('click', (event) => {
//             const rect = canvas.getBoundingClientRect();
//             const x = event.clientX - rect.left;
//             const y = event.clientY - rect.top;

//             diamondPositions.forEach((diamond) => {
//                 if (isPointInDiamond(x, y, diamond)) {
//                     alert(`Diamond clicked at (${diamond.x}, ${diamond.y})`);
//                 }
//             });
//         });

//         const isPointInDiamond = (px, py, diamond) => {
//             const { x, y, size } = diamond;
//             return Math.abs(px - x) <= size / 2 && Math.abs(py - y) <= size / 2;
//         };

//     }, []);

//     return (
//         <canvas id="graphCanvas" width="500" height="500"></canvas>
//     );
// };

// export default Coifficient; 