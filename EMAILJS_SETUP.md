# Setup EmailJS cho Contact Form

## Bước 1: Tạo tài khoản EmailJS

1. Vào https://www.emailjs.com/
2. Click **"Sign Up"** → Đăng ký miễn phí
3. Verify email

## Bước 2: Tạo Email Service

1. Vào **Email Services** → Click **"Add New Service"**
2. Chọn **Gmail** (hoặc email provider khác)
3. Click **"Connect Account"** → Đăng nhập Gmail của bạn (nguyendaobach@gmail.com)
4. Copy **Service ID** (ví dụ: `service_abc123`)

## Bước 3: Tạo Email Template

1. Vào **Email Templates** → Click **"Create New Template"**
2. Template content:

```
Subject: New message from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

3. **Template Settings:**
   - To Email: `{{to_email}}` (sẽ tự động gửi đến nguyendaobach@gmail.com)
   
4. Click **"Save"**
5. Copy **Template ID** (ví dụ: `template_xyz789`)

## Bước 4: Lấy Public Key

1. Vào **Account** → **General**
2. Tìm **Public Key** 
3. Copy key (ví dụ: `abcXYZ123_456`)

## Bước 5: Cấu hình Environment Variables

Tạo file `.env.local` trong root folder:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcXYZ123_456
```

**⚠️ Quan trọng:** Add `.env.local` vào `.gitignore` để không push lên GitHub!

## Bước 6: Deploy lên Vercel

1. Vào Vercel Dashboard → Project Settings
2. Click **Environment Variables**
3. Thêm 3 biến:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`  
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

4. Redeploy project

## Test Contact Form

1. Vào website
2. Điền form và submit
3. Check email `nguyendaobach@gmail.com`
4. Bạn sẽ nhận được email từ contact form! ✅

## EmailJS Free Plan

- ✅ **200 emails/tháng** (miễn phí)
- ✅ Không giới hạn templates
- ✅ Hỗ trợ nhiều email providers

**Đủ cho portfolio website!** 🎉
