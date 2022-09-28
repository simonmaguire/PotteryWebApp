import React, { useState, useEffect } from "react";
import { Form, Container, Card, Col, Row } from "react-bootstrap";
import { DateTime } from "luxon";
import { getBsProps } from "react-bootstrap/lib/utils/bootstrapUtils";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";

function ThrowingSection(props: SectionProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext<IPotInfo>();

  //TODO: Implement Image upload a bit later (Was a bit deeper of a rabbit hole than I thought)
  // const [images, setImages] = useState<File[]>();
  // const [imageURLs, setImageURLs] = useState<string[]>([]);

  // useEffect(() => {
  //   if (!images || images.length < 1) return;
  //   const newImageURLs: string[] = [];
  //   images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
  //   setImageURLs(newImageURLs);
  // }, [images]);

  // const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setImages(Array.from(e.target.files));
  //   }
  // };

  //Needed display in component
  // utc added to prevent unexpected off-by 1 dates because of TZ manipulation by luxom
  const dateValue =
    props.potInfo.throw_date !== undefined && props.potInfo.throw_date !== ""
      ? DateTime.fromISO(props.potInfo.throw_date, { zone: "utc" }).toISODate()
      : "";

  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Throwing
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Controller
                  name="throw_date"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      value={dateValue}
                      type="date"
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLInputElement & HTMLSelectElement
                        >
                      ) => {
                        props.handleChange(e);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                <p>{errors.throw_date?.message}</p>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Clay Weight</Form.Label>
                <Controller
                  name="clay_weight"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <Form.Control
                        {...field}
                        type="text"
                        value={props.potInfo.clay_weight}
                        onChange={(
                          e: React.ChangeEvent<
                            HTMLInputElement & HTMLSelectElement
                          >
                        ) => {
                          props.handleChange(e);
                          field.onChange(e);
                        }}
                      />
                    </div>
                  )}
                />
                <p>{errors.clay_weight?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Thrown Height</Form.Label>
                <Controller
                  name="throw_height"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      value={props.potInfo.throw_height}
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLInputElement & HTMLSelectElement
                        >
                      ) => {
                        props.handleChange(e);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                <p>{errors.throw_height?.message}</p>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Thrown Width</Form.Label>
                <Controller
                  name="throw_width"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      value={props.potInfo.throw_width}
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLInputElement & HTMLSelectElement
                        >
                      ) => {
                        props.handleChange(e);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                <p>{errors.throw_width?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Throwing Notes</Form.Label>
            <Controller
              name="throw_notes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  value={props.potInfo.throw_notes}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => {
                    props.handleChange(e);
                    field.onChange(e);
                  }}
                />
              )}
            />
            <p>{errors.throw_notes?.message}</p>
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Throwing Pictures</Form.Label>
            <div>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={onImageChange}
              />
              {imageURLs.map((imageSrc, k) => (
                <img key={k} src={imageSrc} width="100" height="150" />
              ))}
            </div>
          </Form.Group> */}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ThrowingSection;
