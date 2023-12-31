PGDMP         2    
            {            softexpert_market    15.3 (Debian 15.3-1.pgdg120+1)    15.3     4           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            5           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            6           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            7           1262    16384    softexpert_market    DATABASE     |   CREATE DATABASE softexpert_market WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
 !   DROP DATABASE softexpert_market;
                admin    false                        3079    16385 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            8           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    16396    category    TABLE     �   CREATE TABLE public.category (
    uuid uuid NOT NULL,
    name character varying NOT NULL,
    status boolean NOT NULL,
    fee double precision NOT NULL
);
    DROP TABLE public.category;
       public         heap    admin    false            �            1259    24577    product    TABLE     �   CREATE TABLE public.product (
    uuid uuid NOT NULL,
    name character varying NOT NULL,
    status boolean NOT NULL,
    category_id uuid NOT NULL,
    price double precision NOT NULL,
    quantity bigint NOT NULL
);
    DROP TABLE public.product;
       public         heap    admin    false            �            1259    32769    sale    TABLE     �   CREATE TABLE public.sale (
    uuid uuid NOT NULL,
    total_value double precision NOT NULL,
    total_fee double precision NOT NULL
);
    DROP TABLE public.sale;
       public         heap    admin    false            �            1259    32774 	   sale_item    TABLE     �   CREATE TABLE public.sale_item (
    uuid uuid NOT NULL,
    product_id uuid NOT NULL,
    quantity bigint NOT NULL,
    value double precision NOT NULL,
    fee double precision NOT NULL,
    sale_id uuid NOT NULL
);
    DROP TABLE public.sale_item;
       public         heap    admin    false            .          0    16396    category 
   TABLE DATA           ;   COPY public.category (uuid, name, status, fee) FROM stdin;
    public          admin    false    215          /          0    24577    product 
   TABLE DATA           S   COPY public.product (uuid, name, status, category_id, price, quantity) FROM stdin;
    public          admin    false    216   \       0          0    32769    sale 
   TABLE DATA           <   COPY public.sale (uuid, total_value, total_fee) FROM stdin;
    public          admin    false    217   �       1          0    32774 	   sale_item 
   TABLE DATA           T   COPY public.sale_item (uuid, product_id, quantity, value, fee, sale_id) FROM stdin;
    public          admin    false    218   �       �           2606    16402    category category_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (uuid);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            admin    false    215            �           2606    24583    product products_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.product
    ADD CONSTRAINT products_pkey PRIMARY KEY (uuid);
 ?   ALTER TABLE ONLY public.product DROP CONSTRAINT products_pkey;
       public            admin    false    216            �           2606    32778    sale_item sale_item_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.sale_item
    ADD CONSTRAINT sale_item_pkey PRIMARY KEY (uuid);
 B   ALTER TABLE ONLY public.sale_item DROP CONSTRAINT sale_item_pkey;
       public            admin    false    218            �           2606    32773    sale sale_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_pkey PRIMARY KEY (uuid);
 8   ALTER TABLE ONLY public.sale DROP CONSTRAINT sale_pkey;
       public            admin    false    217            �           2606    24584 !   product products_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(uuid);
 K   ALTER TABLE ONLY public.product DROP CONSTRAINT products_category_id_fkey;
       public          admin    false    3222    215    216            �           2606    32779 #   sale_item sale_item_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sale_item
    ADD CONSTRAINT sale_item_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(uuid) NOT VALID;
 M   ALTER TABLE ONLY public.sale_item DROP CONSTRAINT sale_item_product_id_fkey;
       public          admin    false    3224    216    218            �           2606    32784     sale_item sale_item_sale_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sale_item
    ADD CONSTRAINT sale_item_sale_id_fkey FOREIGN KEY (sale_id) REFERENCES public.sale(uuid) NOT VALID;
 J   ALTER TABLE ONLY public.sale_item DROP CONSTRAINT sale_item_sale_id_fkey;
       public          admin    false    3226    218    217            .   @   x�KIJ21�4��M6H3�516OյLL6�ML10OJ61725��t+*�,)�,�4�34����� �u      /   V   x�ʹ�  ���b�ch3G?�L��t�q<m

�b/�>����.}� �:�����M\��F�.�ie���R���u      0      x������ � �      1      x������ � �     