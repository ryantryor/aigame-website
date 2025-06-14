
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GamePaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const GamePagination = ({ totalPages, currentPage, onPageChange }: GamePaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {/* Remove asChild, just use button directly */}
            <button
              className="flex items-center gap-1 pl-2.5 px-3 py-2 rounded bg-gray-800 text-gray-100 disabled:opacity-40"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
              Previous
            </button>
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === i + 1}
                size="icon"
                // Render as button for accessibility
                asChild={false as never}
              >
                <button
                  className="px-3 py-2 rounded"
                  onClick={() => onPageChange(i + 1)}
                  aria-current={currentPage === i + 1}
                >
                  {i + 1}
                </button>
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <button
              className="flex items-center gap-1 pr-2.5 px-3 py-2 rounded bg-gray-800 text-gray-100 disabled:opacity-40"
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default GamePagination;
