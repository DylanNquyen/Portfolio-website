"use client"

import { Award, Code2, Trophy } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const content = {
  en: {
    section: "01. About Me",
    heading: "Background",
    bio1: (
      <>
        I&apos;m a Software Engineering student at{" "}
        <span className="text-foreground font-medium">HUTECH</span> with hands-on experience building responsive frontend applications and full-stack systems. My experience spans React, Vue, TypeScript, Node.js, NestJS, REST/WebSocket APIs, authentication, database design, Docker, and microservices-style architecture.
      </>
    ),
    bio2: (
      <>
        I enjoy building reliable, maintainable products from user interface to backend services. My work combines strong frontend craftsmanship with API design, database logic, security, and deployment awareness.
      </>
    ),
    bio3: "I focus on clean architecture, scalable implementation, and practical delivery across the full product lifecycle.",
    recognition: "Recognition",
    award1: "Outstanding Student Award",
    award1sub: "Faculty of IT, HUTECH (2025)",
    award2: "IT Got Talent - Finalist",
    award2sub: "HUTECH 10th Edition (2025)",
    certifications: "Certifications",
    lang: "Languages",
    edu: "Education",
    eduSub: "Software Engineering, 2022 - 2026",
  },
  vi: {
    section: "01. Giới thiệu",
    heading: "Về tôi",
    bio1: (
      <>
        Tôi là sinh viên Kỹ thuật Phần mềm tại{" "}
        <span className="text-foreground font-medium">HUTECH</span>, có kinh nghiệm thực tế xây dựng các ứng dụng frontend responsive và hệ thống full-stack. Kinh nghiệm của tôi bao gồm React, Vue, TypeScript, Node.js, NestJS, REST/WebSocket APIs, authentication, thiết kế cơ sở dữ liệu, Docker và kiến trúc microservices-style.
      </>
    ),
    bio2: (
      <>
        Tôi yêu thích xây dựng các sản phẩm ổn định, dễ bảo trì từ giao diện người dùng đến backend services. Công việc của tôi kết hợp kỹ năng frontend vững chắc với thiết kế API, logic database, bảo mật và ý thức triển khai.
      </>
    ),
    bio3: "Tôi tập trung vào kiến trúc sạch, triển khai mở rộng và đưa sản phẩm vào thực tế một cách hiệu quả.",
    recognition: "Thành tích",
    award1: "Sinh viên Xuất sắc",
    award1sub: "Khoa CNTT, HUTECH (2025)",
    award2: "IT Got Talent - Top Finalist",
    award2sub: "HUTECH Lần thứ 10 (2025)",
    certifications: "Chứng chỉ",
    lang: "Ngôn ngữ",
    edu: "Học vấn",
    eduSub: "Kỹ thuật Phần mềm, 2022 - 2026",
  },
}

export function About() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="about" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">{t.section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.heading}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">{t.bio1}</p>
            <p className="text-muted-foreground leading-relaxed text-lg">{t.bio2}</p>
            <p className="text-muted-foreground leading-relaxed text-lg">{t.bio3}</p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                {/* <Trophy className="w-5 h-5 text-primary" /> */}
                <h3 className="font-semibold text-foreground">{t.recognition}</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">{t.award1}</p>
                    <p className="text-muted-foreground">{t.award1sub}</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">{t.award2}</p>
                    <p className="text-muted-foreground">{t.award2sub}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">{t.certifications}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>CEF B1</span>
                  <span className="text-foreground">Dec 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === "en" ? "Communication & Teamwork Excellence" : "Xuất sắc Giao tiếp & Làm việc nhóm"}</span>
                  <span className="text-foreground">Aug 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
