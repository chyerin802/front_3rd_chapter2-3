import { forwardRef, HTMLAttributes } from "react"

// TableRoot 정의
const TableRoot = forwardRef<HTMLTableElement, PropsWithClassName<HTMLAttributes<HTMLTableElement>>>(
  ({ className, ...props }, ref) => (
    <div className="w-full overflow-auto">
      <table ref={ref} className={`table-fixed w-full caption-bottom text-sm ${className || ""}`} {...props} />
    </div>
  ),
)
TableRoot.displayName = "Table"

// 하위 컴포넌트들
const TableHeader = forwardRef<HTMLTableSectionElement, PropsWithClassName<HTMLAttributes<HTMLTableSectionElement>>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={`[&_tr]:border-b ${className || ""}`} {...props} />,
)
TableHeader.displayName = "TableHeader"

const TableBody = forwardRef<HTMLTableSectionElement, PropsWithClassName<HTMLAttributes<HTMLTableSectionElement>>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className || ""}`} {...props} />
  ),
)
TableBody.displayName = "TableBody"

const TableRow = forwardRef<HTMLTableRowElement, PropsWithClassName<HTMLAttributes<HTMLTableRowElement>>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-14 ${className || ""}`}
      {...props}
    />
  ),
)
TableRow.displayName = "TableRow"

const TableHead = forwardRef<HTMLTableCellElement, PropsWithClassName<HTMLAttributes<HTMLTableCellElement>>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className || ""}`}
      {...props}
    />
  ),
)
TableHead.displayName = "TableHead"

const TableCell = forwardRef<HTMLTableCellElement, PropsWithClassName<HTMLAttributes<HTMLTableCellElement>>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 ${className || ""}`} {...props} />
  ),
)
TableCell.displayName = "TableCell"

// 네임스페이스로 내보내기
export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
})
