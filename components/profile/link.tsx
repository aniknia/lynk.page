import { useState } from "react";
import Link from "next/link";
import { Button, useBoolean } from "@chakra-ui/react";
import LinkModal from "./linkmodal";

export default function Lynk({
  name = "Link",
  address = "https://lynk.page",
  icon = "",
  iconSide = "",

  color = "gray",
  variant = "outline", // outline, solid
  style = "round",

  internal = true,
  editable = true,
}) {
  const [linkName, setLinkName] = useState(name);
  const [linkAddress, setLinkAddress] = useState(address);
  const [linkIcon, setLinkIcon] = useState(icon);
  const [linkIconSide, setIconLinkSide] = useState(iconSide);

  const [buttonColor, setButtonColor] = useState(color);
  const [buttonVariant, setButtonVariant] = useState(variant);
  const [buttonRadius, setButtonRadius] = useState(
    style == "round" ? "20px" : "0px"
  );

  const [internalLink, setInternalLink] = useState(internal);
  const [editableLink, setEditableLink] = useState(editable);

  return (
    <>
      {editable ? (
        <>
          <Button
            as="button"
            fontSize="2xl"
            fontWeight="hairline"
            height="40px"
            width="100%"
            colorScheme={buttonColor}
            variant={buttonVariant}
            borderRadius={buttonRadius}
          >
            {linkName}
          </Button>
          <LinkModal />
        </>
      ) : (
        <Button
          as="a"
          href={linkAddress}
          fontSize="2xl"
          fontWeight="hairline"
          height="40px"
          width="100%"
          colorScheme={buttonColor}
          variant={buttonVariant}
          borderRadius={buttonRadius}
        >
          {linkName}
        </Button>
      )}
    </>
  );
}
