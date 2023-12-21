import React from "react";
import myImage from "@/assets/jinwoo.jpg";

const About = () => {
  const { src } = myImage;
  return (
    <div className="h-screen w-full flex items-center justify-center text-black">
      <div className="w-11/12	h-4/5 flex items-center justify-center">
        <img className="w-1/2 h-full rounded-l-lg" src={src} alt="my image" />
        <div className="w-1/2 h-full p-3 bg-white text-wrap text-ellipsis overflow-hidden rounded-r-lg">
          <h1 className="font-bold text-lg">A bit about me</h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            exercitationem voluptate sapiente necessitatibus alias rerum
            voluptates accusamus tenetur, eaque natus possimus aut magni odio
            saepe eligendi laudantium. Enim, illo quod. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Sed quis, vitae ea repellendus
            pariatur nihil ad cupiditate minima et quasi laborum. Amet eius,
            aliquam impedit modi tempore doloribus iusto. Nobis nam, unde
            officia iusto repellat obcaecati temporibus recusandae corrupti odit
            voluptatem dolor est ullam ad eligendi eum, et molestiae. Possimus
            porro adipisci reiciendis corrupti dignissimos fuga aliquam aperiam
            quisquam praesentium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
