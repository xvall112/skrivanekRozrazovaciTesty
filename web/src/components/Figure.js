import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

export const Figure = ({ value }) => {
  if (!value || !value.asset || !value.asset._id) {
    return null;
  }
  const gatsbyImageData = getGatsbyImageData(
    value,
    { maxWidth: 675 },
    clientConfig.sanity
  );
  return (
    <figure>
      <GatsbyImage image={gatsbyImageData} alt={value.alt} />
      <figcaption>{value.caption}</figcaption>
    </figure>
  );
};
