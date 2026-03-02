interface StockBadgeProps {
    productName: string;
    quantity: number;
}

const StockBadge = ({ productName, quantity }: StockBadgeProps) => {

    let statusClasses = "";
    let statusText = `Quantity: ${quantity}`;

    if (quantity === 0) {
        statusClasses = "bg-slate-200 text-slate-500 line-through decoration-red-500";
        statusText = "Agotado";
    } else if (quantity >= 1 && quantity <= 10) {
        statusClasses = "bg-orange-500 text-white animate-pulse";
        statusText = "¡Últimas unidades!";
    } else {
        statusClasses = "bg-blue-100 text-blue-800 border-blue-200";
    }

    return (
        <div className="flex flex-col items-center gap-2 p-4 border rounded-xl w-64 bg-white shadow-sm">
            <h3 className="font-bold text-gray-800 text-center">{productName}</h3>
            <div className={`px-3 py-1 rounded-full text-sm font-medium text-center ${statusClasses}`}>
                {statusText}
            </div>
        </div>

    );
};

export default StockBadge;

