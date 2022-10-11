import React from "react";
import { Form, Container, Card, Col, Row } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";
import { dateStringToComponentValue } from "../../common/utility";

function ThrowingSection(props: SectionProps) {
  const {
    control,
    trigger,
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
                <Form.Label id="throw-date-label">Date</Form.Label>
                <Controller
                  name="throw_date"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      value={dateStringToComponentValue(
                        props.potInfo.throw_date
                      )}
                      type="date"
                      aria-labelledby="throw-date-label"
                      onChange={async (
                        e: React.ChangeEvent<
                          HTMLInputElement & HTMLSelectElement
                        >
                      ) => {
                        props.handleChange(e);
                        field.onChange(e);
                        await trigger([
                          "trim_date",
                          "throw_date",
                          "result_date",
                        ]);
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
                        aria-label="clay-weight"
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
                      aria-label="throw-height"
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
                      aria-label="throw-width"
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
                  aria-label="throw-notes"
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
