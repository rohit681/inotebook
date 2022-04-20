import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "625bafbe6b436f938b2d5cf8",
      user: "625ada5706864e6fee1c09e2",
      title: "this is my fukkin title abra ka dabra gilli booo",
      description: "this is a fuckkin desc maa chuda k bhag jaa tu",
      tag: "fukkin tag khada kyaa h nikal naa",
      date: "2022-04-17T06:12:14.455Z",
      __v: 0,
    },
    {
      _id: "625b0f6998150d5363d0218c",
      user: "625ac9027c33eba24b7a8a87",
      title: "changed title",
      description: "changed title",
      tag: "General",
      date: "2022-04-16T18:48:09.125Z",
      __v: 0,
    },
    {
      _id: "625bafbe6b436f938b2d5cf8",
      user: "625ada5706864e6fee1c09e2",
      title: "this is my fukkin title abra ka dabra gilli booo",
      description: "this is a fuckkin desc maa chuda k bhag jaa tu",
      tag: "fukkin tag khada kyaa h nikal naa",
      date: "2022-04-17T06:12:14.455Z",
      __v: 0,
    },
    {
      _id: "625b0f6998150d5363d0218c",
      user: "625ac9027c33eba24b7a8a87",
      title: "changed title",
      description: "changed title",
      tag: "General",
      date: "2022-04-16T18:48:09.125Z",
      __v: 0,
    },
    {
      _id: "625bafbe6b436f938b2d5cf8",
      user: "625ada5706864e6fee1c09e2",
      title: "this is my fukkin title abra ka dabra gilli booo",
      description: "this is a fuckkin desc maa chuda k bhag jaa tu",
      tag: "fukkin tag khada kyaa h nikal naa",
      date: "2022-04-17T06:12:14.455Z",
      __v: 0,
    },
    {
      _id: "625b0f6998150d5363d0218c",
      user: "625ac9027c33eba24b7a8a87",
      title: "changed title",
      description: "changed title",
      tag: "General",
      date: "2022-04-16T18:48:09.125Z",
      __v: 0,
    },
    {
      _id: "625bafbe6b436f938b2d5cf8",
      user: "625ada5706864e6fee1c09e2",
      title: "this is my fukkin title abra ka dabra gilli booo",
      description: "this is a fuckkin desc maa chuda k bhag jaa tu",
      tag: "fukkin tag khada kyaa h nikal naa",
      date: "2022-04-17T06:12:14.455Z",
      __v: 0,
    },
    {
      _id: "625b0f6998150d5363d0218c",
      user: "625ac9027c33eba24b7a8a87",
      title: "changed title",
      description: "changed title",
      tag: "General",
      date: "2022-04-16T18:48:09.125Z",
      __v: 0,
    },
    {
      _id: "625bafbe6b436f938b2d5cf8",
      user: "625ada5706864e6fee1c09e2",
      title: "this is my fukkin title abra ka dabra gilli booo",
      description: "this is a fuckkin desc maa chuda k bhag jaa tu",
      tag: "fukkin tag khada kyaa h nikal naa",
      date: "2022-04-17T06:12:14.455Z",
      __v: 0,
    },
    {
      _id: "625b0f6998150d5363d0218c",
      user: "625ac9027c33eba24b7a8a87",
      title: "changed title",
      description: "changed title",
      tag: "General",
      date: "2022-04-16T18:48:09.125Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
