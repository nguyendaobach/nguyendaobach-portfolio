# Hướng Dẫn Deploy với Domain .me

## Bước 1: Deploy lên Vercel

1. **Push code lên GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **Deploy lên Vercel:**
   - Vào https://vercel.com
   - Import GitHub repository của bạn
   - Vercel sẽ tự động build và deploy
   - Bạn sẽ có domain mặc định: `your-project.vercel.app`

## Bước 2: Mua Domain .me

### Các nhà cung cấp domain .me phổ biến:

1. **Namecheap** (https://www.namecheap.com)
   - Giá: ~$3-5/năm đầu
   - Hỗ trợ tốt, dễ sử dụng

2. **GoDaddy** (https://www.godaddy.com)
   - Giá: ~$2-5/năm đầu
   - Nhiều khuyến mãi

3. **Cloudflare** (https://www.cloudflare.com/products/registrar/)
   - Giá gốc không markup
   - Tích hợp sẵn CDN và bảo mật

### Gợi ý tên domain:
- `nguyendaobach.me`
- `bachdev.me`
- `daobach.me`
- `bachng.me`

## Bước 3: Kết Nối Domain với Vercel

### Tại Vercel Dashboard:

1. Vào project của bạn
2. Click tab **"Settings"**
3. Click **"Domains"**
4. Nhập domain của bạn (vd: `nguyendaobach.me`)
5. Click **"Add"**

### Vercel sẽ cung cấp DNS records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Tại trang quản lý domain (Namecheap/GoDaddy/etc):

1. Vào **DNS Settings** hoặc **DNS Management**
2. Thêm các records mà Vercel cung cấp:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`

3. Lưu lại và đợi 5-30 phút để DNS propagate

### Verify tại Vercel:

- Sau khi add DNS records, quay lại Vercel
- Click **"Verify"** 
- Nếu thành công, domain sẽ active!

## Bước 4: Cấu Hình SSL (Tự Động)

Vercel tự động cấp SSL certificate miễn phí từ Let's Encrypt. Website của bạn sẽ có HTTPS ngay lập tức.

## Tips:

- **Redirect**: Bật tùy chọn redirect `www.domain.me` → `domain.me` trong Vercel Settings
- **Preview Domains**: Mỗi branch sẽ có preview URL riêng
- **Custom Domain**: Bạn có thể add nhiều domain khác nhau

## Tổng Chi Phí:

- **Hosting**: Miễn phí (Vercel Free Plan)
- **Domain .me**: $3-5/năm
- **SSL**: Miễn phí (tự động từ Vercel)

**Tổng: ~$3-5/năm** 🎉
