import {
  CategoryList,
  CategoryItem,
  CardLink,
  ProductImg,
  ProductDesriptionWrapper,
  RatingElement,
  RatedElement,
  ProductTitle,
  RatingWrapper,
} from "./SportsNutritionList.styled";

const SportsNutritionList = ({ data }) => {
  return (
    <CategoryList>
      {data.map(
        ({
          id,
          name,
          formatted_price,
          product_url,
          thumbnail,
          reviews_count,
          rating_summary,
        }) => {
          return (
            <CategoryItem key={id}>
              <CardLink href={product_url} target="_blank" rel="noreferrer">
                <ProductImg src={thumbnail} alt="name" />
                <ProductDesriptionWrapper>
                  <ProductTitle>{name}</ProductTitle>
                  <div>
                    <RatingWrapper>
                      <RatingElement>
                        <RatedElement
                          $rating={`${rating_summary}%`}
                        ></RatedElement>
                      </RatingElement>
                      <p>{`${rating_summary}%`}</p>
                      <p>{`(${reviews_count})`}</p>
                    </RatingWrapper>
                    <p>{formatted_price}</p>
                  </div>
                </ProductDesriptionWrapper>
              </CardLink>
            </CategoryItem>
          );
        }
      )}
    </CategoryList>
  );
};

export default SportsNutritionList;
