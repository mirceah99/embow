var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getProducts(numberOfProducts, page) {
    return __awaiter(this, void 0, void 0, function* () {
        return [
            {
                title: "Carrot",
                price: 3,
                images: ["/img/carrot/1.png", "/img/carrot/2.png", "/img/carrot/3.webp"],
                id: "gfyuaiuweorf",
            },
            {
                title: "Tomato",
                price: 5,
                images: ["/img/tomato/1.jpg", "/img/tomato/2.webp", "/img/tomato/3.jpg"],
                id: "gfyuaiuwexxxf",
            },
            {
                title: "Cosmonaut",
                price: 10,
                images: ["/img/cosmonaut/1.webp"],
                id: "gfyuaiyyexxxf",
            },
        ];
    });
}
