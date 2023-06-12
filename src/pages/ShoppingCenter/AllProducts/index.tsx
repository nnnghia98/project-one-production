import { useState, useMemo, useEffect } from "react";

import { ProductItem, Pagination, CustomInput } from "components";
import { getStorageItem, useDebounce } from "utils";
import { IProductItemProps } from "interfaces";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const PAGE_SIZE = 12;

const AllProducts = () => {
  const products = getStorageItem("products");

  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState<number>(currentPage);

  const debouncedValue = useDebounce<number>(value, 2000);

  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number(event.target.value)) {
      return;
    }

    setValue(Number(event.target.value));
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products]);

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
              onChange={handlePageChange}
              min={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
