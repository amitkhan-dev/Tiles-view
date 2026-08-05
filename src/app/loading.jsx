import React from 'react';
import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-4">
      <Spinner size="lg" color="primary" label="Loading Digitools..." labelColor="primary" />
    </div>
  );
};

export default loading;