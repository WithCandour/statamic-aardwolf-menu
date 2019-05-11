# Statamic Aardwolf _by [Candour](https://withcandour.co.uk)_

## Usage

### Example

- Basic Menu Template

```
<ul>
  {{ aardwolf slug="primary" }}
    <li>
      {{ title }}
    </li>
  {{ /aardwolf }}
</ul>
```

- Basic Recursive Template

```
<ul>
  {{ aardwolf slug="primary" }}
    <li>
      {{ title }}

      {{ if children }}
        <ul>
          {{*recursive children*}}
        </ul>
      {{ /if }}
    </li>
  {{ /aardwolf }}
</ul>
```