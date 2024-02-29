import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import newsData from '../news/news.json';

const Blog = () => {
    const [selectedNews, setSelectedNews] = useState("sa");

    const maxCharacterCount = 100;
    const truncateText = (text) => {
        if (text.length > maxCharacterCount) {
            if (selectedNews["haber-icerigi"] == text) {
                return text
            } else {
                return text.substring(0, maxCharacterCount) + '...';
            }
        }
        return text;
    };

    useEffect(() => {
        // Eğer bir haber seçiliyse, seçilen haberin ID'sine göre işlem yap
        if (selectedNews && selectedNews.id) {
            // Tüm imglerin parent elementlerinden "d-none" sınıfını kaldır
            document.querySelectorAll("img").forEach((img, index) => {
                if (index === selectedNews.id) {
                    img.parentElement.classList.add("d-none");
                } else {
                    img.parentElement.classList.remove("d-none");
                }
            });
        } else {
            // Hiçbir haber seçili değilse, tüm parent elementlerinden "d-none" sınıfını kaldır
            document.querySelectorAll("img").forEach(img => {
                img.parentElement.classList.remove("d-none");
            });
        }
    }, [selectedNews]);

    return (
        <motion.div className="container mt-10">
            {newsData.map((item) => (
                <motion.div
                    key={item.id}
                    className="custom-card mb-4 d-flex flex-row "
                    style={{ width: '100%', cursor: 'pointer' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    onClick={() => {
                        if (selectedNews == item) {
                            setSelectedNews([])
                        }
                        else {
                            setSelectedNews(item)
                        }
                    }}
                >
                    <div className="custom-card-img-start">
                        <img src={item['haber-resmi']} alt={item['haber-basligi']} style={{ width: "200px", height: "200px", objectFit: "cover" }} id={item["id"]} />
                    </div>
                    <div className="custom-card-body">
                        <h2 className="custom-card-title">{item['haber-basligi']}</h2>
                        <p className="custom-card-text" >{truncateText(item['haber-icerigi'])}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Blog;

