import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header change">
        <Helmet>
          <meta charSet="utf-8" />
          <title className="change"> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>

          
        </Row>
        <div className="mb-5 po_items_ho ">
          {dataportfolio.map((data, i) => {
            return (
							<div key={i} className="po_item col-4">
								<img src={data.img} alt="" />
								<div className="content">
									<p>{data.description}</p>
									<div className="siteChange  ">
										<a className="text-decoration-none mx-5 " href={data.link}>
											Live Site
										</a>
										<a className="text-decoration-none" href={data.onGit}>
											On GitHub
										</a>
									</div>
								</div>
							</div>
						);
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
