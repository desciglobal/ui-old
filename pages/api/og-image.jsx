import { ImageResponse } from "@vercel/og";
import { get } from "http";
import { NextRequest } from "next/server";
import React from "react";



const websiteUrl = "https://www.desci.global/";


const font = fetch(new URL(`${websiteUrl}/fonts/ABC_Monument_Grotesk/ABCMonumentGrotesk-Medium.otf`, import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

// fetch('http://localhost:3000/api/og-image', {  headers: {
//   'Accept': 'application/json',
// },})
//   .then((response) => response.json())
//   .then((data) => console.log(data));

fetch('http://localhost:3000/api/featuredEvents').then(function (response) {
	// The API call was successful!
	console.log(response.body);
}).catch(function (error) {
	// There was an error
	console.warn(error);
});


export const config = {
  runtime: "experimental-edge"
}

export default async function () {
  const fontData = await font;
  // const eventsData = await events;
  // console.log(eventsData)
 


 

  return new ImageResponse(
    (
      <div tw="flex h-full ">
        <div tw="flex flex-col w-1/2 p-[48px]">
          <div tw="flex h-10" >
          <img
            tw="h-full"
            src={`${websiteUrl}/images/dynamic-og/og-logo-small.svg`}
            alt="Prism"
          />
          </div>
          <h1 tw="text-[52px]">Join global DeSci Events</h1>
          <p tw="text-[26px]">Hello</p>
        </div>
        <div tw="flex w-1/2 h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            tw="w-full h-full"
            src={`${websiteUrl}/images/dynamic-og/og-logo.png`}
            alt="Prism"
          />
        </div>
      </div>

   
  ),
  {
    fonts: [
      {
        name: "Inter",
        data: fontData,
        weight: 500,
      }
    ],
  });
};

