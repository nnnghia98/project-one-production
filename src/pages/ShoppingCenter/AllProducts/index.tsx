import { useState, useMemo, useEffect } from "react";

import { ProductItem, Pagination, CustomInput } from "components";
import { getStorageItem, useDebounce, useWindowDimensions } from "utils";
import { IProductItemProps } from "interfaces";
import { PAGE_SIZE, MIN_PAGE } from "constant";

import "./styles.scss";

const AllProducts = () => {
  const products = getStorageItem("products");
  const { isMobile } = useWindowDimensions();

  const [currentPage, setCurrentPage] = useState(MIN_PAGE);
  const [value, setValue] = useState<number>(currentPage);

  const debouncedValue = useDebounce<number>(value, 2000);

  const handlePageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    max: number
  ) => {
    const page = Number(event.target.value);
    if (!page) {
      return;
    }

    if (page >= MIN_PAGE && page <= max) {
      setValue(page);
    }
  };

  const currentTableData = useMemo(() => {
    if (isMobile) {
      return products;
    }

    const firstPageIndex = (currentPage - MIN_PAGE) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;

    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products, isMobile]);

  useEffect(() => {
    setCurrentPage(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="all-products">
      <div className="content">
        <div className="title">All products</div>
        <div className="short-des">All of what you need is here</div>
        <div className="list flex row">
          {products.length &&
            currentTableData.map((product: IProductItemProps) => (
              <div key={product.id} className="item">
                <ProductItem
                  id={product.id}
                  name={product.name}
                  cost={product.cost}
                  isPopular={product.isPopular}
                />
              </div>
            ))}
        </div>
        {!isMobile && (
          <div className="pagination-wrapper flex">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={products.length}
              pageSize={PAGE_SIZE}
              onPageChange={(page: number) => setCurrentPage(page)}
            />
            <div className="input-wrapper">
              <CustomInput
                placeholder="Go to page"
                onChange={(event) =>
                  handlePageChange(
                    event,
                    Math.ceil(products.length / PAGE_SIZE)
                  )
                }
                type="number"
                min={MIN_PAGE}
                max={Math.ceil(products.length / PAGE_SIZE)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
