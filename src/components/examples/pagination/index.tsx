import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "../../ui/pagination";

interface PropsType {
  totalPage: number;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
}

export function PaginationDemo({
  totalPage,
  currentPage,
  nextPage,
  prevPage,
  goToPage
}: PropsType) {
  return (
    <Pagination className="w-fit">
      <PaginationContent>
        {currentPage > 0 && (
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={prevPage} />
          </PaginationItem>
        )}
        {Array.from({ length: totalPage }).map((_, index) => (
          <PaginationItem key={index} className="cursor-pointer">
            <PaginationLink
              onClick={() => goToPage(index)}
              isActive={index === currentPage}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {currentPage !== totalPage - 1 && (
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={nextPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
