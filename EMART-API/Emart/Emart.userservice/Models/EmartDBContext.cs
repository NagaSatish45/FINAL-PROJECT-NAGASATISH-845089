using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Emart.userservice.Models
{
    public partial class EmartDBContext : DbContext
    {
        public EmartDBContext()
        {
        }

        public EmartDBContext(DbContextOptions<EmartDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<Subcategory> Subcategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-A63MUHA\\SQLEXPRESS;Initial Catalog=EmartDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasKey(e => e.Bid)
                    .HasName("PK__Buyer__DE90ADE7C632EB2D");

                entity.Property(e => e.Bid)
                    .HasColumnName("bid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Bmail)
                    .HasColumnName("bmail")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Bmobile)
                    .HasColumnName("bmobile")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Bname)
                    .HasColumnName("bname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Createddate)
                    .HasColumnName("createddate")
                    .HasColumnType("date");

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("brief_details")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .HasColumnName("category_name")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.Iid)
                    .HasName("PK__Items__DC5021AADAB7DD3D");

                entity.Property(e => e.Iid)
                    .HasColumnName("iid")
                    .ValueGeneratedNever();

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .HasColumnName("item_name")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.StockNumber).HasColumnName("stock_number");

                entity.Property(e => e.SubcategoryId).HasColumnName("subcategory_id");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Items__category___267ABA7A");

                entity.HasOne(d => d.Subcategory)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubcategoryId)
                    .HasConstraintName("FK__Items__subcatego__276EDEB3");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.HasKey(e => e.Pid)
                    .HasName("PK__Purchase__DD37D91A71DAE49E");

                entity.Property(e => e.Pid)
                    .HasColumnName("pid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Bid).HasColumnName("bid");

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("datetime");

                entity.Property(e => e.Iid).HasColumnName("iid");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.Property(e => e.TransactionId).HasColumnName("Transaction_id");

                entity.Property(e => e.TransactionType)
                    .HasColumnName("transaction_type")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.B)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Bid)
                    .HasConstraintName("FK__PurchaseHis__bid__2A4B4B5E");

                entity.HasOne(d => d.I)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Iid)
                    .HasConstraintName("FK__PurchaseHis__iid__2C3393D0");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__PurchaseHis__sid__2B3F6F97");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasKey(e => e.Sid)
                    .HasName("PK__Seller__DDDFDD365D7C5C82");

                entity.Property(e => e.Sid)
                    .HasColumnName("sid")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefAboutCompany)
                    .HasColumnName("brief_about_company")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .HasColumnName("companyname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin).HasColumnName("GSTIN");

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .HasColumnName("postal_address")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Smail)
                    .HasColumnName("smail")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Smobile)
                    .HasColumnName("smobile")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sname)
                    .HasColumnName("sname")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Subcategory>(entity =>
            {
                entity.Property(e => e.SubcategoryId)
                    .HasColumnName("subcategory_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("brief_details")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.Gst).HasColumnName("GST");

                entity.Property(e => e.SubcategoryName)
                    .HasColumnName("subcategory_name")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Subcategory)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Subcatego__categ__239E4DCF");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
