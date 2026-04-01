//Được định nghĩa 4 phương thức chính của http: get, post, put, delete ngoài ra còn có patch, options, head
// Kết nối các orm với db, firebase, mongodb, mysql, postgresql, sqlserver, oracle
//Dành cho các dự án về landing page, blog, tin tức, giới thiệu công ty, trang cá nhân, trang sự kiện, trang dịch vụ, trang sản phẩm, trang thương mại điện tử
//Không dành cho các dự án về mạng xã hội, diễn đàn, ứng dụng chat, ứng dụng quản lý, ứng dụng đặt vé, ứng dụng đặt phòng, ứng dụng ngân hàng, ứng dụng tài chính, ứng dụng giáo dục, ứng dụng y tế, ứng dụng giải trí, ứng dụng game
//Đối với các dự án về mạng xã hội, diễn đàn, ứng dụng chat, ứng dụng quản lý, ứng dụng đặt vé, ứng dụng đặt phòng, ứng dụng ngân hàng, ứng dụng tài chính, ứng dụng giáo dục, ứng dụng y tế, ứng dụng giải trí, ứng dụng game thì nên sử dụng framework backend như nestjs để xây dựng api và kết nối với db sau đó gọi api từ nextjs để lấy dữ liệu hiển thị lên giao diện người dùng

import { NextRequest, NextResponse } from 'next/server'

//Viết phương thức api get product


export const GET = async (request: NextRequest) => {
    try {
        
        let url = "https://apistore.cybersoft.edu.vn/api/Product";

        //Lấy keyword từ request url
        const { searchParams } = new URL(request.url);
        const keyword = searchParams.get("keyword");
        
        //Nếu có keyword thì thêm vào url để gọi api tìm kiếm sản phẩm
        if (keyword) {
            url += `?keyword=${keyword}`;
        }

        //Thay vì truy xuất orm db thì mình sẽ gọi api của cybersoft để lấy dữ liệu sản phẩm
        // https://apistore.cybersoft.edu.vn/api/Product
        const res = await fetch(url);
        const data = await res.json();
        console.log("data", data);

        //trả về mảng 1 2 3 4 5
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });  
    } catch (error) {
        console.error("Error fetching products:", error);
        return new NextResponse("Error fetching products", { status: 500 });
    }
}


//Tạo ra hàm post
export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        console.log("body", body);
        
        // kết db thêm dữ liệu vào bảng sau đó trả dữ liệu về FE 

        return new NextResponse(JSON.stringify(body), {
            status: 201,
            headers: {
                "Content-Type": "application/json"
            }
        });  
    } catch (error) {
        console.error("Error creating product:", error);
        return new NextResponse("Error creating product", { status: 500 });
    }
}


