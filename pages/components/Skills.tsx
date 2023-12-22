import React, { useEffect, useState } from "react";
import { Skill } from "@/types/skillType";
import {
  StorageReference,
  getDownloadURL,
  listAll,
  ref,
} from "firebase/storage";
import { storage } from "@/lib/firebase";

const downloadURL = async () => {
  const urlArray = [];
  try {
    const listRef = ref(storage, "skills");
    const res = await listAll(listRef);
    console.log("res", res);
    for (let item of res.items) {
      const url = await getDownloadURL(item);
      urlArray.push(url);
    }
    return urlArray;
  } catch (error) {
    console.log("error", error);
  }
};
export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/skills");
  const skills = await response.json();
  const urlArray = await downloadURL();

  console.log("skills", skills);
  console.log("urlArray", urlArray);

  return {
    props: {
      skills,
      urlArray,
    },
  };
}
const Skills = ({ skills, urlArray }: { skills: Skill[]; urlArray: any }) => {
  console.log("skills", skills);
  console.log("urlArray", urlArray);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-32">
      <h1 className="text-3xl">My Skills</h1>
      <div className="grid grid-cols-3 gap-52">
        {/* {skills.map((element, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center gap-20"
              key={element.name}
            >
              <img src={urlArray[index]} />
              <h1>{element.name}</h1>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Skills;
