"use client";
import React, { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTable } from "./Table-provider";

const baseClass = "flex items-center justify-end p-2 gap-2";
export const TablePagination: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { page, setPage, pageSize, total } = useTable();
  return (
    <div className={cn(baseClass, className)}>
      <Button
        type="button"
        variant="secondary"
        disabled={page === 1}
        onClick={() => setPage((p: number) => Math.max(p - 1, 1))}
        className="size-8 p-0 grid place-items-center"
      >
        <ChevronLeft size={18} />
      </Button>

      <span className="size-8 grid place-items-center">{page}</span>
      <Button
        disabled={page * pageSize >= total}
        onClick={() => setPage((prev) => prev + 1)}
        type="button"
        variant="secondary"
        className="size-8 p-0 grid place-items-center"
      >
        <ChevronRight size={18} />
      </Button>
    </div>
  );
};

TablePagination.displayName = "TablePagination";
