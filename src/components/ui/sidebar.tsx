
import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarContextType {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export interface SidebarProviderProps extends React.PropsWithChildren {
  collapsed?: boolean;
  collapsedWidth?: number;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export function SidebarProvider({
  collapsed = false,
  collapsedWidth = 16,
  onCollapsedChange,
  children,
}: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);

  const toggleCollapsed = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapsedChange?.(newCollapsed);
  };

  return (
    <SidebarContext.Provider
      value={{ collapsed: isCollapsed, setCollapsed: setIsCollapsed, toggleCollapsed }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsible?: boolean;
}

export function Sidebar({ className, collapsible = false, ...props }: SidebarProps) {
  const { toggleCollapsed } = useSidebar();
  
  return (
    <div 
      className={cn("flex flex-col h-full", className)} 
      {...props}
      onClick={collapsible ? undefined : toggleCollapsed}
    />
  );
}

export interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function SidebarTrigger({
  className,
  children,
  asChild = false,
  ...props
}: SidebarTriggerProps) {
  const { toggleCollapsed } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleCollapsed}
      className={cn("", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  disableCollapsing?: boolean;
}

export function SidebarContent({
  className,
  disableCollapsing,
  ...props
}: SidebarContentProps) {
  return (
    <div className={cn("", className)} {...props} />
  );
}

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export function SidebarGroup({
  className,
  open,
  defaultOpen = false,
  onOpenChange,
  children,
  ...props
}: SidebarGroupProps) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  
  // Handle controlled component
  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const handleOpenChange = (value: boolean) => {
    if (open === undefined) {
      setIsOpen(value);
    }
    onOpenChange?.(value);
  };

  return (
    <div className={cn("", className)} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen,
            setIsOpen: handleOpenChange
          });
        }
        return child;
      })}
    </div>
  );
}

export interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export function SidebarGroupLabel({
  className,
  children,
  isOpen,
  setIsOpen,
  ...props
}: SidebarGroupLabelProps) {
  const { collapsed } = useSidebar();
  
  return (
    <div
      className={cn(
        "flex items-center justify-between px-3 py-2 text-xs uppercase tracking-wider font-semibold",
        className
      )}
      {...props}
    >
      {!collapsed && <span>{children}</span>}
    </div>
  );
}

export interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

export function SidebarGroupContent({
  className,
  children,
  isOpen = true,
  ...props
}: SidebarGroupContentProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        {
          "h-0": !isOpen,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface SidebarMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return <div className={cn("px-1", className)} {...props} />;
}

export interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return <div className={cn("my-1", className)} {...props} />;
}

export interface SidebarMenuButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function SidebarMenuButton({
  className,
  asChild = false,
  ...props
}: SidebarMenuButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center rounded-md px-2 py-1.5 text-sm outline-none focus-visible:bg-muted",
        className
      )}
      {...props}
    />
  );
}
