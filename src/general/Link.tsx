import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps as BaseLinkProps,
} from "@chakra-ui/react";

type LinkProps = {
  href: string;
  /** add custom props here if any */
} & BaseLinkProps;

export function Link({ children, href, ...others }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...others}>{children}</ChakraLink>
    </NextLink>
  );
}
