"use client";
import React, { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

// this modal shows up on the root page and will show a modal if there
// is no store created yet

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <>
      <div className="p-4">Root Page</div>
    </>
  );
};

export default SetupPage;
