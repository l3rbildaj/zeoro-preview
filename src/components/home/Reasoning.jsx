import { useScroll, useTransform,motion } from "framer-motion";
import { useRef } from "react";

function Reasoning() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const combinedPathData = "M166.129 114.271 C171.26 114.018, 176.454 113.848, 181.703 113.763 L181.784 118.762 C184.343 118.721, 186.915 118.7, 189.5 118.7 C192.085 118.7, 194.657 118.721, 197.216 118.762 L197.297 113.763 C202.546 113.848, 207.74 114.018, 212.871 114.271 L212.625 119.265 C217.815 119.52, 222.938 119.86, 227.985 120.281 L228.401 115.299 C233.652 115.737, 238.823 116.262, 243.905 116.87 L243.311 121.835 C248.493 122.455, 253.578 123.162, 258.556 123.952 L259.34 119.014 C264.568 119.843, 269.682 120.763, 274.669 121.769 L273.681 126.67 C278.815 127.705, 283.808 128.831, 288.648 130.042 L289.861 125.191 C295.036 126.486, 300.044 127.879, 304.868 129.362 L303.399 134.141 C308.434 135.689, 313.256 137.334, 317.846 139.069 L319.614 134.392 C324.667 136.301, 329.457 138.321, 333.961 140.44 L331.831 144.964 C336.625 147.221, 341.06 149.582, 345.11 152.033 L347.699 147.756 C352.419 150.612, 356.669 153.603, 360.404 156.713 L357.205 160.555 C361.262 163.933, 364.594 167.392, 367.187 170.89 L371.204 167.912 C374.516 172.379, 376.826 177.018, 378.031 181.788 L373.184 183.013 C373.726 185.159, 374 187.321, 374 189.5 C374 191.679, 373.726 193.841, 373.184 195.987 L378.031 197.212 C376.826 201.982, 374.516 206.621, 371.204 211.088 L367.187 208.11 C364.594 211.608, 361.262 215.067, 357.205 218.445 L360.404 222.287 C356.669 225.397, 352.419 228.388, 347.699 231.244 L345.11 226.967 C341.06 229.418, 336.625 231.779, 331.831 234.036 L333.961 238.56 C329.457 240.68, 324.667 242.699, 319.614 244.608 L317.846 239.931 C313.256 241.666, 308.434 243.312, 303.399 244.859 L304.868 249.639 C300.044 251.121, 295.036 252.514, 289.861 253.809 L288.648 248.958 C283.808 250.169, 278.815 251.295, 273.681 252.33 L274.669 257.231 C269.682 258.237, 264.568 259.157, 259.34 259.986 L258.556 255.048 C253.578 255.838, 248.493 256.545, 243.311 257.165 L243.905 262.13 C238.823 262.738, 233.652 263.263, 228.401 263.701 L227.985 258.719 C222.938 259.14, 217.815 259.48, 212.625 259.735 L212.871 264.729 C207.74 264.982, 202.546 265.152, 197.297 265.237 L197.216 260.238 C194.657 260.279, 192.085 260.3, 189.5 260.3 C186.915 260.3, 184.343 260.279, 181.784 260.238 L181.703 265.237 C176.454 265.152, 171.26 264.982, 166.129 264.729 L166.375 259.735 C161.185 259.48, 156.062 259.14, 151.015 258.719 L150.599 263.701 C145.348 263.263, 140.177 262.738, 135.095 262.13 L135.689 257.165 C130.507 256.545, 125.422 255.838, 120.444 255.048 L119.66 259.986 C114.432 259.157, 109.318 258.237, 104.331 257.231 L105.319 252.33 C100.185 251.295, 95.1922 250.169, 90.3525 248.958 L89.1388 253.809 C83.9635 252.514, 78.9558 251.122, 74.1316 249.639 L75.6007 244.859 C70.5658 243.312, 65.7441 241.666, 61.1537 239.931 L59.3862 244.608 C54.3334 242.699, 49.5431 240.68, 45.0393 238.56 L47.1686 234.036 C42.3747 231.779, 37.9399 229.418, 33.8895 226.967 L31.3009 231.244 C26.5808 228.388, 22.3313 225.397, 18.5964 222.287 L21.7954 218.445 C17.7378 215.067, 14.4059 211.608, 11.8126 208.11 L7.79614 211.088 C4.48415 206.621, 2.17365 201.982, 0.968712 197.212 L5.81642 195.987 C5.27413 193.841, 5 191.679, 5 189.5 C5 187.321, 5.27413 185.159, 5.81643 183.013 L0.968716 181.788 C2.17366 177.018, 4.48417 172.379, 7.79615 167.912 L11.8126 170.89 C14.4059 167.392, 17.7378 163.933, 21.7954 160.555 L18.5964 156.713 C22.3313 153.603, 26.5809 150.612, 31.301 147.756 L33.8896 152.033 C37.9399 149.582, 42.3747 147.221, 47.1686 144.964 L45.0393 140.44 C49.5431 138.321, 54.3334 136.301, 59.3862 134.392 L61.1537 139.069 C65.7441 137.334, 70.5658 135.689, 75.6007 134.141 L74.1316 129.362 C78.9558 127.879, 83.9635 126.486, 89.1388 125.191 L90.3525 130.042 C95.1922 128.831, 100.185 127.705, 105.319 126.67 L104.331 121.769 C109.318 120.763, 114.432 119.843, 119.66 119.014 L120.444 123.952 C125.422 123.162, 130.507 122.455, 135.689 121.835 L135.095 116.87 C140.177 116.262, 145.348 115.737, 150.599 115.299 L151.015 120.281 C156.062 119.86, 161.185 119.52, 166.375 119.265 L166.129 114.271 Z";
  

  return (
    <div ref={container} className=" h-[300vh] px-10 ">
      <div className=" sticky top-0  h-screen ">
        <h1 className=" uppercase text-4xl pt-10 font-bold ">THE REASONING</h1>
        <div className=" flex justify-center items-center h-full pb-24 gap-20 ">
        <svg width="379" height="379" viewBox="0 0 379 379" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="189.5" cy="189.5" r="188" stroke="white" stroke-width="3" stroke-dasharray="20 20"/>
          <motion.path style={{
            pathLength,
          }} d="M264.729 166.129C264.982 171.26 265.152 176.454 265.237 181.703L260.238 181.784C260.279 184.343 260.3 186.915 260.3 189.5C260.3 192.085 260.279 194.657 260.238 197.216L265.237 197.297C265.152 202.546 264.982 207.74 264.729 212.871L259.735 212.625C259.48 217.815 259.14 222.938 258.719 227.985L263.702 228.401C263.263 233.652 262.738 238.823 262.13 243.905L257.165 243.311C256.545 248.493 255.838 253.578 255.048 258.556L259.986 259.34C259.157 264.568 258.237 269.682 257.231 274.669L252.33 273.681C251.295 278.815 250.169 283.808 248.958 288.648L253.809 289.861C252.514 295.036 251.122 300.044 249.639 304.868L244.859 303.399C243.312 308.434 241.666 313.256 239.931 317.846L244.609 319.614C242.699 324.667 240.68 329.457 238.56 333.961L234.036 331.831C231.78 336.625 229.418 341.06 226.967 345.11L231.245 347.699C228.388 352.419 225.397 356.669 222.287 360.404L218.445 357.205C215.067 361.262 211.608 364.594 208.11 367.187L211.088 371.204C206.621 374.516 201.982 376.826 197.212 378.031L195.988 373.184C193.841 373.726 191.679 374 189.5 374C187.321 374 185.16 373.726 183.013 373.184L181.788 378.031C177.018 376.826 172.379 374.516 167.912 371.204L170.89 367.187C167.392 364.594 163.933 361.262 160.556 357.205L156.713 360.404C153.604 356.669 150.612 352.419 147.756 347.699L152.034 345.11C149.583 341.06 147.221 336.625 144.964 331.831L140.441 333.961C138.321 329.457 136.301 324.667 134.392 319.614L139.069 317.846C137.334 313.256 135.689 308.434 134.141 303.399L129.362 304.868C127.879 300.044 126.487 295.036 125.192 289.861L130.042 288.648C128.831 283.808 127.705 278.815 126.67 273.681L121.769 274.669C120.763 269.682 119.844 264.568 119.014 259.34L123.952 258.556C123.162 253.578 122.455 248.493 121.835 243.311L116.87 243.905C116.262 238.823 115.737 233.652 115.299 228.401L120.282 227.985C119.86 222.938 119.52 217.815 119.265 212.625L114.271 212.871C114.019 207.74 113.848 202.546 113.763 197.297L118.763 197.216C118.721 194.657 118.7 192.085 118.7 189.5C118.7 186.915 118.721 184.343 118.763 181.784L113.763 181.703C113.848 176.454 114.019 171.26 114.271 166.129L119.265 166.375C119.52 161.185 119.86 156.062 120.282 151.015L115.299 150.599C115.737 145.348 116.262 140.177 116.87 135.095L121.835 135.689C122.455 130.507 123.162 125.422 123.952 120.444L119.014 119.66C119.844 114.432 120.764 109.318 121.769 104.331L126.67 105.319C127.705 100.185 128.831 95.1922 130.042 90.3525L125.192 89.1388C126.487 83.9635 127.879 78.9558 129.362 74.1316L134.141 75.6007C135.689 70.5658 137.334 65.7441 139.069 61.1537L134.392 59.3862C136.301 54.3334 138.321 49.5431 140.441 45.0393L144.965 47.1686C147.221 42.3747 149.583 37.9399 152.034 33.8895L147.756 31.3009C150.612 26.5808 153.604 22.3313 156.713 18.5964L160.556 21.7954C163.933 17.7378 167.392 14.4059 170.89 11.8126L167.912 7.79614C172.379 4.48416 177.018 2.17366 181.788 0.968715L183.013 5.81643C185.16 5.27413 187.321 5 189.5 5C191.679 5 193.841 5.27413 195.988 5.81643L197.212 0.968719C201.982 2.17366 206.621 4.48417 211.088 7.79616L208.11 11.8126C211.608 14.4059 215.067 17.7378 218.445 21.7954L222.288 18.5964C225.397 22.3313 228.388 26.5809 231.245 31.301L226.967 33.8896C229.418 37.9399 231.78 42.3747 234.036 47.1686L238.56 45.0393C240.68 49.5431 242.699 54.3334 244.609 59.3862L239.931 61.1537C241.666 65.7441 243.312 70.5658 244.859 75.6007L249.639 74.1316C251.122 78.9558 252.514 83.9635 253.809 89.1388L248.958 90.3525C250.169 95.1922 251.295 100.185 252.33 105.319L257.231 104.331C258.237 109.318 259.157 114.432 259.986 119.66L255.048 120.444C255.838 125.422 256.545 130.507 257.165 135.689L262.13 135.095C262.738 140.177 263.263 145.348 263.702 150.599L258.719 151.015C259.14 156.062 259.48 161.185 259.735 166.375L264.729 166.129Z" stroke="white" stroke-width="10" stroke-dasharray="15 15"/>
          <circle cx="189.5" cy="189.5" r="184.5" transform="rotate(-90 189.5 189.5)" stroke="white" stroke-width="10" stroke-dasharray="15 15"/>
          <motion.path style={{
            pathLength,
          }} d="M166.129 114.271C171.26 114.018 176.454 113.848 181.703 113.763L181.784 118.762C184.343 118.721 186.915 118.7 189.5 118.7C192.085 118.7 194.657 118.721 197.216 118.762L197.297 113.763C202.546 113.848 207.74 114.018 212.871 114.271L212.625 119.265C217.815 119.52 222.938 119.86 227.985 120.281L228.401 115.299C233.652 115.737 238.823 116.262 243.905 116.87L243.311 121.835C248.493 122.455 253.578 123.162 258.556 123.952L259.34 119.014C264.568 119.843 269.682 120.763 274.669 121.769L273.681 126.67C278.815 127.705 283.808 128.831 288.648 130.042L289.861 125.191C295.036 126.486 300.044 127.879 304.868 129.362L303.399 134.141C308.434 135.689 313.256 137.334 317.846 139.069L319.614 134.392C324.667 136.301 329.457 138.321 333.961 140.44L331.831 144.964C336.625 147.221 341.06 149.582 345.11 152.033L347.699 147.756C352.419 150.612 356.669 153.603 360.404 156.713L357.205 160.555C361.262 163.933 364.594 167.392 367.187 170.89L371.204 167.912C374.516 172.379 376.826 177.018 378.031 181.788L373.184 183.013C373.726 185.159 374 187.321 374 189.5C374 191.679 373.726 193.841 373.184 195.987L378.031 197.212C376.826 201.982 374.516 206.621 371.204 211.088L367.187 208.11C364.594 211.608 361.262 215.067 357.205 218.445L360.404 222.287C356.669 225.397 352.419 228.388 347.699 231.244L345.11 226.967C341.06 229.418 336.625 231.779 331.831 234.036L333.961 238.56C329.457 240.68 324.667 242.699 319.614 244.608L317.846 239.931C313.256 241.666 308.434 243.312 303.399 244.859L304.868 249.639C300.044 251.121 295.036 252.514 289.861 253.809L288.648 248.958C283.808 250.169 278.815 251.295 273.681 252.33L274.669 257.231C269.682 258.237 264.568 259.157 259.34 259.986L258.556 255.048C253.578 255.838 248.493 256.545 243.311 257.165L243.905 262.13C238.823 262.738 233.652 263.263 228.401 263.701L227.985 258.719C222.938 259.14 217.815 259.48 212.625 259.735L212.871 264.729C207.74 264.982 202.546 265.152 197.297 265.237L197.216 260.238C194.657 260.279 192.085 260.3 189.5 260.3C186.915 260.3 184.343 260.279 181.784 260.238L181.703 265.237C176.454 265.152 171.26 264.982 166.129 264.729L166.375 259.735C161.185 259.48 156.062 259.14 151.015 258.719L150.599 263.701C145.348 263.263 140.177 262.738 135.095 262.13L135.689 257.165C130.507 256.545 125.422 255.838 120.444 255.048L119.66 259.986C114.432 259.157 109.318 258.237 104.331 257.231L105.319 252.33C100.185 251.295 95.1922 250.169 90.3525 248.958L89.1388 253.809C83.9635 252.514 78.9558 251.122 74.1316 249.639L75.6007 244.859C70.5658 243.312 65.7441 241.666 61.1537 239.931L59.3862 244.608C54.3334 242.699 49.5431 240.68 45.0393 238.56L47.1686 234.036C42.3747 231.779 37.9399 229.418 33.8895 226.967L31.3009 231.244C26.5808 228.388 22.3313 225.397 18.5964 222.287L21.7954 218.445C17.7378 215.067 14.4059 211.608 11.8126 208.11L7.79614 211.088C4.48415 206.621 2.17365 201.982 0.968712 197.212L5.81642 195.987C5.27413 193.841 5 191.679 5 189.5C5 187.321 5.27413 185.159 5.81643 183.013L0.968716 181.788C2.17366 177.018 4.48417 172.379 7.79615 167.912L11.8126 170.89C14.4059 167.392 17.7378 163.933 21.7954 160.555L18.5964 156.713C22.3313 153.603 26.5809 150.612 31.301 147.756L33.8896 152.033C37.9399 149.582 42.3747 147.221 47.1686 144.964L45.0393 140.44C49.5431 138.321 54.3334 136.301 59.3862 134.392L61.1537 139.069C65.7441 137.334 70.5658 135.689 75.6007 134.141L74.1316 129.362C78.9558 127.879 83.9635 126.486 89.1388 125.191L90.3525 130.042C95.1922 128.831 100.185 127.705 105.319 126.67L104.331 121.769C109.318 120.763 114.432 119.843 119.66 119.014L120.444 123.952C125.422 123.162 130.507 122.455 135.689 121.835L135.095 116.87C140.177 116.262 145.348 115.737 150.599 115.299L151.015 120.281C156.062 119.86 161.185 119.52 166.375 119.265L166.129 114.271Z" stroke="white" stroke-width="10" stroke-dasharray="15 15"/>
          <circle cx="189.5" cy="189.5" r="188" stroke="white" stroke-width="3" stroke-dasharray="20 20"/>
          <motion.path style={{
            pathLength,
          }} d="M264.729 166.129C264.982 171.26 265.152 176.454 265.237 181.703L260.238 181.784C260.279 184.343 260.3 186.915 260.3 189.5C260.3 192.085 260.279 194.657 260.238 197.216L265.237 197.297C265.152 202.546 264.982 207.74 264.729 212.871L259.735 212.625C259.48 217.815 259.14 222.938 258.719 227.985L263.702 228.401C263.263 233.652 262.738 238.823 262.13 243.905L257.165 243.311C256.545 248.493 255.838 253.578 255.048 258.556L259.986 259.34C259.157 264.568 258.237 269.682 257.231 274.669L252.33 273.681C251.295 278.815 250.169 283.808 248.958 288.648L253.809 289.861C252.514 295.036 251.122 300.044 249.639 304.868L244.859 303.399C243.312 308.434 241.666 313.256 239.931 317.846L244.609 319.614C242.699 324.667 240.68 329.457 238.56 333.961L234.036 331.831C231.78 336.625 229.418 341.06 226.967 345.11L231.245 347.699C228.388 352.419 225.397 356.669 222.287 360.404L218.445 357.205C215.067 361.262 211.608 364.594 208.11 367.187L211.088 371.204C206.621 374.516 201.982 376.826 197.212 378.031L195.988 373.184C193.841 373.726 191.679 374 189.5 374C187.321 374 185.16 373.726 183.013 373.184L181.788 378.031C177.018 376.826 172.379 374.516 167.912 371.204L170.89 367.187C167.392 364.594 163.933 361.262 160.556 357.205L156.713 360.404C153.604 356.669 150.612 352.419 147.756 347.699L152.034 345.11C149.583 341.06 147.221 336.625 144.964 331.831L140.441 333.961C138.321 329.457 136.301 324.667 134.392 319.614L139.069 317.846C137.334 313.256 135.689 308.434 134.141 303.399L129.362 304.868C127.879 300.044 126.487 295.036 125.192 289.861L130.042 288.648C128.831 283.808 127.705 278.815 126.67 273.681L121.769 274.669C120.763 269.682 119.844 264.568 119.014 259.34L123.952 258.556C123.162 253.578 122.455 248.493 121.835 243.311L116.87 243.905C116.262 238.823 115.737 233.652 115.299 228.401L120.282 227.985C119.86 222.938 119.52 217.815 119.265 212.625L114.271 212.871C114.019 207.74 113.848 202.546 113.763 197.297L118.763 197.216C118.721 194.657 118.7 192.085 118.7 189.5C118.7 186.915 118.721 184.343 118.763 181.784L113.763 181.703C113.848 176.454 114.019 171.26 114.271 166.129L119.265 166.375C119.52 161.185 119.86 156.062 120.282 151.015L115.299 150.599C115.737 145.348 116.262 140.177 116.87 135.095L121.835 135.689C122.455 130.507 123.162 125.422 123.952 120.444L119.014 119.66C119.844 114.432 120.764 109.318 121.769 104.331L126.67 105.319C127.705 100.185 128.831 95.1922 130.042 90.3525L125.192 89.1388C126.487 83.9635 127.879 78.9558 129.362 74.1316L134.141 75.6007C135.689 70.5658 137.334 65.7441 139.069 61.1537L134.392 59.3862C136.301 54.3334 138.321 49.5431 140.441 45.0393L144.965 47.1686C147.221 42.3747 149.583 37.9399 152.034 33.8895L147.756 31.3009C150.612 26.5808 153.604 22.3313 156.713 18.5964L160.556 21.7954C163.933 17.7378 167.392 14.4059 170.89 11.8126L167.912 7.79614C172.379 4.48416 177.018 2.17366 181.788 0.968715L183.013 5.81643C185.16 5.27413 187.321 5 189.5 5C191.679 5 193.841 5.27413 195.988 5.81643L197.212 0.968719C201.982 2.17366 206.621 4.48417 211.088 7.79616L208.11 11.8126C211.608 14.4059 215.067 17.7378 218.445 21.7954L222.288 18.5964C225.397 22.3313 228.388 26.5809 231.245 31.301L226.967 33.8896C229.418 37.9399 231.78 42.3747 234.036 47.1686L238.56 45.0393C240.68 49.5431 242.699 54.3334 244.609 59.3862L239.931 61.1537C241.666 65.7441 243.312 70.5658 244.859 75.6007L249.639 74.1316C251.122 78.9558 252.514 83.9635 253.809 89.1388L248.958 90.3525C250.169 95.1922 251.295 100.185 252.33 105.319L257.231 104.331C258.237 109.318 259.157 114.432 259.986 119.66L255.048 120.444C255.838 125.422 256.545 130.507 257.165 135.689L262.13 135.095C262.738 140.177 263.263 145.348 263.702 150.599L258.719 151.015C259.14 156.062 259.48 161.185 259.735 166.375L264.729 166.129Z" stroke="white" stroke-width="10" stroke-dasharray="15 15"/>
          <circle cx="189.5" cy="189.5" r="184.5" transform="rotate(-90 189.5 189.5)" stroke="white" stroke-width="10" stroke-dasharray="15 15"/>
          <motion.path style={{
            pathLength,
          }} d="M166.129 114.271C171.26 114.018 176.454 113.848 181.703 113.763L181.784 118.762C184.343 118.721 186.915 118.7 189.5 118.7C192.085 118.7 194.657 118.721 197.216 118.762L197.297 113.763C202.546 113.848 207.74 114.018 212.871 114.271L212.625 119.265C217.815 119.52 222.938 119.86 227.985 120.281L228.401 115.299C233.652 115.737 238.823 116.262 243.905 116.87L243.311 121.835C248.493 122.455 253.578 123.162 258.556 123.952L259.34 119.014C264.568 119.843 269.682 120.763 274.669 121.769L273.681 126.67C278.815 127.705 283.808 128.831 288.648 130.042L289.861 125.191C295.036 126.486 300.044 127.879 304.868 129.362L303.399 134.141C308.434 135.689 313.256 137.334 317.846 139.069L319.614 134.392C324.667 136.301 329.457 138.321 333.961 140.44L331.831 144.964C336.625 147.221 341.06 149.582 345.11 152.033L347.699 147.756C352.419 150.612 356.669 153.603 360.404 156.713L357.205 160.555C361.262 163.933 364.594 167.392 367.187 170.89L371.204 167.912C374.516 172.379 376.826 177.018 378.031 181.788L373.184 183.013C373.726 185.159 374 187.321 374 189.5C374 191.679 373.726 193.841 373.184 195.987L378.031 197.212C376.826 201.982 374.516 206.621 371.204 211.088L367.187 208.11C364.594 211.608 361.262 215.067 357.205 218.445L360.404 222.287C356.669 225.397 352.419 228.388 347.699 231.244L345.11 226.967C341.06 229.418 336.625 231.779 331.831 234.036L333.961 238.56C329.457 240.68 324.667 242.699 319.614 244.608L317.846 239.931C313.256 241.666 308.434 243.312 303.399 244.859L304.868 249.639C300.044 251.121 295.036 252.514 289.861 253.809L288.648 248.958C283.808 250.169 278.815 251.295 273.681 252.33L274.669 257.231C269.682 258.237 264.568 259.157 259.34 259.986L258.556 255.048C253.578 255.838 248.493 256.545 243.311 257.165L243.905 262.13C238.823 262.738 233.652 263.263 228.401 263.701L227.985 258.719C222.938 259.14 217.815 259.48 212.625 259.735L212.871 264.729C207.74 264.982 202.546 265.152 197.297 265.237L197.216 260.238C194.657 260.279 192.085 260.3 189.5 260.3C186.915 260.3 184.343 260.279 181.784 260.238L181.703 265.237C176.454 265.152 171.26 264.982 166.129 264.729L166.375 259.735C161.185 259.48 156.062 259.14 151.015 258.719L150.599 263.701C145.348 263.263 140.177 262.738 135.095 262.13L135.689 257.165C130.507 256.545 125.422 255.838 120.444 255.048L119.66 259.986C114.432 259.157 109.318 258.237 104.331 257.231L105.319 252.33C100.185 251.295 95.1922 250.169 90.3525 248.958L89.1388 253.809C83.9635 252.514 78.9558 251.122 74.1316 249.639L75.6007 244.859C70.5658 243.312 65.7441 241.666 61.1537 239.931L59.3862 244.608C54.3334 242.699 49.5431 240.68 45.0393 238.56L47.1686 234.036C42.3747 231.779 37.9399 229.418 33.8895 226.967L31.3009 231.244C26.5808 228.388 22.3313 225.397 18.5964 222.287L21.7954 218.445C17.7378 215.067 14.4059 211.608 11.8126 208.11L7.79614 211.088C4.48415 206.621 2.17365 201.982 0.968712 197.212L5.81642 195.987C5.27413 193.841 5 191.679 5 189.5C5 187.321 5.27413 185.159 5.81643 183.013L0.968716 181.788C2.17366 177.018 4.48417 172.379 7.79615 167.912L11.8126 170.89C14.4059 167.392 17.7378 163.933 21.7954 160.555L18.5964 156.713C22.3313 153.603 26.5809 150.612 31.301 147.756L33.8896 152.033C37.9399 149.582 42.3747 147.221 47.1686 144.964L45.0393 140.44C49.5431 138.321 54.3334 136.301 59.3862 134.392L61.1537 139.069C65.7441 137.334 70.5658 135.689 75.6007 134.141L74.1316 129.362C78.9558 127.879 83.9635 126.486 89.1388 125.191L90.3525 130.042C95.1922 128.831 100.185 127.705 105.319 126.67L104.331 121.769C109.318 120.763 114.432 119.843 119.66 119.014L120.444 123.952C125.422 123.162 130.507 122.455 135.689 121.835L135.095 116.87C140.177 116.262 145.348 115.737 150.599 115.299L151.015 120.281C156.062 119.86 161.185 119.52 166.375 119.265L166.129 114.271Z" stroke="white" stroke-width="10" stroke-dasharray="15 15"/>

<motion.path
              style={{ pathLength }}
              d={combinedPathData}
              stroke="white"
              strokeWidth="10"
              strokeDasharray="15 15"
            />  
        </svg>



          <div>
            <span className=" text-[#8A8A8A] text-xs ">SCROLL DOWN</span>
            <p className=" text-white capitalize text-xl -mt-1 ">
              General Premise
            </p>
            <p className=" mt-2 ">
              If your company prioritizes <br />
              - Innovation and Adaptability <br />
              - Quality and Excellence <br />
              - Integrity and Transparency <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasoning;
