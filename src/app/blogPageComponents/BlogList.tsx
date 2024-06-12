'use client'

/* Importaciones MUI */
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useMutation } from 'react-query';
import Pagination from '@mui/material/Pagination';

/* Importación de servicios (APIs) */
import { getBlogsPreview } from '@/services/AppServices';

/* Importación de componentes */
import CardBlogSkeleton from './CardBlogSkeleton';
import LoadingPage from '@/generalComponents/LoadingPage';
import CardBlogPreview from "../blogPageComponents/CardBlogPreview";

/* Importación de tipos */
import { Blog } from '@/types';

/* Props */
interface BlogListProps {
  isMobile: boolean,
  isLoadingPage: boolean,
  setIsLoadingPage: Dispatch<SetStateAction<boolean>>,
};

/**
* @module BlogList
* @description Aquí es donde se encuentra almacenado todos los datos de los blogs.
* @param {boolean} isMobile - Para identificar si es vista móvil.
* @param {boolean} isLoadingPage - Para identificar si se encuentra cargando la página.
* @param {Dispatch<SetStateAction<boolean>>} setIsLoadingPage - Para asignar si se encuentra cargando la página.
* @returns Devuelve la lista de elementos TSX los cuales son la vista previa de los blogs.
*/
const BlogList: FC<BlogListProps> = ({ isMobile, isLoadingPage, setIsLoadingPage }) => {

  const [size] = useState(6);
  const [page, setPage] = useState(0);
  const [counter, setCounter] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { mutate: blogsPreview, data: blogsPreviewData, isLoading: isLoadingBlogsPreview } = useMutation(["getBlogsPreview", page, size], () => getBlogsPreview(page, size), {
    onSuccess: (data) => {
      //console.log(data);
      setTotalPages(data?.totalPages);
    }
  });

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if (typeof value === 'number' && value > 0) {
      const pagina = value - 1;
      const contador = counter + 1;
      setPage(pagina);
      setCounter(contador);
    };
  };

  useEffect(() => {
    blogsPreview()
    if (!isLoadingBlogsPreview && counter === 0) {
      setIsLoadingPage(false);
    };
  }, [page]);

  if (isLoadingPage && counter === 0) return (
    <LoadingPage isMobile={isMobile} />
  );

  return (
    <>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={4}>
        {isLoadingBlogsPreview
          ? <CardBlogSkeleton isMobile={isMobile} />
          :
          <>
            {blogsPreviewData?.content?.map((blog: Blog, index: number) => {
              return (
                <Grid key={index} item xs={12} sm={12} md={6} lg={6}>
                  <CardBlogPreview blog={blog} isMobile={isMobile} />
                </Grid>
              );
            })}
          </>
        }
        < Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            color="primary"
            count={totalPages}
            onChange={handleChangePage}
          />
        </Grid>
      </Grid >
      <br />
    </>
  );
};

export default BlogList;