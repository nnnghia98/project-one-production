import { useState, useMemo } from "react";

import { ProductItem, Pagination } from "components";
import { getStorageItem } from "utils";
import { IProductItemProps } from "interfaces";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const PAGE_SIZE = 12;

const AllProducts = () => {
  const products = getStorageItem("products");

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products]);

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
                  thumbnail={productThumbnail}
                  name={product.name}
                  cost={product.cost}
                  isPopular={product.isPopular}
                />
              </div>
            ))}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={products.length}
          pageSize={PAGE_SIZE}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default AllProducts;
