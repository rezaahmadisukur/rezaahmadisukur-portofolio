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
          <PaginationItem>
            <PaginationPrevious onClick={prevPage} />
          </PaginationItem>
        )}
        {Array.from({ length: totalPage }).map((_, index) => (
          <PaginationItem key={index}>
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
          <PaginationItem>
            {/* {console.log(totalPage)} */}
            <PaginationNext onClick={nextPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
