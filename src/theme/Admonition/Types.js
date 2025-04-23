import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";
import AdmonitionLayout from "@theme/Admonition/Layout";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import IconDanger from "@theme/Admonition/Icon/Danger";

const infimaClassName = "alert alert--premium";
const defaultProps = {
  icon: "Premium",
  title: (
    <Translate
      id=""
      description="The default label used for the Premium admonition (:::premium)"
    ></Translate>
  ),
};
function PremiumAdmonition(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}
    >
      {props.children}
    </AdmonitionLayout>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  premium: PremiumAdmonition,
};

export default AdmonitionTypes;
