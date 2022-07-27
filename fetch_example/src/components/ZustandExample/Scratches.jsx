import React, { useEffect } from "react";
import create from "zustand";

const useStore = create((set) => ({
  scratches: 0,
  addScratches: () => set((state) => ({ scratches: state.scratches + 1 })),
}));

export default function Scratches() {
  //const scratchRef = useRef(useStore.getState().scratches);
  //const scratches = useStore((state) => state.scratches);
  const addScratches = useStore((state) => state.addScratches);
  useEffect(() => {
    useStore.subscribe(
      (scratches) => {
        //scratchRef.current = scratches;
        console.log(scratches.scratches);
        //console.log(`scratchRef: ${scratchRef.current}`);
        if (scratches.scratches > 3) {
          alert("too many....");
        }
      },
      (state) => state.scratches
    );
  }, []);

  return (
    <div>
      {/* {scratchRef.current} */}
      {/* {scratches} */}
      <br />
      <button onClick={addScratches}>Add Scratches</button>
    </div>
  );
}
