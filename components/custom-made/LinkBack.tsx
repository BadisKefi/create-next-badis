"use client";
import { useRouter } from "next/navigation";
import { Button, type ButtonProps } from "../ui/button";

export type BackButtonProps = ButtonProps;

export default function BackButton({
  children,
  className,
  ...props
}: BackButtonProps) {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} className={className} {...props}>
      {children}
    </Button>
  );
}
